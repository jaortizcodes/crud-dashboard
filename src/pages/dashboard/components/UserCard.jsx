import React from "react";
import CardComponent from "../../../components/Card";
import { tokens } from "../../../config/themes";
import { useTheme } from "@mui/material";

export default function UserCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <CardComponent
      title="Users"
      subtitle="0"
      backgroundColor={colors.lightPinkAccent[400]}
    />
  );
}
