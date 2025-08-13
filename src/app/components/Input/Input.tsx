import React, { useState } from "react";

type InputProps = {
  type?: "text" | "password";
  clearable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable = false,
  value = "",
  onChange,
  placeholder = "",
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.("");
  };

  return (
    <div className="flex items-center p-1 space-x-1 w-fit ">
      <input
        type={type === "password" && showPassword ? "text" : type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="px-2 w-64 outline-1 text-gray-700 "
      />

      {type === "password" && (
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="px-2 hover:cursor-pointer hover:text-gray-700 outline-1"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}

      {clearable && inputValue && (
        <button
          onClick={handleClear}
          className="px-2 outline-1 hover:cursor-pointer text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      )}
    </div>
  );
};
