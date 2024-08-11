import jwt from 'jsonwebtoken';
import config from '../../config/config.js';

function generateToken(user){
   const payload = {userId : user.id, email : user.email};
   const options = {expiresIn : config.jwtSecretKeyExpiry};

   return jwt.sign(payload, config.jwtSecretKey, options);
}

function verifyToken(token){
    try {
        return jwt.verify(token, config.jwtSecretKey);
    } catch (error) {
        console.log("Error while verifying jwt token ", error);
        return null;
    }
}

export {
    generateToken,
    verifyToken
}