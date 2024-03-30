import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrackingDetailsCard from "../../../components/card/user-selected-booking-cards/TrackingDetailsCard";
import SummaryCard from "../../../components/card/user-selected-booking-cards/SummaryCard";
import LoadingDetails from "../../../components/loaders/LoadingDetails";
import ViewDocumentModal from "../../../components/modals/ViewDocumentModal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import backgroundimg from '../../../assets/images/bgimg1.png';

const UserBookingDetails = () => {
    const navigate = useNavigate();
    const [bookingDetails, setBookingDetails] = useState(null); // Initialized to null for clarity
    const [isOpen, setIsOpen] = useState(false);
    const [documentUrl, setDocumentUrl] = useState('');

    useEffect(() => {
        // Attempt to retrieve the booking details from localStorage
        const storedBooking = localStorage.getItem('currentBooking');
        try {
            if (storedBooking) {
                // Parse stored data only if it exists
                const parsedBooking = JSON.parse(storedBooking);
                setBookingDetails(parsedBooking);
            } else {
                // Handle the absence of stored data, such as direct navigation or cleared localStorage
                console.error("No booking details found in localStorage.");
                navigate('/'); // Adjust as necessary to navigate to an appropriate fallback page
            }
        } catch (error) {
            // Handle potential errors in parsing the localStorage data
            console.error("Error parsing booking details from localStorage:", error);
            navigate('/'); // Optionally navigate to a fallback page on error
        }
    }, [navigate]);

    const handleOpenDocumentModal = (url) => {
        setDocumentUrl(url);
        setIsOpen(true);
    };

    const handleCloseModal = () => setIsOpen(false);

    console.log(bookingDetails);

    return (
        <div className="animate-fade-in min-h-screen bg-image bg-cover h-full" style={{ backgroundImage: `url(${backgroundimg})` }}>

            <div className="mt-[1em] text-userclient bg-primarycolor">
                <h3
                    className="ml-[2%] py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => navigate('/userbookings')}
                >
                    <AiOutlineArrowLeft className="text-black mr-[1%] hover:text-white" />
                    Back to Recent Bookings
                </h3>
            </div>

            <div className="container mx-auto my-auto flex flex-col items-center">
                {/* Render TrackingDetailsCard only if bookingDetails is not null */}
                {bookingDetails ? (
                    <TrackingDetailsCard bookingDetails={bookingDetails} />
                ) : (
                    <LoadingDetails />
                )}
                {bookingDetails ? (
                    <SummaryCard bookingDetails={bookingDetails} onOpenDocumentModal={handleOpenDocumentModal}  />
                ) : (
                    <LoadingDetails />
                )}
            </div>
            <ViewDocumentModal
                isOpen={isOpen}
                documentUrl={documentUrl}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default UserBookingDetails;
