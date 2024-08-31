function Input({ type = "text", placeholder = "", rounded = true, bg = "" }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 dark:border-gray-400  focus:outline-none pl-4 ${rounded ? "rounded-3xl" : "rounded-md"} ${bg} dark:bg-gray-900 dark:border-gray-400`}
      />
    );
  }
  
  export default Input;
  