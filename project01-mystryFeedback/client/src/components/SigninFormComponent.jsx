import Button from "./ButtonComponent";
import useSignin from "../hooks/useSignin";

function SigninFormComponent() {
  const { formData, handleChange, handleSubmit } = useSignin();

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="anonymus001"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="•••••••••"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <Button onClick={handleSubmit} className="w-full">
        Sign In
      </Button>
    </form>
  );
}

export default SigninFormComponent;
