import React, { useState, useEffect } from "react";
import { FaEye } from 'react-icons/fa'
import sampledocument from "../../../assets/images/sample-document.jpg"

const SummaryCard = ({ bookingDetails, onOpenDocumentModal }) => {

    const pulloutDocUrl = sampledocument; // Placeholder for pullout document URL
    const eirDocUrl = sampledocument; // Placeholder for EIR document URL


    const renderBookingDocuments = () => {
        if (bookingDetails.status === "Completed") {
            return (
                <>
                <hr className="my-4 border-t border-gray-600 opacity-75" />
                <div>
                    <h2 className="font-bold text-[1.3em] mr-2 mb-2">Uploaded Booking Documents</h2>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-[1em]">Pullout Documents:</p>
                        <button
                            className="flex itmes-center font-bold text-[0.8em] bg-usertrucker hover:bg-primarycolor text-white px-2 py-1 rounded"
                            onClick={() => onOpenDocumentModal(pulloutDocUrl)}
                        >
                            <FaEye className="mr-1 mt-1" />
                            View Document
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-[1em]">Proof of Completion (EIR):</p>
                        <button
                            className="flex itmes-center font-bold text-[0.8em] bg-usertrucker hover:bg-primarycolor text-white px-2 py-1 rounded"
                            onClick={() => onOpenDocumentModal(eirDocUrl)}
                        >
                            <FaEye className="mr-1 mt-1" />
                            View Document
                        </button>
                    </div>
                </div>

            </>
            );
        }
        if (bookingDetails.status === "Reserved" || bookingDetails.status === "Ongoing") {
            return (
                <>
                <hr className="my-4 border-t border-gray-600 opacity-75" />
                <div>
                    <h2 className="font-bold text-[1.3em] mr-2 mb-2">Uploaded Booking Documents</h2>
                    <div className="flex items-center mt-2">
                        <p className="font-bold text-[1em] mr-2">Pullout Documents:</p>
                        <button
                            className="flex itmes-center font-bold text-[0.8em] bg-usertrucker hover:bg-primarycolor text-white px-2 py-1 rounded"
                            onClick={() => onOpenDocumentModal(pulloutDocUrl)}
                        >
                            <FaEye className="mr-1 mt-1" />
                            View Document
                        </button>
                    </div>
                </div>
                </>
            );
        }
        return null;
    };

    const getStatusTextColor = () => {
        switch (bookingDetails.payments.paymentStatus) {
            case "Pending":
                return "text-white bg-pending py-1 px-4 rounded";
                case "Paid":
                return "text-white bg-complete py-1 px-4 rounded";
                default:
                return "text-white bg-gray-500 py-1 px-4 rounded";
        }
    };
    return (
        <div className="bg-white col-span-2 md:col-span-2 border rounded p-4 shadow-lg drop-shadow-lg m-5 w-[55%]">
            <div className="mb-4">
                {bookingDetails.status === "Completed" ? (
                    <h2 className="font-bold text-[1.5em]">Booking and Invoice Summary</h2>
                ) : (
                    <h2 className="font-bold text-[1.5em]">Booking Summary</h2>
                )}
            </div>

            {/* First Row */}
            <div className="flex mb-2">
                {/* First Column */}
                <div className="flex-1">
                    <div className="flex items-center">
                        <p className="font-bold mb-1 text-[1.3em] w-8 h-8 bg-[#16334b] rounded-lg text-[#fff] text-center">
                            {bookingDetails.container.quantity}
                        </p>
                        <div className="ml-3 text-[1.3em] font-medium">
                            {bookingDetails.container.container_type} ft. Containers
                        </div>
                    </div>
                    <ul>
                        <li className="ml-12 text-[0.8em] italic">
                            {bookingDetails.container.item_type}, {bookingDetails.container.item_weight} kg
                        </li>
                    </ul>
                </div>
                {/* Second Column */}
                <div className="text-right">
                    <div className="mt-2">
                        <p className="font-bold">₱ {bookingDetails.payments.container_charge}</p>
                        <p className="font-normal">Total Charge-per-Container</p>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <hr className="my-4 border-t border-gray-600 opacity-75" />
            {/* Second Row */}
            <div className="flex justify-between mb-2">
                {/* First Column */}
                <div className="flex-1">
                    <p>Service Charge</p>
                    <p>Distance Charge</p>
                    <p className="font-bold">TOTAL CHARGES</p>
                </div>

                {/* Second Column */}
                <div className="text-right">
                    <p>₱ {bookingDetails.payments.service_charge}</p>
                    <p>₱ {bookingDetails.payments.distance_charge}</p>
                    <p className="font-bold">₱ {bookingDetails.payments.total_balance}</p>
                </div>
            </div>

            {/* Place the Render Booking Documents functionality here */}
            {renderBookingDocuments()}

            <hr className="my-4 border-t border-gray-600 opacity-75" />
            <div>
                <h2 className="font-bold text-[1.3em] mr-2 mb-2">Other Payment Details</h2>
                <div className="flex justify-between items-center mt-2">
                    <h2 className="font-light text-[1em] mr-2">Payment Status:</h2>
                    <h2 className={`font-bold text-[0.8em] ${getStatusTextColor()}`} >
                        {bookingDetails.payments.paymentStatus}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default SummaryCard;