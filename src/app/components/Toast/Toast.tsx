import React, { useEffect, useState } from "react";

type ToastProps = {
  type?: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
};

export const Toast: React.FC<ToastProps> = ({
  type = "info",
  message,
  duration = 2000,
  closable = true,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300);
  };

  if (!visible) return null;

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  }[type];

  return (
    <div
      className={`fixed bottom-4 right-4 min-w-[200px] p-4 rounded shadow-md text-white flex items-center justify-between
        transform transition-all duration-300
        ${bgColor}
        ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
      `}
    >
      <span>{message}</span>
      {closable && (
        <button
          onClick={handleClose}
          className="ml-4 bg-transparent border-none text-white hover:opacity-70 cursor-pointer"
        >
          ✘
        </button>
      )}
    </div>
  );
};
