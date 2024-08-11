//models
import { createUser, isUserExist, findUserByUsername, findUserByEmail } from '../models/userModel.js'
import options from '../utils/httpOptionUtil.js';
import { generateToken } from '../utils/jwtUtil.js';
import { verifyPassword } from '../utils/passwordUtil.js';

async function signup(req, res){
    const {username, email, password} = req.body;

    try {
       const isExist =  await isUserExist(email, username);
       if(isExist){
        return res.status(400).json({success : false, message : "User is already exist with the username or email."})
       }

       //store user data in database
       const userId = await createUser(email, username, password);
       return res.status(201).json({success : true, data : {usreId : userId}});
       
    } catch (error) {
        return res.status(500).json({success : false, message : "Internal server error."});
    }
}

async function login(req, res){
    const {username, password} = req.body;

    try {
       const user = await findUserByUsername(username);
       if(!user){
        return res.status(401).json({success : false, message : "Authentication failed. User not found."});
       }

       const isMatch = await verifyPassword(password, user.password);
       if(!isMatch){
        return res.status(401).json({success : false, message : "Authentication failed. Wrong password."})
       }
      
       const token = generateToken(user);

       return res.status(200).cookie("token", token, options).json({success : true, data : {token : token}, message : "User login successfully."})

    } catch (error) {
        return res.status(500).json({success : false, message : "Internal server error."});
    }
}

async function logout(_, res){
    
    res.status(200).clearCookie("token",options).json({success : true, data : {}, message : "User logout successfully."});
}

async function getUser(req, res) {
    const user = req.user;
    res.status(200).json({success : true, data : {user}});
}

export {
    signup,
    login,
    logout,
    getUser
}