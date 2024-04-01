import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LineChart from "../../../components/charts/trucker/LineChart";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillCalendar2EventFill } from "react-icons/bs"
import { MdPayments, MdPendingActions } from "react-icons/md"
import { FaCalendarCheck } from "react-icons/fa"

const Dashboard = () => {

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
        <div className="animate-fade-in p-5">
            {/* Page title and verification status */}
            <div className="flex text-[1.8em] font-bold items-center justify-between">
                <p className="flex">
                    <BiSolidDashboard className="mr-2" /> Dashboard
                </p>
                <div className="flex flex-col items-end">
                    <div className="flex">
                        <p className="text-darkblue font-bold mr-2 text-[0.7em]">Verification Status:</p>
                        <span className="text-white bg-primarycolor px-2 rounded-md text-[0.7em]">Verified</span>
                        {/*
                        isVerified ? (
                            <span className="text-green-500 text-[0.7em]">Verified</span>
                        ) : (
                            <span className="text-red-500 text-[0.7em]">Not Verified</span>
                        ) */
                        }
                    </div>
                    <p className="flex font-medium mt-1 text-[0.7em]">Verify your account <span className="ml-2" style={{ cursor: "pointer", color: "#21a1da" }} onClick={() => navigate("/trucker/trkrsettings")}> here</span>.</p>
                </div>
            </div>
            {/* Top Boxes */}
            <section className="h-[30vh] flex overflow-x-auto rounded-lg">
                <div className="flex flex-row gap-4 items-center justify-between w-full mx-auto mt-2">
                    {/* Box 1 - TOTAL BOOKINGS */}
                    <div className="bg-[#E8EDDF] h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-[#555555] font-bold text-left xl:text-[0.8em]">
                                TOTAL BOOKINGS
                            </p>
                            <p className="text-userclient text-[3em] font-bold xl:text-[2em]">
                                #
                            </p>
                        </div>
                        <BsFillCalendar2EventFill className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>

                    {/* Box 2 - PENDING PAYMENTS */}
                    <div className="bg-[#E8EDDF] h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-[#555555] font-bold text-left xl:text-[0.8em]">
                                PENDING PAYMENTS
                            </p>
                            <p className="text-userclient text-[3em] font-bold xl:text-[2em]">
                                #
                            </p>
                        </div>
                        <MdPayments className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>

                    {/* Box 3 - BOOKINGS ONGOING */}
                    <div className="bg-[#E8EDDF] h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-[#555555] font-bold text-left xl:text-[0.8em]">
                                BOOKINGS ONGOING
                            </p>
                            <p className="text-userclient text-[3em] font-bold xl:text-[2em]">
                                #
                            </p>
                        </div>
                        <MdPendingActions className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>

                    {/* Box 4 - BOOKINGS COMPLETED */}
                    <div className="bg-[#E8EDDF] h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-[#555555] font-bold text-left xl:text-[0.8em]">
                                BOOKINGS COMPLETED
                            </p>
                            <p className="text-userclient text-[3em] font-bold xl:text-[2em]">
                                #
                            </p>
                        </div>
                        <FaCalendarCheck className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>
                </div>
            </section>


            {/* Graph Section */}
            <section className="container mt-5 bg-[white] rounded-md border shadow-lg drop-shadow-lg ">
                <div className="flex items-center justify-between py-2 px-4 border-b-2 border-gray-300">
                    <h2 className="text-[1.5em] font-bold">Bookings This Month</h2>
                </div>
                <div className="h-[50vh] mx-10 pb-5">
                    <LineChart data={sampleData} />
                </div>
            </section>

        </div>
    )
}

export default Dashboard;