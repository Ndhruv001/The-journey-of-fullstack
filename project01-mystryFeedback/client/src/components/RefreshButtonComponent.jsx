import refreshLogo from "../../assets/refreshLogo.svg";
import useGetMessage from "../hooks/useGetMessage";
import useUserData from "../hooks/useUserData";

function RefreshButton() {
  const { getMessages } = useGetMessage();
  const { userData } = useUserData();

  async function handleReloading() {
    if (userData.username) {
      await getMessages(userData.username);
    }
  }

  return (
    <button
      onClick={handleReloading}
      className="p-2 bg-white rounded-md hover:bg-gray-500  transition duration-300 px-4 mb-2"
      aria-label="Refresh"
    >
      <img src={refreshLogo} alt="refresh" width={20} />
    </button>
  );
}

export default RefreshButton;
