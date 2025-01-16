import { Route, Routes } from "react-router-dom";

// Import pages or components
import LandingPage from "./scenes/landing-page/LandingPage";
import Signup from "./scenes/signup/Signup";
import Login from "./scenes/login/Login";
import ChatPage from "./scenes/chat-page/ChatPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/u" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
