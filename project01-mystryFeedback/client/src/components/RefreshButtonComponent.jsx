import refreshLogo from "../../assets/refreshLogo.svg";
import useGetMessage from "../hooks/useGetMessage";

function RefreshButton({username}) {
  const { getMessages } = useGetMessage();

  async function handleReloading() {
    if (username) {
      await getMessages(username);
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
