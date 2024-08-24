
function SelectionDropdown({ selectedOption, setSelectedOption }) {

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mb-2">
      <select
        className="bg-gray-800 text-white p-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="units">Units</option>
        <option value="sales">Sales</option>
      </select>
    </div>
  );
}

export default SelectionDropdown;
