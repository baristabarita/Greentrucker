import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LineChart from "@/components/charts/trucker/LineChart";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillCalendar2EventFill } from "react-icons/bs"
import { MdPayments, MdPendingActions } from "react-icons/md"
import { FaCalendarCheck } from "react-icons/fa"

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [pendingBookings, setPendingBookings] = useState([
        { booking_id: 'BKG001', client_name: 'ACME Corp.', item_type: 'General Goods', container_size: '20ft', booking_date: '2023-09-01' },
        { booking_id: 'BKG002', client_name: 'Global Importers', item_type: 'Building Materials', container_size: '40ft', booking_date: '2023-09-05' },
    ]);
    const [assets, setAssets] = useState([
        { asset_id: 'AST001', asset_category: 'Truck', status: 'Idle' },
        { asset_id: 'AST002', asset_category: 'Container', status: 'In Transit' },
    ]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Wait for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <DashboardSkeleton />; // Show the skeleton if loading
    }
    const sampleData = [
        {
            id: "Sample Data",
            data: [
                { x: "2023-04-01", y: 7 },
                { x: "2023-04-02", y: 5 },
                { x: "2023-04-03", y: 11 },
                { x: "2023-04-04", y: 6 },
                { x: "2023-04-05", y: 7 },
                { x: "2023-04-06", y: 8 },
                { x: "2023-04-07", y: 5 },

            ],
        },
    ];

    return (
        <div className="animate-fade-in p-5">
            {/* Page title and verification status Section*/}
            <section className="flex flex-col sm:flex-row text-[1.8em] font-bold items-center justify-between space-y-2 sm:space-y-0">
                <p className="flex">
                    <BiSolidDashboard className="mr-2" /> Dashboard
                </p>
                <div className="flex flex-col items-end">
                    <div className="flex">
                        <p className="text-darkblue font-bold mr-2 text-[0.7em]">Verification Status:</p>
                        <span className="text-white bg-primarycolor px-2 rounded-md text-[0.7em]">Verified</span>
                    </div>
                    <p className="flex font-medium text-[0.7em]">Verify your account <span className="ml-2 cursor-pointer text-ongoing hover:text-primarycolor" onClick={() => navigate("/trucker/truckersettings")}>here</span>.</p>
                </div>
            </section>

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
                                35
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
                                10
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
                                5
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
                                23
                            </p>
                        </div>
                        <FaCalendarCheck className="text-userclient bg-primarycolor rounded-lg p-2 text-[5em]" />
                    </div>
                </div>
            </section>


            {/* Graph Section */}
            <section className="container mt-5 mb-8 bg-[white] rounded-md border shadow-lg drop-shadow-lg">
                <div className="flex items-center justify-between py-2 px-4 border-b-2 border-gray-300">
                    <h2 className="text-[1.5em] font-bold">Bookings This Month</h2>
                </div>
                <div className="h-[50vh] mx-5 pb-5">
                    <LineChart data={sampleData} />
                </div>
            </section>

            {/* Tables Section */}
            <section className="h-[50vh] flex flex-col lg:flex-row overflow-auto mt-5">
    {/* Pending Bookings */}
    <div className="w-full lg:w-[49%] text-center bg-white flex-col pt-0 rounded-lg overflow-auto border shadow-lg drop-shadow-lg m-2">
        <div className="text-left">
            <p className="bg-primarycolor rounded-t-lg font-semibold text-xl px-5 py-2">
                Pending Bookings
            </p>
        </div>
        <div className="px-5 py-2">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-sm font-semibold">
                        <th className="py-2">Client Name</th>
                        <th>Item Type</th>
                        <th>Container Type</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingBookings.map((booking) => (
                        <tr key={booking.booking_id} className="text-sm">
                            <td className="py-2">{booking.client_name}</td>
                            <td>{booking.item_type}</td>
                            <td>{booking.container_size}</td>
                            <td>{booking.booking_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    {/* Asset Overview */}
    <div className="w-full lg:w-[49%] text-center bg-white rounded-lg flex-col pt-0 overflow-auto border shadow-lg drop-shadow-lg m-2">
        <div className="text-left bg-primarycolor">
            <p className="font-semibold text-xl px-5 py-2">
                Asset Overview
            </p>
        </div>
        <div className="px-5 py-2">
            <table className="w-full text-left">
                <thead>
                    <tr className="text-sm font-semibold">
                        <th className="py-2 px-4">Asset ID</th>
                        <th>Asset Type</th>
                        <th>Current Status</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.asset_id} className="text-sm">
                            <td className="py-3 px-4">{asset.asset_id}</td>
                            <td>{asset.asset_category}</td>
                            <td className={`font-bold ${asset.status === 'Idle' ? 'text-cancelled' : 'text-complete'}`}>
                                {asset.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</section>


        </div>
    )
}

export default Dashboard;