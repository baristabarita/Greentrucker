import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialBookings } from "@/util/data/sampleBookingsData";
import { truckerAssets } from "@/util/data/sampleAssetsData"
import MainDetailsCard from "@/components/card/trucker-selected-booking-cards/MainDetailsCard";
import MiscDetailsCard from "@/components/card/trucker-selected-booking-cards/MiscDetailsCard";
import AssignedAssetDetailsCard from "@/components/card/trucker-selected-booking-cards/AssignedAssetDetailsCard";
import ViewDocumentModal from "@/components/modals/ViewDocumentModal";
import CustomAlertModal from "@/components/modals/CustomAlertModal";
import AssignAssetModal from "@/components/modals/trucker/AssignAssetModal";
import EditBookingModal from "@/components/modals/trucker/EditBookingModal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaEye } from 'react-icons/fa'
import sampledocument from "@/assets/images/sample-document.jpg"


const SelectedBooking = () => {
    const navigate = useNavigate();
    const [booking, setBooking] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [documentUrl, setDocumentUrl] = useState('');
    const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
    const [assignedAssets, setAssignedAssets] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const pulloutDocUrl = sampledocument; // Placeholder for pullout document URL
    const eirDocUrl = sampledocument; // Placeholder for EIR document URL

    useEffect(() => {
        const bookingId = localStorage.getItem('selectedBookingId');
        if (bookingId) {
            const selectedBooking = initialBookings.find(b => b.id === parseInt(bookingId, 10));
            setBooking(selectedBooking);
        }
    }, []);
    useEffect(() => {
        if (booking && booking.assignedAssetDetails) {
            setAssignedAssets(booking.assignedAssetDetails);
        }
    }, [booking]);
    if (!booking) {
        return <div>Loading booking details...</div>;
    }

    const renderBookingDocuments = () => {
        if (booking.status === "Completed") {
            return (
                <>
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
                </>
            );
        }
        if (booking.status === "Reserved" || booking.status === "Ongoing") {
            return (
                <>
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

    const handleShowAssetModal = () => setIsAssetModalOpen(true);
    const handleCloseAssetModal = () => setIsAssetModalOpen(false);



    const handleAddAsset = (selectedAssetIndex) => {
        const newAsset = truckerAssets[selectedAssetIndex]; // Assuming truckerAssets is your sample assets data array
        setAssignedAssets(prev => [...prev, newAsset]);
    };

    const handleRemoveAsset = (indexToRemove) => {
        setAssignedAssets(currentAssets => currentAssets.filter((_, index) => index !== indexToRemove));
    };

    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);

    return (
        <div className="animate-fade-in p-5">

            <section className="flex flex-col md:flex-row md:justify-between items-center mb-4">
                <h3
                    className="text-userclient cursor-pointer py-[1%] font-bold flex items-center w-full md:w-auto text-[1.2em] py-[0.5%]"
                    onClick={() => navigate('/trucker/truckerbookings')}
                >
                    <AiOutlineArrowLeft className="text-black hover:text-primarycolor mr-2" />
                    Back to Bookings List
                </h3>
                <div className="w-full md:w-auto mt-2 md:mt-0 md:ml-4 flex justify-center">
                    <button className="mb-2 mr-2 px-4 py-2 bg-alert text-white hover:bg-red-500 rounded-lg font-bold"
                        onClick={handleShowAlertModal}>
                        Delete Booking
                    </button>
                    <button className="mb-2 px-4 py-2 bg-usertrucker text-white hover:bg-primarycolor hover:text-userclient rounded-lg font-bold"
                        onClick={handleShowEditModal}>
                        Edit Booking
                    </button>
                </div>
            </section>


            <MainDetailsCard booking={booking} />
            <section className="flex flex-col md:flex-row md:space-x-4 mt-5">
                {/* First Column: Container and Item details */}
                <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Container, Items and Document Details</h3>
                    <div className="mt-6">
                        {/* Container Details Section */}
                        <MiscDetailsCard title="Container Details">
                            <p>Container Size: {booking.containerDetails.container_size}</p>
                            <p>Container Quantity: {booking.containerDetails.container_quantity}</p>
                            <p>Container Weight: {booking.containerDetails.container_weight}</p>
                        </MiscDetailsCard>
                        {/* Item Details Section */}
                        <MiscDetailsCard title="Item Details">
                            <p>Item Type: {booking.itemDetails.item_type}</p>
                            <p>Item Quantity: {booking.itemDetails.item_quantity}</p>
                            <p>Item Weight: {booking.itemDetails.item_weight}</p>
                        </MiscDetailsCard>
                        {/* Item Details Section */}
                        <MiscDetailsCard title="Document Details">
                            {renderBookingDocuments()}
                        </MiscDetailsCard>

                    </div>

                </div>

                {/* Second Column: Assigned Assets */}
                <div className="flex-1 mt-5 md:mt-0">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold mb-4">Assigned Assets</h2>
                        <button className="mb-2 px-4 py-2 bg-usertrucker text-white hover:bg-primarycolor hover:text-userclient rounded-lg font-bold shadow-custom"
                            onClick={handleShowAssetModal}>Set Assets</button>
                    </div>
                    {booking.assignedAssetDetails && booking.assignedAssetDetails.length > 0 ? (
                        booking.assignedAssetDetails.map((asset, index) => (
                            <AssignedAssetDetailsCard key={index} asset={asset} />
                        ))
                    ) : (
                        <p>No assigned assets found.</p>
                    )}
                </div>
            </section>
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
                buttonTwoOnClick={() => { navigate("/trucker/truckerbookings") }}
            />
            <AssignAssetModal
                isOpen={isAssetModalOpen}
                onClose={handleCloseAssetModal}
                assignedAssets={assignedAssets}
                sampleAssetsData={truckerAssets} // Assuming this is your array of sample assets
                onAddAsset={handleAddAsset}
                onRemoveAsset={handleRemoveAsset}
            />
            <EditBookingModal
                isOpen={showEditModal}
                onClose={handleCloseEditModal}
                onSave={handleCloseEditModal}
                initialStatus={booking.status}
                initialDate={booking.est_finish_date}
            />
        </div>
    );
};

export default SelectedBooking;
