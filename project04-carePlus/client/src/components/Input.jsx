import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type = "text",
      placeholder = "",
      rounded = true,
      bg = "", 
      autoComplete,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
        className={`w-full p-2 border border-gray-300 dark:border-gray-400 focus:outline-none pl-4  dark:bg-gray-900
          ${rounded ? "rounded-3xl" : "rounded-md"} 
          ${bg} 
          text-black dark:text-white 
          dark:placeholder-gray-400 
          dark:appearance-none`} 
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
