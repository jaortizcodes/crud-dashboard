import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ToastComponent({ response, message }) {
  if (response === "success") {
    toast.success(message);
  } else if (response === "error") {
    toast.error(message);
  }

  return <ToastContainer position="top-right" />;
}
