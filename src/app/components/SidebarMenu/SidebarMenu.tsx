import React, { useState } from "react";

export type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/30 z-50" />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 overflow-y-auto
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {items.map((item, index) => (
          <MenuItemComponent key={index} item={item} />
        ))}
      </div>
    </>
  );
};

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-2">
      <div
        onClick={() => item.children && setOpen(!open)}
        className={`flex justify-between items-center
          ${
            item.children
              ? "font-bold cursor-pointer select-none"
              : "font-normal"
          }
        `}
      >
        <span>{item.label}</span>
        {item.children && <span>{open ? "▾" : "▸"}</span>}
      </div>

      {item.children && open && (
        <div className="pl-4 mt-1">
          {item.children.map((child, index) => (
            <MenuItemComponent key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
