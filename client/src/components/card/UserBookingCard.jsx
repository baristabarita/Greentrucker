import React from 'react';
import { GiEmptyHourglass } from "react-icons/gi";
import { FaFile, FaCalendar, FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImTruck } from "react-icons/im";
import { MdDateRange } from "react-icons/md"; 

const UserBookingCard = ({ status, bookingId, businessName, deliveryAddress, estFinishDate, handleDetailsClick }) => {
    const getStatusIcon = () => {
        switch (status) {
            case "Pending":
                return <GiEmptyHourglass size={24} />;
            case "Processing":
                return <FaFile size={24} />;
            case "Reserved":
                return <FaCalendar size={24} />;
            case "Ongoing":
                return <FaTruck size={24} />;
            case "Completed":
                return <FaCheckCircle size={24} />;
            default:
                return <FaTimesCircle size={24} />;
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
        <div className="bg-white rounded-lg border p-4 mb-4 flex flex-col sm:flex-row justify-between items-start shadow-lg drop-shadow-lg">
            <div className="flex items-start">
                <div className="flex flex-col sm:flex-row items-center mr-4">
                    {getStatusIcon()}
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <h2 className="font-bold text-lg">{bookingId}</h2>
                        <div className="flex items-center text-sm">
                            <h2 className="font-bold mr-2">Booking Status:</h2>
                            <span className={`font-bold px-2 py-1 rounded text-white ${getStatusTextColor()}`}>{status}</span>
                        </div>
                        <div className="text-sm font-bold mt-2">
                            <ImTruck className="inline-block mr-2" />
                            {businessName}
                        </div>
                        <div className="text-sm mt-1">
                            <FaLocationDot className="inline-block mr-2" />
                            {deliveryAddress}
                        </div>
                        <div className="text-sm mt-1">
                            <MdDateRange className="inline-block mr-2" />
                            {estFinishDate}
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="bg-usertrucker hover:bg-primarycolor text-white px-3 py-1 rounded mt-4 sm:mt-0 shadow-custom"
                onClick={() => handleDetailsClick(bookingId)}
            >
                View Booking Details
            </button>
        </div>
    );
};

export default UserBookingCard;
