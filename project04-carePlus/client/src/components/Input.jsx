import { forwardRef } from "react";

const Input = forwardRef(({ type = "text", placeholder = "", rounded = true, bg = "", autoComplete, ...props }, ref) => {
  return (
    <input
      ref={ref}  
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...props}  
      className={`w-full p-2 border border-gray-300 dark:border-gray-400 focus:outline-none pl-4 ${rounded ? "rounded-3xl" : "rounded-md"} ${bg} dark:bg-gray-900 dark:border-gray-400`}
    />
  );
});

Input.displayName = 'Input';

export default Input;
