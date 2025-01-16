import { generateAccessToken } from "./jwt.js";
import httpOnlyOptions from "./httpOnlyOptions.js";

function sendTokensAndResponse(res, user) {
  const accessToken = generateAccessToken({ id: user.id, email: user.email });
  return res
    .status(200)
    .cookie("accessToken", accessToken, httpOnlyOptions)
    .json({
      success: true,
      data: "",
      message: "User login successfully",
    });
}

export default sendTokensAndResponse;
