import React from "react";
import { Button } from "@mui/material";

export default function ButtonComponent({ action, label }) {
  return (
    <Button
      type="button"
      onClick={action}
      color="secondary"
      variant="contained"
    >
      {label}
    </Button>
  );
}
