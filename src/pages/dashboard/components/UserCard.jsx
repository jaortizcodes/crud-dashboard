import React from "react";
import CardComponent from "../../../components/Card";
import { tokens } from "../../../config/themes";
import { useTheme } from "@mui/material";
import useGetUsersCount from "../hooks/useGetUsersCount";

export default function UserCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data } = useGetUsersCount();
  return (
    <CardComponent
      title="Users"
      subtitle={data}
      backgroundColor={colors.lightPinkAccent[400]}
    />
  );
}
