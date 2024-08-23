import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

function ToggleButton({ toggleSidebar }) {
  return (
    <button className="p-2 focus:outline-none" onClick={toggleSidebar}>
      <span><Bars3BottomLeftIcon width={30} /></span>
    </button>
  );
};

export default ToggleButton;
