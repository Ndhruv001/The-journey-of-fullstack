import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchBar() {
  return (
    <div className="flex ml-2 rounded-md relative bg-gray-400 text-black px-4">
      <input
        type="text"
        className="bg-gray-400 w-48 focus:outline-none text-black"
      />
      <MagnifyingGlassIcon width={20} />
    </div>
  );
};

export default SearchBar;
