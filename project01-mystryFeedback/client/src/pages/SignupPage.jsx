import { Link } from "react-router-dom";
import SignupFormComponent from "../components/SignupFormComponent";

function SignupPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md border-2">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Join True Feedback
        </h2>
        <p className="text-lg mb-8 text-center">
          Sign up to start your anonymous adventure
        </p>
        <SignupFormComponent />
        <p className="mt-4 text-center text-gray-400">
          Already a member?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
