import React from "react";
import { Button } from "@mui/material";

export default function ButtonComponent({
  action,
  label,
  color,
  variant,
  disabled,
}) {
  return (
    <Button
      type="button"
      onClick={action}
      color={color}
      variant={variant}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
