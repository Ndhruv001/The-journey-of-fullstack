import { Link } from "react-router-dom";
import SigninFormComponent from "../components/SigninFormComponent";
function SigninPage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg border-2">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome Back to True Feedback</h1>
        <p className="text-lg mb-6 text-center">Sign in to continue your secret conversations</p>
        <SigninFormComponent/>
        <p className="mt-4 text-center text-gray-400">
          Not a member yet?{' '}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SigninPage;
