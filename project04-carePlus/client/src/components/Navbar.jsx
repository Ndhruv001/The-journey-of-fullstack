import { BellIcon } from "@heroicons/react/24/outline";
import CompanyLogo from "./CompanyLogo";
import ProfileMenu from "./ProfileMenu";
import ThemeMenu from "./ThemeMenu";

function Navbar() {
  return (
    <div className="flex justify-between">
      <CompanyLogo />
      <div className="w-28 flex justify-between">
        <ThemeMenu />
        <BellIcon width={25} />
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Navbar;
