import React from "react";
import { Box, Typography, Button, CardActions, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { tokens } from "../config/themes";

export default function CardComponent({ title, subtitle, backgroundColor }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Card sx={{ minWidth: 275, backgroundColor: { backgroundColor } }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color={colors.white[500]}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h5" component="div" color={colors.white[900]}>
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
