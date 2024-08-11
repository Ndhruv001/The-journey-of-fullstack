import axiosInstance from './axios';

async function setMessage(username, message){
    try {
        const insertId = await axiosInstance.post('message/set-messages', {username, message});
        return insertId;
    } catch (error) {
        if(error.response){
            console.log("Error Response ", error.response.data);
            throw new Error("Set Message Failed " + error.response.data.message);
        }else if(error.request){
            console.log("Error Request ", error.request);
            throw new Error("Set Message Failed  : No response from server.");
        }else{
            console.log("Error message ", error.message);
            throw new Error("Set Message Failed " + error.message);
        }
    }
}

async function getMessage(username){
    try {
        const result = await axiosInstance.post('message/get-messages', {username});
        console.log("result from getMessage : ", result.data.data.result);
        return result.data.data.result;
    } catch (error) {
        if(error.response){
            console.log("Error Response ", error.response.data);
            throw new Error("Get Message Failed " + error.response.data.message);
        }else if(error.request){
            console.log("Error Request ", error.request);
            throw new Error("Get Message Failed  : No response from server.");
        }else{
            console.log("Error message ", error.message);
            throw new Error("Get Message Failed " + error.message);
        }
    }
}

export {
    setMessage,
    getMessage
}
