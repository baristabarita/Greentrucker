import React, { useState, useEffect } from "react";
import { FaEye } from 'react-icons/fa'
import sampledocument from "@/assets/images/sample-document.jpg"

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
        <div className="bg-white border rounded p-4 shadow-lg drop-shadow-lg m-5 w-full md:w-[55%]">
            <div className="mb-4">
                <h2 className="font-bold text-lg md:text-[1.5em]">
                    {bookingDetails.status === "Completed" ? "Booking and Invoice Summary" : "Booking Summary"}
                </h2>
            </div>

            {/* First Row */}
            <div className="flex flex-col space-y-2 mb-4 w-full">
                {/* Quantity and Container Size Row */}
                <div className="flex items-center space-x-2">
                    <div className="bg-[#16334b] text-white text-center rounded-lg w-10 h-10 flex items-center justify-center font-bold">
                        {bookingDetails.container.quantity}
                    </div>
                    <div className="text-sm">
                        <span>{bookingDetails.container.container_size} ft. Containers</span>
                    </div>
                </div>

                {/* Item Type and Weight Row */}
                <div className="text-xs italic text-gray-600">
                    <span>{bookingDetails.container.item_type}, {bookingDetails.container.item_weight} kg</span>
                </div>

                {/* Total Charge-per-Container Row */}
                <div className="flex justify-between items-center w-full">
                    <span className="text-sm text-gray-800">
                        Total Charge-per-Container
                    </span>
                    <span className="font-bold text-sm">
                        ₱ {bookingDetails.payments.container_charge}
                    </span>
                </div>
            </div>

            {/* Divider Line */}
            <hr className="my-4 border-t border-gray-600 opacity-75" />
            {/* Second Row */}
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                    <div>
                        <div>Service Charge</div>
                        <div>Distance Charge</div>
                        <div className="font-bold">TOTAL CHARGES</div>
                    </div>
                    <div className="text-right">
                        <div>₱ {bookingDetails.payments.service_charge}</div>
                        <div>₱ {bookingDetails.payments.distance_charge}</div>
                        <div className="font-bold">₱ {bookingDetails.payments.total_balance}</div>
                    </div>
                </div>
            </div>

            {/* Place the Render Booking Documents functionality here */}
            {renderBookingDocuments()}

            <hr className="my-4 border-t border-gray-600 opacity-75" />
            <section>
                <h2 className="font-bold text-base md:text-lg mb-2">Other Payment Details</h2>

                {/* Payment Status Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-2">
                    <h2 className="font-light text-sm md:text-base">Payment Status:</h2>
                    <h2 className={`font-bold text-sm md:text-base ${getStatusTextColor()}`}>
                        {bookingDetails.payments.paymentStatus}
                    </h2>
                </div>

                {/* Payment Method Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-2">
                    <h2 className="font-light text-sm md:text-base">Payment Method:</h2>
                    <h2 className="font-bold text-sm md:text-base">
                        Physical Cash
                    </h2>
                </div>
            </section>

        </div>
    )
}

export default SummaryCard;