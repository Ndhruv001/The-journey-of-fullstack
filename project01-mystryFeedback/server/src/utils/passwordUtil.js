import bcrypt from "bcrypt";
import config from "../../config/config.js";

async function encryptPassword(password){
    try {
        const hashPassword = bcrypt.hash(password, +config.bcryptSaltRound);
        return hashPassword;
    } catch (error) {
        console.log("Error while encryption of password ", error);
        throw new Error("Error while encryption of password.");
    }
}

async function verifyPassword(planPassword, hashedPassword){
    try {
        const match = await bcrypt.compare(planPassword, hashedPassword);
        return match;
    } catch (error) {
        throw new Error("Error while verifying password.")
    }
}

export {
    encryptPassword,
    verifyPassword
}