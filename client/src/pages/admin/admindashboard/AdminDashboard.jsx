import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLineChart from "@/components/charts/admin/UserLineChart";
import UserPieChart from "@/components/charts/admin/UserPieChart";
import { BiSolidDashboard, BiSolidCheckSquare } from "react-icons/bi";
import { FaUserTie, FaUserFriends, FaTruck } from "react-icons/fa"
import { LuUserX } from "react-icons/lu";

const AdminDashboard = () => {
    const [pendingVerifications, setPendingVerifications] = useState([
        {id: 'UID001', contact_name: 'John Doe', company_name: 'Doe Trucking', email_address: 'doe@gmail.com', sent_date: '2024-04-04'},
        {id: 'UID002', contact_name: 'Kyle Garrick', company_name: 'KG Trucking', email_address: 'garrick@gmail.com', sent_date: '2024-04-02'},
        {id: 'UID003', contact_name: 'Simon Riley', company_name: 'SR Trucking', email_address: 'simon@gmail.com', sent_date: '2024-03-31'},
    ]);
    const monthlyRegistrations = [
        {
            id: "Registrations",
            data: [
                { x: "2023-01-01", y: 40 },
                { x: "2023-02-01", y: 55 },
                { x: "2023-03-01", y: 50 },
                { x: "2023-04-01", y: 65 },
                { x: "2023-05-01", y: 55 },
                { x: "2023-06-01", y: 70 },
                { x: "2023-07-01", y: 80 },
                { x: "2023-08-01", y: 75 },
                { x: "2023-09-01", y: 90 },
                { x: "2023-10-01", y: 100 },
                { x: "2023-11-01", y: 95 },
                { x: "2023-12-01", y: 110 },
            ]
        }
    ];
    const pieData = [
        {
            "id": "Client Users",
            "label": "Client Users",
            "value": 120,
        },
        {
            "id": "Trucker Users",
            "label": "Trucker Users",
            "value": 80,
        }
    ];
    return (
        <div className="flex-col animate-fade-in mx-8">
            <div className="my-4 flex text-[2em] text-primarycolor font-bold items-center">
                <BiSolidDashboard className="mx-3" /> Admin Dashboard
            </div>
            {/* Top Boxes */}
            <section className="h-[30vh] flex overflow-x-auto rounded-lg">
                <div className="flex flex-row gap-4 items-center justify-between w-full mx-auto mt-2">
                    {/* Box 1 - TOTAL USERs */}
                    <div className="bg-useradmin h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-primarycolor font-bold text-left xl:text-[0.8em]">
                                TOTAL USERS
                            </p>
                            <p className="text-primarycolor text-[3em] font-bold xl:text-[2em]">
                                105
                            </p>
                        </div>
                        <FaUserFriends className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>

                    {/* Box 2 - PENDING PAYMENTS */}
                    <div className="bg-useradmin h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-primarycolor font-bold text-left xl:text-[0.8em]">
                                TOTAL TRUCKERS
                            </p>
                            <p className="text-primarycolor text-[3em] font-bold xl:text-[2em]">
                                20
                            </p>
                        </div>
                        <FaTruck className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>

                    {/* Box 3 - BOOKINGS ONGOING */}
                    <div className="bg-useradmin h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-primarycolor font-bold text-left xl:text-[0.8em]">
                                ACTIVE USERS
                            </p>
                            <p className="text-primarycolor text-[3em] font-bold xl:text-[2em]">
                                43
                            </p>
                        </div>
                        <BiSolidCheckSquare className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>

                    {/* Box 4 - BOOKINGS COMPLETED */}
                    <div className="bg-useradmin h-[24vh] w-[37vh] rounded-2xl flex justify-between shadow-lg drop-shadow-lg items-center p-4">
                        <div className="flex flex-col">
                            <p className="text-primarycolor font-bold text-left xl:text-[0.8em]">
                                INACTIVE USERS
                            </p>
                            <p className="text-primarycolor text-[3em] font-bold xl:text-[2em]">
                                10
                            </p>
                        </div>
                        <LuUserX className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>
                </div>
            </section>

            {/* Graph Section */}
            <section className="container mt-5 bg-useradmin rounded-md shadow-lg drop-shadow-lg ">
                <div className="flex items-center justify-between py-2 px-4 border-b-2 border-useradmin">
                    <h2 className="text-[1.5em] text-primarycolor font-bold">Monthly Registration</h2>
                </div>
                <div className="h-[50vh] mx-5 pb-5">
                    <UserLineChart data={monthlyRegistrations} />
                </div>
            </section>

            {/* Tables Section */}
            <section className="h-[50vh] flex overflow-auto mt-5">
                {/* Pending Bookings */}
                <div className="w-full lg:w-[49%] text-center bg-useradmin flex-col pt-0 rounded-lg overflow-auto shadow-lg drop-shadow-lg m-2">
                    <div className="text-left">
                        <p className="bg-alert text-primarycolor rounded-t-lg font-semibold text-xl px-5 py-2">
                            Pending Bookings
                        </p>
                    </div>
                    <div className="px-5 py-2">
                        <table className="w-full text-primarycolor text-left">
                            <thead>
                                <tr className="text-sm font-semibold">
                                    <th className="py-2">Owner Name</th>
                                    <th>Company Name</th>
                                    <th>Email Address</th>
                                    <th>Sent Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingVerifications.map((verification) => (
                                    <tr key={verification.id} className="text-sm">
                                        <td className="py-2">{verification.contact_name}</td>
                                        <td>{verification.company_name}</td>
                                        <td>{verification.email_address}</td>
                                        <td>{verification.sent_date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Usertype Overview */}
                <div className="w-full lg:w-[49%] text-center bg-useradmin rounded-lg flex-col pt-0 overflow-auto shadow-lg drop-shadow-lg m-2">
                    <div className="text-left bg-useradmin">
                        <p className="font-semibold text-primarycolor text-xl px-5 py-2">
                            UserType Overview
                        </p>
                    </div>
                    <div className="h-[40vh] mx-10 pb-5">
                        <UserPieChart data={pieData} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDashboard;