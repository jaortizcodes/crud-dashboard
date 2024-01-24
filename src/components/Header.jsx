import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../config/themes";

export default function Header({ title, description }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m=" 0 0 50px 0">
      <Typography
        variant="h1"
        color={colors.white[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.pinkAccent[500]}>
        {description}
      </Typography>
    </Box>
  );
}
