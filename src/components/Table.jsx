import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../config/themes";

export default function Table(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { rows, columns } = props;
  return (
    <Box>
      <Box
        m="40px 0 0 0"
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.pinkAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.lightPinkAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.lightPinkAccent[700],
          },
        }}
      >
        <DataGrid rows={rows} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
}
