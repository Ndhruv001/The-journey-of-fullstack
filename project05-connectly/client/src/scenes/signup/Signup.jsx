import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../lib/config/axiosInstance";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (data) => axiosInstance.post("/auth/signup", data),
    onSuccess: () => {
      console.log("🚀 ~ Signup ~ success:");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: (error) => {
      console.log("🚀 ~ Signup ~ error:", error);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    mutate(data);
  }

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        {/* Form Header */}
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create Your Account
        </h1>

        {/* Signup Form */}
        <form onSubmit={onSubmit} className="space-y-3">
          {/* Name Input */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, [e.target.id]: e.target.value };
                })
              }
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

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
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, [e.target.id]: e.target.value };
                })
              }
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              value={data.role}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, [e.target.id]: e.target.value };
                })
              }
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="">Select Role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Institute">Institute</option>
            </select>
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
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, [e.target.id]: e.target.value };
                })
              }
              placeholder="Your password"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-600 transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
