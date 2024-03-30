import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaTruck, FaCalendar, FaFile, FaCheckCircle, FaHourglass, FaTimesCircle, FaArrowRight } from "react-icons/fa";
import { GiEmptyHourglass } from "react-icons/gi";

const TrackingDetailsCard = ({ bookingDetails }) => {

    const getStatusIcon = () => {
        switch (bookingDetails.status) {
            case "Pending":
                return <GiEmptyHourglass size={200} />;
            case "Pullout Docs Required":
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
                    </div>
                );
            case "Processed":
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
                        <form onSubmit={handleFileSubmit}>
                            <input type="file" className="w-full" onChange={handleFileChange} />
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
                                Submit
                            </button>
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
            case "Processed":
                return "text-white bg-processed py-1 px-4 rounded";
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
    const handleFileChange = (e) => {
        // Handle the file change event
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="bg-white col-span-2 md:col-span-2 border rounded p-4 shadow-lg drop-shadow-lg m-5 w-[55%]">
          
          {/* First Row */}
          <div className="flex justify-between mb-4">
            <div>
              <h2 className="font-bold text-[1.6em]">
                Tracking Booking ID: {bookingDetails.booking_id}
              </h2>
              <div className="flex items-center">
                <h2 className="font-bold text-[1.4em] mr-2">Booking Status:</h2>
                <h2 className={`font-bold text-[0.8em] ${getStatusTextColor()}`}>
                  {bookingDetails.status}
                </h2>
              </div>
              <div className="flex items-center mb-2">
                {bookingDetails.status === "Completed" ? (
                  <h2 className="font-bold text-[1.4em] mr-2">Completion Date:</h2>
                ) :
                bookingDetails.status === "Cancelled" ? (
                    <></>
                  ) : (
                    <h2 className="font-bold text-[1.4em] mr-2">Est. Finish Date:</h2>
                  )}
                {bookingDetails.status === "Completed" ? (
                  <h2 className="text-[1.2em]">{bookingDetails.est_finish_date}</h2>
                ) :
                bookingDetails.status === "Cancelled" ? (
                    <></>
                  ) : (
                    <h2 className="text-[1.2em] mr-2">{bookingDetails.est_finish_date}</h2>
                  )}
              </div>
            </div>
          </div>
    
          {/* Second Row */}
          <div className="flex items-center mr-1 mb-4">
            <div className="w-[35%] h-auto ml-4">{getStatusIcon()}</div>
            <div className="ml-[5%]">{renderStatusDetails()}</div>
          </div>
          <hr className="my-4 border-gray-400" />
    
          {/* Third Row */}
          <div className="mb-4 flex items-center">
            {/* First Column */}
            <div className="flex-1">
              <p>
                <strong>Pickup Location:</strong>
              </p>
              <p>{bookingDetails.pickup_location}</p>
            </div>
    
            {/* Second Column */}
            <div className="mx-2">
              <FaArrowRight size={50} />
            </div>
            {/* Third Column */}
            <div className="flex-1 ml-[10%]">
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