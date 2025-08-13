import { Meta, StoryObj } from "@storybook/nextjs-vite";
import React, { useState } from "react";
import { SidebarMenu, MenuItem } from "./SidebarMenu";

const menuData1: MenuItem[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Contact" },
];

const menuData2: MenuItem[] = [
  { label: "Home" },
  {
    label: "Items",
    children: [
      { label: "Item 1" },
      {
        label: "Item 2",
        children: [{ label: "Subitem 1" }, { label: "Subitem 2" }],
      },
    ],
  },
  { label: "About" },
];

export default {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    isOpen: { control: "boolean" },
    items: { control: "object" },
  },
} as Meta<typeof SidebarMenu>;

// one level
export const OneLevelMenu: StoryObj<typeof SidebarMenu> = {
  render: (args) => {
    const [open, setOpen] = useState(args.isOpen ?? true);
    return (
      <SidebarMenu {...args} isOpen={open} onClose={() => setOpen(false)} />
    );
  },
};
OneLevelMenu.args = {
  items: menuData1,
  isOpen: true,
};

// two levels
export const TwoLevelMenu: StoryObj<typeof SidebarMenu> = {
  args: {
    isOpen: false
  },

  render: (args) => {
    const [open, setOpen] = useState(args.isOpen ?? true);
    return (
      <SidebarMenu {...args} isOpen={open} onClose={() => setOpen(false)} />
    );
  }
};
TwoLevelMenu.args = {
  items: menuData2,
  isOpen: true,
};
