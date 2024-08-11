import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authApi";
import useUserData from "./useUserData";
import { getUser } from "../api/authApi";

function useSignin() {
  const {updateUser} = useUserData();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
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
      const token = await login(formData);
      localStorage.setItem("token", JSON.stringify(token));
      console.log("Login Successfully.");

      const user = await getUser(token);
      updateUser(user);

      navigate("/dashboard");
    } catch (error) {
      console.log("Login Failed ", error);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

export default useSignin;
