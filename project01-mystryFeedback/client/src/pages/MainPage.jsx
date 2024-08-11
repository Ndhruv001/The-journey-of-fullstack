import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white h-screen min-h-screen flex flex-col">
      <Navbar onClick={()=>navigate('login')} buttonName="Login"/>
      <main className="bg-black text-white flex flex-col items-center justify-center h-screen space-y-4 p-5">
        <h2 className="text-5xl font-bold text-center">
          Dive into the World of Anonymous Feedback
        </h2>
        <p className="text-xl text-center ">
          True Feedback - Where your identity remains a secret.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
