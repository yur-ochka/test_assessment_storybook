import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "radio", options: ["text", "password"] },
    },
    clearable: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
} as Meta<typeof Input>;

// plain text
export const TextInput: StoryObj<typeof Input> = {
  args: {
    type: "text",
    clearable: false,
    placeholder: "Enter text",
  },
};

// password
export const PasswordInput: StoryObj<typeof Input> = {
  args: {
    type: "password",
    clearable: false,
    placeholder: "Enter password",
  },
};

// clearance button
export const ClearableInput: StoryObj<typeof Input> = {
  args: {
    type: "text",
    clearable: true,
    placeholder: "Enter text",
  },
};

// clearable password
export const ClearablePassword: StoryObj<typeof Input> = {
  args: {
    type: "password",
    clearable: true,
    placeholder: "Enter password",
  },
};
