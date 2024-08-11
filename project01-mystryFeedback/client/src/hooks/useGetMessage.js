import { useState } from 'react';
import { getMessage } from '../api/messageApi';

function useGetMessage() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state

    async function getMessages(username) {
        setLoading(true);  // Set loading to true before fetching
        console.log("Fetching messages for username:", username);  // Debugging line
        try {
            const response = await getMessage(username);
            console.log("Messages fetched:", response);  // Debugging line
            setMessages(response);  // Set messages
        } catch (error) {
            console.error("Failed to get messages:", error);
        } finally {
            setLoading(false);  // Set loading to false after fetching
        }
    }

    return { messages, getMessages, loading };  // Return loading state
}

export default useGetMessage;
