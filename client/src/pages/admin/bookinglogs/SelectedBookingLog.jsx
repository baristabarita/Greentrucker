import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initialBookings } from "@/util/data/sampleBookingsData";
import CustomAlertModal from "@/components/modals/CustomAlertModal";
import ViewDocumentModal from "@/components/modals/ViewDocumentModal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaEye } from 'react-icons/fa'
import sampledocument from "@/assets/images/sample-document.jpg"

const SelectedBookingLog = () => {
    const navigate = useNavigate();
    const [booking, setBooking] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [documentUrl, setDocumentUrl] = useState('');
    const pulloutDocUrl = sampledocument; // Placeholder for pullout document URL
    const eirDocUrl = sampledocument; // Placeholder for EIR document URL

    useEffect(() => {
        const bookingId = localStorage.getItem('selectedBookingId');
        if (bookingId) {
            const selectedBooking = initialBookings.find(b => b.id === parseInt(bookingId, 10));
            setBooking(selectedBooking);
        }
    }, []);

    if (!booking) {
        return <div>Loading booking details...</div>;
    }
    const renderBookingDocuments = () => {
        if (booking.status === "Completed") {
            return (
                <>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-[1em] text-primarycolor ">Pullout Documents:</p>
                        <button
                            className="flex itmes-center font-bold text-[0.8em] bg-secondarycolor hover:bg-primarycolor text-usertrucker px-2 py-1 rounded"
                            onClick={() => onOpenDocumentModal(pulloutDocUrl)}
                        >
                            <FaEye className="mr-1 mt-1" />
                            View Document
                        </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold text-[1em] text-primarycolor">Proof of Completion (EIR):</p>
                        <button
                            className="flex itmes-center font-bold text-[0.8em] bg-secondarycolor hover:bg-primarycolor text-usertrucker px-2 py-1 rounded"
                            onClick={() => onOpenDocumentModal(eirDocUrl)}
                        >
                            <FaEye className="mr-1 mt-1" />
                            View Document
                        </button>
                    </div>
                </>
            );
        }
        if (booking.status === "Reserved" || booking.status === "Ongoing") {
            return (
                <>
                    <div className="flex items-center mt-2">
                        <p className="font-bold text-[1em] mr-2 text-primarycolor">Pullout Documents:</p>
                        <button
                            className="flex itmes-center font-bold text-[0.8em] bg-secondarycolor hover:bg-primarycolor text-usertrucker px-2 py-1 rounded"
                            onClick={() => onOpenDocumentModal(pulloutDocUrl)}
                        >
                            <FaEye className="mr-1 mt-1" />
                            View Document
                        </button>
                    </div>
                </>
            );
        }
        return null;
    };
    const onOpenDocumentModal = (url) => {
        setDocumentUrl(url);
        setIsOpen(true);
    };
    const handleCloseModal = () => setIsOpen(false);

    const handleShowAlertModal = () => {
        setShowAlertModal(true);
    };
    const handleCloseAlertModal = () => {
        setShowAlertModal(false);
    };

    return (
        <div className="animate-fade-in p-5">
            {/* Page title and buttons */}
            <div className="flex justify-between mb-4">
                <h3
                    className="text-primarycolor cursor-pointer py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => navigate('/admin/bookinglogs')}
                >
                    <AiOutlineArrowLeft className="text-primarycolor hover:text-secondarycolor" />
                    Back to Booking Logs
                </h3>
                {booking.visibility === 'unviewable' ? (

                    <div>
                        <button className="mb-2 mr-2 px-4 py-2 bg-alert text-white hover:bg-red-500  rounded-lg font-bold"
                            onClick={handleShowAlertModal}>Delete Booking</button>
                    </div>
                ) : null}
            </div>
            <div className="bg-useradmin border border-primarycolor rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-primarycolor mb-4">Booking ID: {booking.id}</h2>
                <hr className="mb-6" />

                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-secondarycolor mb-6">
                    {/* Main Details Column */}
                    <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-2 py-2 px-4 w-[45%] rounded-xl bg-primarycolor text-white">Main Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Booking Status:</span> <span className="text-secondarycolor">{booking.status}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Delivery Address:</span> <span className="text-secondarycolor">{booking.delivery_address}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Booking Date:</span> <span className="text-secondarycolor">{booking.booking_date}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Est. Finish Date:</span> <span className="text-secondarycolor">{booking.est_finish_date}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Visibility:</span> <span className="text-secondarycolor">{booking.visibility}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Last Updated:</span> <span className="text-secondarycolor">{booking.last_updated}</span>
                        </div>
                    </div>
                    {/* Client Details */}
                    <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-2 py-2 px-4 w-[45%] rounded-xl bg-primarycolor text-white">Client Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Client Name:</span> <span className="text-secondarycolor">{booking.clientDetails.client_name}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Contact Number:</span> <span className="text-secondarycolor">{booking.clientDetails.contact_number}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Contact Number:</span> <span className="text-secondarycolor">{booking.clientDetails.email_address}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-secondarycolor mb-6">
                    {/* Container Details */}
                    <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-2 py-2 px-4 w-[45%] rounded-xl bg-primarycolor text-white">Container Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Pickup Location:</span> <span className="text-secondarycolor">{booking.containerDetails.pickup_location}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Container Size:</span> <span className="text-secondarycolor">{booking.containerDetails.container_size}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Container Quantity:</span> <span className="text-secondarycolor">{booking.containerDetails.container_quantity}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Container Weight:</span> <span className="text-secondarycolor">{booking.containerDetails.container_weight}</span>
                        </div>
                    </div>
                     {/* Item Details */}
                     <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-2 py-2 px-4 w-[45%] rounded-xl bg-primarycolor text-white">Item Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Item Type:</span> <span className="text-secondarycolor">{booking.itemDetails.item_type}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Item Quantity:</span> <span className="text-secondarycolor">{booking.itemDetails.item_quantity}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-secondarycolor font-bold">Weight per Item:</span> <span className="text-secondarycolor">{booking.itemDetails.item_weight}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-secondarycolor mb-6">
                    {/* Document Details */}
                    <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-4 py-2 px-4 w-[75%] rounded-xl bg-primarycolor text-white">Uploaded Documents</h3>
                        {renderBookingDocuments()}
                    </div>
                </div>
            </div>
            <ViewDocumentModal
                isOpen={isOpen}
                documentUrl={documentUrl}
                onClose={handleCloseModal}
            />
             <CustomAlertModal
                isOpen={showAlertModal}
                onClose={handleCloseAlertModal}
                title="Delete Selected Booking"
                description="Are you sure you want to delete booking? This action cannot be undone."
                buttonOneText="Cancel"
                buttonOneOnClick={handleCloseAlertModal}
                buttonTwoText="Delete"
                buttonTwoOnClick={() => { navigate("/admin/bookinglogs") }}
            />
        </div>
    )
}

export default SelectedBookingLog;