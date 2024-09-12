import { refreshAccessToken, verifyAccessToken } from "../../utils/jwt.js";
import httpOnlyOptions from "../../utils/httpOnlyOptions.js";

function verifyJWT(type) {
  return (req, res, next) => {
    const token = req.cookies.accessToken || req.headers?.authorization.split(' '[1])
    console.log("🚀 ~ return ~ token:", token)

    if (!token) {
      return res.status(401).json({ success: false, message: "Authentication token not found" });
    }

    const decodedToken = verifyAccessToken(token);
    console.log("🚀 ~ return ~ decodedToken:", decodedToken)

    if (decodedToken.expired) {
      console.log("🚀 ~ return ~ decodedToken.EXPIRED:", decodedToken)
      const refreshToken = req.cookies.refreshToken || req.headers?.authorization?.split(" ")[2];
      
      if(!refreshToken){
        return res.status(401).json({success: false, message: "Refresh token not found" })
      }

      const refreshResult = refreshAccessToken(refreshToken);

      if (!refreshResult.success) {
        return res.status(401).json({ success: false, message: refreshResult.message });
      }

      res.cookie('accessToken', refreshResult.accessToken, httpOnlyOptions);
      req.user = verifyAccessToken(refreshResult.accessToken);  // Verify new access token
      next();

    }// } else if (!(decodedToken.valid)) {
    //   console.log("🚀 ~ return ~ decodedToken.VALID:", decodedToken)
    //   return res.status(403).json({ success: false, message: "Invalid token" });
    // }

    // Ensure the user is the correct type (e.g., 'doctor' or 'patient')
    if (decodedToken.type !== type) {
      console.log("🚀 ~ return ~ decodedToken.TYPE:", decodedToken)
      return res.status(403).json({ success: false, message: "Unauthorized access" });
    }

    req.user = decodedToken;
    next();
  };
}

export { verifyJWT };
