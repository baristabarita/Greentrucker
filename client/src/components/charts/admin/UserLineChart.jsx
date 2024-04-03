import { ResponsiveLine } from '@nivo/line';
import React from 'react';

const UserLineChart = ({ data }) => {
const primaryColor = '#A7C957';
const adminColor = '#A7C957';

  if (!data || !data.length) {
    return <div className="text-center p-4">No data available</div>;
  }

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 70 }}
      xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
      xFormat="time:%Y-%m-%d"
      yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Month',
        legendOffset: 36,
        legendPosition: 'middle',
        format: '%b %Y', // Displaying month and year for clarity
        tickValues: 'every 1 month', // Adjust this to 'every month' if the format doesn't work
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Registrations',
        legendOffset: -40,
        legendPosition: 'middle',
        // Adjust the number of ticks based on the data's range
        tickValues: 5,
      }}
      colors={primaryColor}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={1}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: primaryColor,
            },
          },
          legend: {
            text: {
              fill: primaryColor,
            },
          },
        },
      }}
    />
  );
};

export default UserLineChart;
