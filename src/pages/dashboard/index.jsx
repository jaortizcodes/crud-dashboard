import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import BarChartComponent from "../../components/BarChart";
import Header from "../../components/Header";
import CardComponent from "../../components/Card";
import DistributorCard from "./components/DistributorCard";
import UserCard from "./components/UserCard";
export default function Dashboard() {
  // Sample data - replace with your actual data
  const [dailyRegistrationData, setDailyRegistrationData] = useState([
    { date: "2022-01-01", users: 10 },
    { date: "2022-01-02", users: 15 },
    { date: "2022-01-03", users: 10 },
    { date: "2022-01-04", users: 15 },
    // Add more data entries as needed
  ]);

  useEffect(() => {
    // Fetch your daily registration data from the server or another source
    // and update the state using setDailyRegistrationData.
    // For demo purposes, we're using static data here.
    console.log("Fetched data:", dailyRegistrationData);
  }, [dailyRegistrationData]);
  return (
    <Box m="20px 20px 0 20px">
      <Header title="Dashboard" description="Summary of your dashboard" />
      <Box display="flex">
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
      <BarChartComponent data={dailyRegistrationData} />
    </Box>
  );
}
