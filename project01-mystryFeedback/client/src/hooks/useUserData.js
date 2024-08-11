import { useContext } from "react";
import {UserContext} from "../contextApi/context";

function useUserData(){
    return  useContext(UserContext);
}

export default useUserData;