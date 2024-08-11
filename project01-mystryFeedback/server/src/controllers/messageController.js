import { getAllMessages, insertMessages } from "../models/messageModel.js";
import { findUserByUsername } from "../models/userModel.js";

async function setMessages(req, res){
    const {username, message} = req.body;
    try {
        const user = await findUserByUsername(username);
        if(!user){
            return res.status(401).json({success : false, message : "Sending failed. User not found."});
        }
    
        const insertId = await insertMessages(user.id, message);
        return res.status(201).json({success : true, data : {insertId}})
    } catch (error) {
        return res.status(500).json({success : false, message : "server not responded"});
    }
}

async function getMessages(req, res){
    const {username} = req.body;
    try {
        const user = await findUserByUsername(username);
        if(!user){
            return res.status(401).json({success : false, message : "Message fetching failed. User not found."});
        }
    
        const result = await getAllMessages(user.id);
        return res.status(201).json({success : true, data : {result}});
    } catch (error) {
        return res.status(500).json({success : false, message : "server not responded"});
    }
}

export {
    setMessages,
    getMessages
}