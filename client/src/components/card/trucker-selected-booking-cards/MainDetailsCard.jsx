import React from "react";
import { FaTruck, FaCalendar, FaFile, FaCheckCircle, FaHourglass, FaTimesCircle, FaArrowRight } from "react-icons/fa";
import { GiEmptyHourglass } from "react-icons/gi";

const MainDetailsCard = ({ booking }) => {
    const {
        id,
        status,
        clientDetails,
        containerDetails,
        delivery_address,
        est_finish_date,
    } = booking;


    const getStatusIcon = () => {
        switch (status) {
            case "Pending":
                return <GiEmptyHourglass size={130} />;
            case "Processing":
                return <FaFile size={130} />;
            case "Reserved":
                return <FaCalendar size={130} />;
            case "Ongoing":
                return <FaTruck size={130} />;
            case "Completed":
                return <FaCheckCircle size={130} />;
            default:
                return <FaTimesCircle size={130} />;
        }
    };

    const getStatusTextColor = () => {
        switch (status) {
            case "Pending":
                return "text-white bg-pending py-1 px-4 rounded";
            case "Processing":
                return "text-white bg-processing py-1 px-4 rounded";
            case "Reserved":
                return "text-white bg-reserved py-1 px-4 rounded";
            case "Ongoing":
                return "text-white bg-ongoing py-1 px-4 rounded";
            case "Completed":
                return "text-white bg-complete py-1 px-4 rounded";
            case "Cancelled":
                return "text-white bg-cancelled py-1 px-4 rounded";

            default:
                return "text-white bg-gray-500 py-1 px-4 rounded";
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-5 flex justify-between space-x-4">
            {/* Column 1: ID, Status, and Icon */}
            <div className="flex flex-col items-start">
                <p><strong>Booking ID:</strong> {id}</p>
                <div className="flex items-center">
                    <h2 className="font-bold text-[1.4em] mr-2">Current Status:</h2>
                    <h2 className={`font-bold text-[0.8em] ${getStatusTextColor()}`}>
                        {status}
                    </h2>
                </div>
                <div className="w-[35%] h-auto ml-4">
                    {getStatusIcon()}
                </div>
            </div>

            {/* Column 2: Primary Details */}
            <div className="flex flex-col items-start">
                <h3 className="font-bold text-2xl">Primary Details</h3>
                <hr className="border-t border-gray-300 w-full my-2" />
                <p className="mt-1"><strong>From:</strong></p>
                <p className="text-gray-500">{containerDetails.pickup_location}</p>
                <p className="mt-1"><strong>To:</strong></p>
                <p className="text-gray-500"> {delivery_address}</p>
                <p className="mt-1"><strong>Est. Finish Date:</strong></p>
                <p className="text-gray-500">{est_finish_date}</p>
            </div>

            {/* Column 3: Client Details */}
            <div className="flex flex-col items-start">
                <h3 className="font-bold">Client Details</h3>
                <hr className="border-t border-gray-300 w-full my-2" />
                <p className="mt-1"><strong>Client Name:</strong></p>
                <p className="text-gray-500">{clientDetails.client_name}</p>
                <p className="mt-1"><strong>Email Address:</strong></p>
                <p className="text-gray-500">{clientDetails.email_address}</p>
                <p className="mt-1"><strong>Contact Number:</strong></p>
                <p className="text-gray-500">{clientDetails.contact_number}</p>
            </div>
        </div>
    );
};

export default MainDetailsCard;
