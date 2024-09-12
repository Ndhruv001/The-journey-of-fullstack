import jwt from 'jsonwebtoken';
import config from '../../config/config.js';

function generateAccessToken(payload) {
    const options = { expiresIn: config.jwtAccessTokenSecretKeyExpiry };
    return jwt.sign(payload, config.jwtAccessTokenSecretKey, options);
}

function verifyAccessToken(token) {
    try {
        const response =  jwt.verify(token, config.jwtAccessTokenSecretKey);
        console.log("🚀 ~ verifyAccessToken ~ response:", response)
        return response;
    } catch (error) {
        console.log("🚀 ~ verifyAccessToken ~ error:", error)
        if (error.name === 'TokenExpiredError') {
            return { valid: false, expired: true };  
        }else{
            return { valid: false, expired: false };  
        }
    }
}

function generateRefreshToken(payload) {
    const options = { expiresIn: config.jwtRefreshTokenSecretKeyExpiry };
    return jwt.sign(payload, config.jwtRefreshTokenSecretKey, options);
}

function verifyRefreshToken(token) {
    try {
        return jwt.verify(token, config.jwtRefreshTokenSecretKey);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return { valid: false, expired: true }; 
        }
        return { valid: false, expired: false };  
    }
}

function refreshAccessToken(refreshToken) {
    const decodedRefreshToken = verifyRefreshToken(refreshToken);
    
    if (decodedRefreshToken.expired) {
        return { success: false, message: "Refresh token expired" };
    }

    if (!decodedRefreshToken.valid) {
        return { success: false, message: "Invalid refresh token" };
    }

    const newAccessToken = generateAccessToken({
        id: decodedRefreshToken.id,
        type: decodedRefreshToken.type
    });

    return { success: true, accessToken: newAccessToken };
}

export {
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    refreshAccessToken
};
