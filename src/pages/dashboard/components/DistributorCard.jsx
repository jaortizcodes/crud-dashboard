import React from "react";
import CardComponent from "../../../components/Card";
import { tokens } from "../../../config/themes";
import { useTheme } from "@mui/material";

export default function DistributorCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <CardComponent
      title="Distributors"
      subtitle="Total number of distributors"
      backgroundColor={colors.lightPinkAccent[400]}
    />
  );
}
