import jwt from "jsonwebtoken";
import config from "../../config/config.js";

function generateAccessToken(payload) {
  const options = { expiresIn: config.jwtAccessTokenSecretKeyExpiry };
  return jwt.sign(payload, config.jwtAccessTokenSecretKey, options);
}

function verifyAccessToken(token) {
  try {
    return jwt.verify(token, config.jwtAccessTokenSecretKey);
  } catch (error) {
    console.log("🚀 ~ verifyAccessToken ~ error:", error);
    return null;
  }
}

export { generateAccessToken, verifyAccessToken };
