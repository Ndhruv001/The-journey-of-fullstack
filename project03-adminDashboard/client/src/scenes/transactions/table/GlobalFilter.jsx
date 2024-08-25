import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function GlobalFilter({ filter, setFilter }) {
  return (
    <div className="flex h-10 w-60 mb-2 rounded-md border-b-2 border-white text-white px-4">
      <input
        type="text"
        placeholder="search here.."
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className=" bg-transparent w-48 focus:outline-none text-white"
      />
      <MagnifyingGlassIcon width={20} />
    </div>
  );
}

export default GlobalFilter;
