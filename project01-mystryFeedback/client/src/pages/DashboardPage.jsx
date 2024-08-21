import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RefreshButton from "../components/RefreshButtonComponent";
import ToggleSwitch from "../components/ToggleSwitchComponent";
import Navbar from "../components/Navbar";
import useLogout from "../hooks/useLogout";
import useUserData from "../hooks/useUserData";
import useGetMessage from "../hooks/useGetMessage";
import { getUser } from "../api/authApi";
import MessageBox from "../components/MessageBoxComponent";
import config from "../config";

function DashboardPage() {
  const { handleSubmit } = useForm(); // Using react-hook-form
  const navigate = useNavigate();
  const { userData, updateUser } = useUserData();
  const { handleLogout } = useLogout();
  const linkRef = useRef();
  const { messages, getMessages, loading } = useGetMessage();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      navigate("/login");
      return;
    }

    async function loadData() {
      try {
        const user = await getUser(token);
        updateUser(user);
        await getMessages(user.username); // Fetch messages after user data is available
      } catch (error) {
        console.log("Error:", error);
        navigate("/login");
      }
    }

    loadData();
  }, []);

  const onSubmit = () => {
    navigator.clipboard.writeText(linkRef.current.value);
  };

  return (
    <>
      <Navbar
        onClick={handleLogout}
        buttonName="Logout"
        content={
          <h1 className="font-bold text-xl">Welcome {userData.username}</h1>
        }
      />
      <div className="min-h-screen h-full bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Copy Your Unique Link</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={`${config.baseUrl}/u/${userData.username}`}
                ref={linkRef}
                className="w-full px-4 py-2 text-white rounded-l-md bg-black border-2 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white font-semibold rounded-r-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                Copy
              </button>
            </div>
          </form>
        </div>

        <div className="mb-6 border-b-2 pb-3">
          <ToggleSwitch />
        </div>

        {/* Messages Display Section */}
        <div>
          <RefreshButton username={userData.username}/>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? (
              <h2 className="text-xl font-semibold mb-2">
                Loading messages...
              </h2>
            ) : messages && messages.length > 0 ? (
              messages.map((message, index) => (
                <MessageBox
                  key={index}
                  message={message.messages}
                  createdAt={message.createdAt}
                />
              ))
            ) : (
              <h2 className="text-xl font-semibold mb-2">
                No messages to display.
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
