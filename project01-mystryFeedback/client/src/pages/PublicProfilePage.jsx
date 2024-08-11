import Button from "../components/ButtonComponent";
import SuggestMessage from "../components/SuggestMessageComponent";
import { useNavigate } from "react-router-dom";
import useSetMessage from "../hooks/useSetMessage";


function PublicProfile() {
  const navigate = useNavigate();
  const {username, text, handleChange, handleSubmit, setText} = useSetMessage();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-14">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Public Profile Link
      </h1>

      <p>
        Send Anonymous Message to{" "}
        <span className="text-gray-400">@{username}</span>
      </p>

      <form onSubmit={handleSubmit} className="mb-8 mt-2">
        <textarea
          value={text}
          onChange={handleChange}
          className="w-full max-h-24 min-h-24 p-3 h-24 rounded-md bg-gray-800 text-white  border-2 focus:outline-none"
          placeholder="Write your anonymous message here..."
        ></textarea>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={text.trim() === ""}
            className="mt-4 px-4 py-2 disabled:bg-gray-500 bg-black border-2 text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Send It
          </button>
        </div>
      </form>

      <SuggestMessage setText={setText} />

      <div className="mt-8 text-center border-t-2 ">
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-4">Get Your Message Board</h2>
          <Button onClick={() => navigate("/signup")}>
            Create Your Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
