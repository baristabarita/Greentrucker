import { ResponsiveLine } from '@nivo/line';
import React from 'react';

const PaymentRevenueChart = ({ data }) => {
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
        legend: 'Weeks',
        legendOffset: 36,
        legendPosition: 'middle',
        format: '%b %d',
        tickValues: 'every 7 days', // Adjusted for weekly intervals
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Revenue',
        legendOffset: -50,
        legendPosition: 'middle',
        // Adjust the number of ticks based on the data's range
        tickValues: 5,
      }}
      colors={"#132A13"}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};

export default PaymentRevenueChart;
