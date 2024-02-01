import React from "react";
import CardComponent from "../../../components/Card";
import { tokens } from "../../../config/themes";
import { useTheme } from "@mui/material";
import useGetDistributorsCount from "../hooks/useGetDistributorsCount";

export default function DistributorCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data } = useGetDistributorsCount();
  return (
    <CardComponent
      title="Distributors"
      subtitle={data}
      backgroundColor={colors.lightPinkAccent[400]}
    />
  );
}
