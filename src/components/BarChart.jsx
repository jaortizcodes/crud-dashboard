import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/material";

const BarChartComponent = ({ data }) => {
  return (
    <Box sx={{ height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={["users"]}
        indexBy="date"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "category10" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default BarChartComponent;
