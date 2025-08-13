import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "./Toast";

export default {
  title: "Feedback/Toast",
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["success", "error", "info", "warning"],
      },
    },
    message: { control: "text" },
    duration: { control: "number" },
    closable: { control: "boolean" },
    onClose: { action: "closed" },
  },
} as Meta<typeof Toast>;

// on success
export const SuccessToast: StoryObj<typeof Toast> = {
  args: {
    type: "success",
    message: "Success toast!",
    duration: 2500,
    closable: true,
  },
};

// on error
export const ErrorToast: StoryObj<typeof Toast> = {
  args: {
    type: "error",
    message: "Error toast((",
    duration: 3000,
    closable: false,
  },
};

// on info
export const InfoToast: StoryObj<typeof Toast> = {
  args: {
    type: "info",
    message: "Important info",
    duration: 5000,
    closable: true,
  },
};

// on warning
export const WarningToast: StoryObj<typeof Toast> = {
  args: {
    type: "warning",
    message: "Warning!!!",
    duration: 2000,
    closable: false,
  },
};
