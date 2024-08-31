import { NavLink } from "react-router-dom";
import Input from '@/components/Input';
import Label from '@/components/Label';
import Button from '@/components/Button';


function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          CarePlus Login
        </h2>
        <form>
          <div className="mb-4">
            <Label>Email</Label>
            <Input placeholder="Enter your email" bg="bg-gray-100" rounded={false} />
          </div>
          <div className="mb-6">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" bg="bg-gray-100" rounded={false} />
          </div>
          <Button>Login</Button>
        </form>
        <div className="text-center mt-4"> 
          <p className="text-gray-600">
            New to CarePlus?{" "}
            <NavLink to="/" className="text-blue-700 hover:underline">
              Register here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
