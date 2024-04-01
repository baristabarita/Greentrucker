import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LineChart from "../../../components/charts/trucker/LineChart";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillCalendar2EventFill } from "react-icons/bs"
import { MdPayments, MdPendingActions } from "react-icons/md"
import { FaCalendarCheck } from "react-icons/fa"

const Dashboard = () => {
    
    // Sample data, ideally fetched from an API
  const sampleData = [
    {
      id: "Sample Data",
      data: [
        { x: "2023-01-01", y: 7 },
        { x: "2023-01-02", y: 5 },
        { x: "2023-01-03", y: 11 },
        { x: "2023-01-04", y: 6 },
        { x: "2023-01-05", y: 7 },
        { x: "2023-01-06", y: 8 },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
      <div className="container mt-5 bg-white rounded-md border shadow-lg">
        <div className="flex items-center justify-between py-2 px-4 border-b">
          <h2 className="text-lg font-bold">Bookings This Month</h2>
        </div>
        <div className="h-[50vh] mx-10 pb-5">
          <LineChart data={sampleData} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;