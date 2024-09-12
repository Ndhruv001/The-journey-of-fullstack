import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Error from "@/components/Error";
import axiosInstance from '@/lib/config/axiosInstance';
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import { useState } from "react";

function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { mutate } = useMutation({
    mutationFn: (data) => axiosInstance.post('user/auth/login', data),
    onSuccess: () => {
      toast.success("Login successful");
    },
    onError: (error) => {
      console.log("🚀~ FRONTEND ~ LoginPage ~ error:", error);
      if (error.response?.status === 404) {
        toast.error("Email not found!");
      } else {
        toast.error("Something went wrong! Try again later.");
      }
    },

    onSettled: () => {
      setIsSubmitting(false)
    }
  });

  function onSubmit(data) {
    setIsSubmitting(true)
    mutate(data);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          CarePlus Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              bg="bg-gray-100"
              rounded={false}
              {...register("email", {
                required: "Email should not be empty"
              })}
            />
             <Error message={errors["email"]?.message} />
          </div>
          <div className="mb-6">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              autoComplete="password"
              bg="bg-gray-100"
              rounded={false}
              {...register("password", {
                required: "Password should not be empty"
              })}
            />
            <Error message={errors["password"]?.message} />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Login"}
          </Button>
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
