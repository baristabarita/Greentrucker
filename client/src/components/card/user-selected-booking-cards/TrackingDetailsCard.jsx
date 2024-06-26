import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaTruck, FaCalendar, FaFile, FaCheckCircle, FaHourglass, FaTimesCircle, FaArrowRight } from "react-icons/fa";
import { GiEmptyHourglass } from "react-icons/gi";

const TrackingDetailsCard = ({ bookingDetails, onShowAlertModal, onOpenRatingModal }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSubmit = (e) => {
        e.preventDefault();
        console.log("Simulated file submission:", selectedFile);
        // Here you could set state indicating the file is "submitted"
        alert("File submitted successfully!");
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleRateService = () => {
        onOpenRatingModal();
    };

    const getStatusIcon = () => {
        switch (bookingDetails.status) {
            case "Pending":
                return <GiEmptyHourglass size={200} />;
            case "Processing":
                return <FaFile size={150} />;
            case "Reserved":
                return <FaCalendar size={150} />;
            case "Ongoing":
                return <FaTruck size={150} />;
            case "Completed":
                return <FaCheckCircle size={150} />;
            default:
                return <FaTimesCircle size={150} />;
        }
    };

    const renderStatusDetails = () => {
        switch (bookingDetails.status) {
            case "Pending":
                return (
                    <div>
                        <h1 className="text-[1.2em] font-bold mb-1">
                            Your Booking has been received!
                        </h1>
                        <hr className="my-4 border-gray-500 " />
                        <p className="flex items-center mb-2">
                            Your booking has been received by the chosen trucking service,
                            please wait for it to be accepted.
                        </p>
                        <button onClick={onShowAlertModal} className="bg-alert hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel Booking</button>
                    </div>
                );
            case "Processing":
                return (
                    <div>
                        <p className="text-[1.2em] font-bold mb-1">
                            Please submit your Pullout Documents
                        </p>
                        <hr className="my-4 border-gray-500 " />
                        <p className="flex items-center mb-2">
                            Note: These documents are required for the selected trucking
                            service to initiate the delivery process.
                        </p>
                        {/* File submission logic and submit button */}
                        <form onSubmit={handleFileSubmit} className="w-full">
                            <input type="file" className="w-full mb-2" onChange={handleFileChange} />
                            <div className="flex justify-start">
                                <button type="submit" className="bg-usertrucker text-white hover:bg-primarycolor hover:text-userclient py-2 px-4 rounded-lg mt-2">
                                    Submit Document
                                </button>
                            </div>
                        </form>

                    </div>
                );
            case "Reserved":
            case "Ongoing":
                return (
                    <div>
                        <p className="flex justify-between">
                            <strong className="text-left">Booked Service:</strong>
                            <span className="text-right ml-3">{bookingDetails.businessName}</span>
                        </p>
                        <p className="flex justify-between">
                            <strong className="text-left">Contact Number:</strong>
                            <span className="text-right ml-3">{bookingDetails.contact_number}</span>
                        </p>
                        {bookingDetails.truckAsset ? (
                            <>
                                <p className="flex justify-between">
                                    <strong className="text-left">Truck Unit & Plate Number:</strong>
                                    <span className="text-right ml-3">{bookingDetails.truckAsset.brand} - {bookingDetails.truckAsset.plate_number}</span>
                                </p>
                            </>
                        ) : (
                            <p className="mt-2">
                                <strong>No asset assigned!</strong><br /> A truck will be assigned soon.
                            </p>
                        )}
                    </div>
                );
            case "Completed":
                return (
                    <div>
                        <h1 className="text-[1.2em] font-bold mb-1">
                            Your Booking has been completed!
                        </h1>
                        <hr className="my-4 border-gray-500 " />
                        <p className="flex justify-between">
                            <strong className="text-left">Booked Service: </strong>
                            <span className="text-right ml-3">{bookingDetails.businessName}</span>
                        </p>
                        <p className="flex justify-between">
                            <strong className="text-left">Contact Number: </strong>
                            <span className="text-right ml-3">{bookingDetails.contact_number}</span>
                        </p>
                        <button onClick={handleRateService} className="bg-usertrucker hover:bg-primarycolor text-white font-bold py-2 px-4 rounded">Rate Trucking Service</button>
                    </div>

                );
            case "Cancelled":
                return (
                    <div>
                        <h1 className="text-[1.2em] font-bold mb-1">
                            Your Booking has been cancelled.
                        </h1>
                        <hr className="my-4 border-gray-500 " />
                        <p className="flex justify-between">
                            <strong className="text-left">Booked Service: </strong>
                            <span className="text-right ml-3">{bookingDetails.businessName}</span>
                        </p>
                        <p className="flex justify-between">
                            <strong className="text-left">Contact Number: </strong>
                            <span className="text-right ml-3">{bookingDetails.contact_number}</span>
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };
    const getStatusTextColor = () => {
        switch (bookingDetails.status) {
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
        <div className="bg-white col-span-2 md:col-span-1 lg:col-span-2 border rounded p-4 shadow-lg drop-shadow-lg m-5 md:w-full lg:w-[55%]">

        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
                <h2 className="font-bold text-lg md:text-xl lg:text-[1.6em]">
                    Tracking Booking ID: {bookingDetails.booking_id}
                </h2>
                <div className="flex items-center">
                    <h2 className="font-bold text-md md:text-lg lg:text-[1.4em] mr-2">Booking Status:</h2>
                    <h2 className={`font-bold ${getStatusTextColor()}`}>
                        {bookingDetails.status}
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-2">
                    {bookingDetails.status === "Completed" ? (
                        <h2 className="font-bold text-md md:text-lg lg:text-[1.4em] mr-2">Completion Date:</h2>
                    ) : null}
                    {bookingDetails.status === "Completed" ? (
                        <h2 className="text-sm md:text-md lg:text-[1.2em]">{bookingDetails.est_finish_date}</h2>
                    ) : null}
                </div>
            </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center mr-1 mb-4">
            <div className="w-full md:w-[35%] h-auto ml-4">{getStatusIcon()}</div>
            <div className="ml-[5%] md:ml-4 lg:ml-[5%]">{renderStatusDetails()}</div>
        </div>
        <hr className="my-4 border-gray-400" />

        {/* Third Row */}
        <div className="flex flex-col md:flex-row items-center">
            {/* First Column */}
            <div className="flex-1">
                <p>
                    <strong>Pickup Location:</strong>
                </p>
                <p>{bookingDetails.pickup_location}</p>
            </div>

            {/* Second Column */}
            <div className="hidden md:block mx-2">
                <FaArrowRight size={50} />
            </div>
            {/* Third Column */}
            <div className="flex-1 mt-4 md:mt-0 md:ml-[10%]">
                <p>
                    <strong>Delivery Location:</strong>
                </p>
                <p>{bookingDetails.delivery_address}</p>
            </div>
        </div>
    </div>
    );
}

export default TrackingDetailsCard