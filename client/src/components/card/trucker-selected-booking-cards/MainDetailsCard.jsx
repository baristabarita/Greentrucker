import React from "react";
import { FaTruck, FaCalendar, FaFile, FaCheckCircle, FaHourglass, FaTimesCircle } from "react-icons/fa";
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
            case "Pending": return <GiEmptyHourglass size={80} />;
            case "Processing": return <FaFile size={80} />;
            case "Reserved": return <FaCalendar size={80} />;
            case "Ongoing": return <FaTruck size={80} />;
            case "Completed": return <FaCheckCircle size={80} />;
            default: return <FaTimesCircle size={80} />;
        }
    };

    const getStatusTextColor = () => {
        switch (status) {
            case "Pending": return "text-white bg-pending py-1 px-4 rounded";
            case "Processing": return "text-white bg-processing py-1 px-4 rounded";
            case "Reserved": return "text-white bg-reserved py-1 px-4 rounded";
            case "Ongoing": return "text-white bg-ongoing py-1 px-4 rounded";
            case "Completed": return "text-white bg-complete py-1 px-4 rounded";
            case "Cancelled": return "text-white bg-cancelled py-1 px-4 rounded";
            default: return "text-white bg-gray-500 py-1 px-4 rounded";
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 md:p-5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Column 1: ID, Status, and Icon */}
            <section className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <p><strong>Booking ID:</strong> {id}</p>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                    <h2 className="font-bold text-lg">Current Status:</h2>
                    <h2 className={`font-bold ${getStatusTextColor()}`}>
                        {status}
                    </h2>
                </div>
                <div className="mt-2">
                    {getStatusIcon()}
                </div>
            </section>

            {/* Column 2: Primary Details */}
            <section className="flex-1">
                <h3 className="font-bold text-lg">Primary Details</h3>
                <div className="mt-1">
                    <p><strong>From:</strong></p>
                    <p className="text-gray-500">{containerDetails.pickup_location}</p>
                    <p><strong>To:</strong></p>
                    <p className="text-gray-500">{delivery_address}</p>
                    <p><strong>Est. Finish Date:</strong></p>
                    <p className="text-gray-500">{est_finish_date}</p>
                </div>
            </section>

            {/* Column 3: Client Details */}
            <section className="flex-1">
                <h3 className="font-bold text-lg">Client Details</h3>
                <div className="mt-1">
                    <p><strong>Client Name:</strong></p>
                    <p className="text-gray-500">{clientDetails.client_name}</p>
                    <p><strong>Email Address:</strong></p>
                    <p className="text-gray-500">{clientDetails.email_address}</p>
                    <p><strong>Contact Number:</strong></p>
                    <p className="text-gray-500">{clientDetails.contact_number}</p>
                </div>
            </section>
        </div>
    );
};

export default MainDetailsCard;
