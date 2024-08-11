import { useNavigate } from "react-router-dom";
import { logout } from "../api/authApi";

function useLogout() {
  const navigate = useNavigate();

  function handleLogout() {
    try {
      logout();
      console.log("Logout Successfully.");

      navigate("/");
    } catch (error) {
      console.log("Login Failed ", error);
    }
  }

  return {
    handleLogout,
  };
}

export default useLogout;
