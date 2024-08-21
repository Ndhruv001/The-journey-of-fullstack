import Navbar from "@/components/navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/scenes/dashboard";
import Home from "./scenes/home";
import NotFound from "./scenes/error";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
