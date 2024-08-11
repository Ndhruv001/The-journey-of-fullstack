import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/authApi";

function useSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(formData);
      console.log("Signup successfull.");

      navigate("/login");
    } catch (error) {
      console.log("Signup Failed ", error);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

export default useSignup;
