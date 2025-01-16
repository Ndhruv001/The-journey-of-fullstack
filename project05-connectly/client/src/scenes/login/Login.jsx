import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../lib/config/axiosInstance";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (data) => axiosInstance.post("/auth/login", data),
    onSuccess: () => {
      console.log("🚀 ~ Login ~ success:");

      setTimeout(() => {
        navigate("/u");
      }, 2000);
    },
    onError: (error) => {
      console.log("🚀 ~ Login ~ error:", error);
    },
  });

  function onChange(e) {
    setData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    mutate(data);
  }

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        {/* Form Header */}
        <h1 className="text-2xl font-semibold text-center mb-4">
          Welcome Back
        </h1>

        {/* Login Form */}
        <form onSubmit={onSubmit} className="space-y-3">
          {/* Email Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={onChange}
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={onChange}
              placeholder="Your password"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Don&apos;t have an account?{" "}
          <NavLink
            to="/sign-up"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
