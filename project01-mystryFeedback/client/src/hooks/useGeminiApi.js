import { useState } from "react";
import run from "../api/geminiApi";

function useGeminiApi() {
  const [messages, setMessages] = useState([]);

  // Function to fetch and set messages
  async function getMessages() {
    try {
      const response = await run();  // Call the API
      const mess = response.split(/\d./).filter(index => index != 0); // Split the response based on numbers
      setMessages(mess);  // Update the state with the split messages
    } catch (error) {
      console.error("Failed to fetch messages:", error);  // Handle any errors
    }
  }

  // Return both the function to fetch messages and the messages state
  return { getMessages, messages };
}

export default useGeminiApi;
