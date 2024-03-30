import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBookingDetails = () => {
    const navigate = useNavigate();
    const [bookingDetails, setBookingDetails] = useState({});
    
    useEffect(() => {
        // Retrieve the booking details from localStorage
        const storedBooking = localStorage.getItem('currentBooking');
        if (storedBooking) {
            setBookingDetails(JSON.parse(storedBooking));
        } else {
            // Handle case where there are no booking details (e.g., direct navigation to the page)
            navigate('/'); // Redirect to a default page, adjust as needed
        }
    }, [navigate]);

    return (
        <>
            <h1>UserBookingDetails</h1>
            <h1>Booking Details</h1>
            <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
            <p><strong>Business Name:</strong> {bookingDetails.businessName}</p>
            <p><strong>Delivery Address:</strong> {bookingDetails.deliveryAddress}</p>
            <p><strong>Estimated Finish Date:</strong> {bookingDetails.estFinishDate}</p>
            {/* Additional details and layout as needed */}
        </>
    )
}

export default UserBookingDetails;