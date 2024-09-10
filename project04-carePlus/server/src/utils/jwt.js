import jwt from 'jsonwebtoken';
import config from '../../config/config.js';

function generateAccessToken(payload){
   const options = {expiresIn : config.jwtAccessTokenSecretKeyExpiry};

   return jwt.sign(payload, config.jwtAccessTokenSecretKey, options);
}

function verifyAccessToken(token){
    try {
        return jwt.verify(token, config.jwtAccessTokenSecretKey);
    } catch (error) {
        console.log("Error while verifying jwt token ", error);
        return null;
    }
}

function generateRefreshToken(payload){
    const options = {expiresIn: config.jwtRefreshTokenSecretKeyExpiry}

    return jwt.sign(payload, config.jwtRefreshTokenSecretKey, options)
}

function verifyRefreshToken(token){
    try {
        return jwt.verify(token, config.jwtRefreshTokenSecretKey);
    } catch (error) {
        console.log("🚀 ~ verifyRefreshToken ~ error:", error)
        return null;        
    }
}

export {
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken
}