
function Button({ children, className, onClick }) {

  return (
    <button
      onClick={onClick}
      className={`bg-white text-black font-bold px-6 py-2 rounded-md shadow-md transition-transform transform  hover:bg-gray-300 focus:outline-none   ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
