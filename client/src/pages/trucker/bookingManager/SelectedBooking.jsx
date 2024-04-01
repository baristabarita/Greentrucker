import React, { useEffect, useState } from "react";
import { initialBookings } from "./sampleBookingsData";
import { BiSolidBookBookmark } from "react-icons/bi";

const SelectedBooking = () => {
    const [booking, setBooking] = useState(null);

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

    // Display the selected booking details
    return (
        <div>
            <h1>Selected Booking</h1>
            {/* Example of displaying booking details */}
            <p>Client Name: {booking.clientDetails.client_name}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default SelectedBooking;
