import  { useEffect } from "react";
import Button from "./ButtonComponent";
import useGeminiApi from "../hooks/useGeminiApi";

function SuggestMessage({setText}) {
  const { getMessages, messages } = useGeminiApi();

  useEffect(() => {
    getMessages();  // Fetch messages when the component mounts
  }, []);

  function handleClick(e){
    setText(e.target.innerText);
  }

  return (
    <div className="mb-8">
      <Button onClick={getMessages} className="mb-6">Suggest Messages</Button>
      <p className="mb-2">Click on any message below to select it.</p>
      <div className="space-y-2 border-2 p-8 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Messages</h1>
        {messages.map((message, index) => (
          <button 
            onClick={handleClick}
            key={index}
            className="w-full shadow-sm shadow-white text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
          >
            {message}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestMessage;
