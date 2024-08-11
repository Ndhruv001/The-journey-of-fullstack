import { findUserByEmail } from "../models/userModel.js";
import { verifyToken } from "../utils/jwtUtil.js";

async function verifyJwt(req, _, next){
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
        if(!token){
            throw new Error("Unauthorized access.");
        }

        const decodedToken = verifyToken(token);
        if(!decodedToken){
            throw new Error("Invalid token");
        }

        const user = await findUserByEmail(decodedToken?.email);
        if(!user){
            throw new Error("Invalid access token.");
        }

        req.user = user;
        next();

    } catch (error) {
        throw new Error(error?.message || "Invalid access token");
    }

}

export {
    verifyJwt
}