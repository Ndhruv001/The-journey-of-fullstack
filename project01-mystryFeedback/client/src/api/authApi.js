import axiosInstance from './axios';


async function signup(formData){
    try {
        const response = await axiosInstance.post('users/sign-up', formData);
        return response.data;
    } catch (error) {
        if(error.response){
            console.log("Error Response ", error.response.data);
            throw new Error("Signup Failed " + error.response.data.message);
        }else if(error.request){
            console.log("Error Request ", error.request);
            throw new Error("Signup Failed  : No response from server.");
        }else{
            console.log("Error message ", error.message);
            throw new Error("Signup Failed " + error.message);
        }
    }
}

async function login(formData) {
    try {
        const response = await axiosInstance.post('users/sign-in', formData);
        return response.data.data.token;
    } catch (error) {
        if(error.response){
            console.log("Error Response :", error.response.data);
            throw new Error("Sign in Failed " + error.response.data.message);
        }else if(error.request){
            console.log("Error Request ", error.request);
            throw new Error("Sign in Failed  : Server not responded");
        }else{
            console.log("Error message ", error.message);
            throw new Error("Sign in Failed " + error.message);
        }
    }
    
}

async function logout(){
    try {
        localStorage.removeItem("token");
    } catch (error) {
        if(error.response){
            console.log("Error Response :", error.response.data);
            throw new Error("Logout Failed " + error.response.data.message);
        }else if(error.request){
            console.log("Error Request ", error.request);
            throw new Error("Logout Failed  : Server not responded");
        }else{
            console.log("Error message ", error.message);
            throw new Error("Logout Failed " + error.message);
        }
    }
}

async function getUser(token) {
    try {
        const response = await axiosInstance.get("users/get-user", {
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        });
        return response.data.data.user;
    } catch (error) {
        if(error.response){
            console.log("Error Response :", error.response.data);
            throw new Error("Logout Failed " + error.response.data.message);
        }else if(error.request){
            console.log("Error Request ", error.request);
            throw new Error("Logout Failed  : Server not responded");
        }else{
            console.log("Error message ", error.message);
            throw new Error("Logout Failed " + error.message);
        }
    }
}


export {
    signup,
    login,
    logout,
    getUser
}