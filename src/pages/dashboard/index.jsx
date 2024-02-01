import React, { useEffect, useState } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import BarChartComponent from "../../components/BarChart";
import Header from "../../components/Header";
import CardComponent from "../../components/Card";
import DistributorCard from "./components/DistributorCard";
import UserCard from "./components/UserCard";
import { tokens } from "../../config/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dailyRegistrationData, setDailyRegistrationData] = useState([
    { date: "2022-01-01", users: 10 },
    { date: "2022-01-02", users: 15 },
    { date: "2022-01-03", users: 10 },
    { date: "2022-01-04", users: 15 },
  ]);

  useEffect(() => {
    console.log("Fetched data:", dailyRegistrationData);
  }, [dailyRegistrationData]);
  return (
    <QueryClientProvider client={queryClient}>
      <Box m="20px 20px 0 20px">
        <Header title="Dashboard" description="Summary of your dashboard" />
        <Box display="flex" mb="20px">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <DistributorCard />
            </Grid>
            <Grid item xs={4}>
              <UserCard />
            </Grid>
            <Grid item xs={4}>
              <UserCard />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardComponent
                title="Daily Registration"
                subtitle={<BarChartComponent data={dailyRegistrationData} />}
                backgroundColor={colors.lightPinkAccent[400]}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </QueryClientProvider>
  );
}
