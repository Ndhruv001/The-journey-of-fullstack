import Button from "./ButtonComponent";
import useSignup from "../hooks/useSignup";

function SignupFormComponent() {
  const { formData, handleChange, handleSubmit } = useSignup();

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="w-full p-2 rounded bg-gray-700 text-white"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-2 rounded bg-gray-700 text-white"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="text-gray-400 text-sm mt-1">
          We will send you a verification code
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-300 mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full p-2 rounded bg-gray-700 text-white"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <Button onClick={handleSubmit} className="w-full text-black">Sign Up</Button>
    </form>
  );
}

export default SignupFormComponent;
