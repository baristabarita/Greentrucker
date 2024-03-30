import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiEmptyHourglass } from "react-icons/gi";
import { FaFile, FaCalendar, FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImTruck } from "react-icons/im";
import { MdDateRange } from "react-icons/md";

const UserBookingCard = ({ status, bookingId, businessName, deliveryAddress, estFinishDate, handleDetailsClick }) => {
    const navigate = useNavigate();
    const getStatusIcon = () => {
        switch (status) {
            case "Pending":
                return <GiEmptyHourglass size={100} />;
            case "Processing":
                return <FaFile size={100} />;
            case "Reserved":
                return <FaCalendar size={100} />;
            case "Ongoing":
                return <FaTruck size={100} />;
            case "Completed":
                return <FaCheckCircle size={100} />;
            default:
                return <FaTimesCircle size={100} />;
        }
    };
    const getStatusTextColor = () => {
        switch (status) {
            case "Pending":
                return "bg-pending";
            case "Processing":
                return "bg-processing";
            case "Reserved":
                return "bg-reserved";
            case "Ongoing":
                return "bg-ongoing";
            case "Completed":
                return "bg-complete";
            case "Cancelled":
                return "bg-cancelled";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div className="bg-white rounded-lg border p-4 mb-4 w-[80%] flex flex-col shadow-lg drop-shadow-lg">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <div className="mr-4">{getStatusIcon()}</div>
                    <div>
                        <div className="flex items-center">
                            <h2 className="font-bold">{bookingId}</h2>
                        </div>

                        <div className="flex items-center">
                            <h2 className="font-bold text-[0.5 em] mr-2">Booking Status:</h2>
                            <h2
                                className={`font-bold text-[0.8em] text-white px-2 py-1 rounded ${getStatusTextColor()}`}
                            >
                                {status}
                            </h2>
                        </div>
                        <hr className="my-4 bg-gray-400 h-[2px]" />
                        <div className="flex font-bold">
                            <ImTruck className="mt-1 mr-3" />
                            <p>{businessName}</p>
                        </div>
                        <div className="flex">
                            <FaLocationDot className="mt-1 mr-3" />
                            <p>{deliveryAddress}</p>
                        </div>
                        <div className="flex">
                            <MdDateRange className="mt-1 mr-3" />
                            <p>{estFinishDate}</p>
                        </div>

                    </div>
                </div>
                <button
                    className="bg-usertrucker hover:bg-primarycolor text-white hover:text-usertrucker px-2 py-1 ml-4 rounded self-start"
                    onClick={() => handleDetailsClick(bookingId)}
                >
                    View Booking Details
                </button>
            </div>
        </div>
    );
}

export default UserBookingCard