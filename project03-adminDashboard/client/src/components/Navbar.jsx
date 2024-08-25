import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

function Navbar({ onToggleSidebar }) {
  return (
    <nav
      className={`relative w-full flex items-center justify-between top-0 left-0 bg-gray-800 text-gray-100 p-4 shadow-md`}
    >
      <div className="flex gap-1 ">
        <ToggleButton toggleSidebar={onToggleSidebar} />
        <SearchBar />
      </div>
      <div className="flex gap-1">
        <UserProfile />
      </div>
    </nav>
  );
}

export default Navbar;
