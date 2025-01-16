import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../lib/config/axiosInstance";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null); // State to store current user
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch current user information
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axiosInstance.get("/auth/me"); // Replace with your API endpoint
        setCurrentUser(response.data.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: () => axiosInstance.post("/auth/logout"),
    onSuccess: () => {
      console.log("Logout successful");
      setTimeout(() => navigate("/"), 2000);
    },
    onError: (error) => console.error("Logout error:", error),
  });

  // Send Message Mutation
  const sendMessageMutation = useMutation({
    mutationFn: (data) => axiosInstance.post(`/messages/send`, data),
    onSuccess: () => {
      console.log("Message sent successfully");
      queryClient.invalidateQueries(["messages", selectedChat?.id]); // Refetch messages for the selected chat
      setNewMessage(""); // Clear input field after sending
    },
    onError: (error) => console.error("Send message error:", error),
  });

  // Fetch contacts list
  const { data: contactsList } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await axiosInstance.get("/contacts/list");
      return response.data.data;
    },
  });

  // Fetch messages based on the selected chat
  const { data: messages } = useQuery({
    queryKey: ["messages", selectedChat?.id],
    queryFn: async () => {
      if (!selectedChat?.id) return [];
      const response = await axiosInstance.get(`/messages/${selectedChat.id}`);

      console.log("🚀 ~ queryFn: ~ response:", response.data.data);
      return response.data.data;
    },
  });

  // Handle logout
  const handleLogout = () => logoutMutation.mutate();

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedChat) return;

    sendMessageMutation.mutate({
      receiver_id: selectedChat.id,
      message: newMessage.trim(),
    });
  };

  return (
    <div className="w-screen h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b">
          <h1 className="text-lg font-semibold">My Chats</h1>
          <button
            onClick={() => setShowProfile(true)}
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
          >
            <i className="fas fa-bars text-gray-600"></i>
          </button>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto">
          {contactsList?.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 flex items-center cursor-pointer ${
                selectedChat?.id === chat.id
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium">
                {chat.name[0]}
              </div>
              <div className="ml-4">
                <p className="font-semibold">{chat.name}</p>
                <p className="text-sm text-gray-500">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 flex flex-col">
        {/* Chat Header */}
        {selectedChat ? (
          <div className="p-4 bg-blue-600 text-white flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-medium">
              {selectedChat.name[0]}
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
              <p className="text-sm">
                {selectedChat.is_online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-blue-600 text-white">
            <h2 className="text-lg font-semibold">Select a chat</h2>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          {messages?.length ? (
            messages.map((message) => {
              const isCurrentUser = message.sender_id === currentUser?.id;
              return (
                <div
                  key={message.id}
                  className={`mb-2 rounded-lg p-2 max-w-lg ${
                    isCurrentUser
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-300 text-black mr-auto"
                  }`}
                  style={{
                    wordBreak: "break-word", // Handles long words gracefully
                    alignSelf: isCurrentUser ? "flex-end" : "flex-start",
                  }}
                >
                  <p className="text-sm">{message.message}</p>
                  <span
                    className={`text-xs block mt-1 ${
                      isCurrentUser ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {moment(message.created_at).format("hh:mm A")}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No messages yet.</p>
          )}
        </div>

        {/* Input Section */}
        {selectedChat && (
          <div className="p-4 bg-white border-t flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Send
            </button>
          </div>
        )}
      </div>
      {/* Profile Popup */}
      {showProfile && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center relative">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">{currentUser?.name}</h3>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={currentUser?.email}
                readOnly
              />
            </div>

            <p className="text-red-500 text-sm mt-4">
              *This is for test purposes only
            </p>

            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all"
              >
                Logout
              </button>
              <button
                onClick={() => setShowProfile(false)}
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatPage;
