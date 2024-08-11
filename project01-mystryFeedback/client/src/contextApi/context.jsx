import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({children}){
    const [userData, setUserData] = useState({
        id : "",
        username : "",
        email : ""
    });

    function updateUser(user){
        setUserData({
            id : user.id,
            username : user.username,
            email : user.email
        })
    }

    return <UserContext.Provider value={{userData, updateUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;