import { useState } from "react";
import { setMessage } from "../api/messageApi";
import { useParams } from "react-router-dom";

function useSetMessage() {
    const [text, setText] = useState("");
    const { username } = useParams();
    
  
    function handleChange(e) {
      setText(e.target.value);
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      await setMessage(username, text);
      console.log("Set message successfully.");
  
      setText("");
    }

  return {
    username,
    text,
    setText,
    handleChange,
    handleSubmit,
  }
}


export default useSetMessage;
