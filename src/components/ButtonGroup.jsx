import React from "react";
import { ButtonGroup } from "@mui/material";

export default function ButtonGroupComponent({ component }) {
  return <ButtonGroup disableElevation>{component}</ButtonGroup>;
}
