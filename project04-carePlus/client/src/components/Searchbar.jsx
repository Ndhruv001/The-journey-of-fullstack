function Searchbar() {
  return (
    <div className="flex justify-end mb-4 ">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 px-3 border border-gray-300 dark:border-gray-400 dark:bg-gray-900 dark:text-white rounded-3xl outline-none focus:outline-none"
      />
    </div>
  );
}

export default Searchbar;
