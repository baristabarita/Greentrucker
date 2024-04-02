import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidBookBookmark } from "react-icons/bi";
import { initialBookings } from "@/util/data/sampleBookingsData";

const BookingManager = () => {
    
    const navigate = useNavigate();
    const [bookings, setBookings] = useState(initialBookings);
    const [currentPage, setCurrentPage] = useState(1);
    const bookingsPerPage = 10;
    // States for filtering
    const [filterDate, setFilterDate] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    // Status options for the dropdown
    const statusOptions = ["All", "Pending", "Processing", "Reserved", "Ongoing", "Completed", "Cancelled"];

    // Function to filter bookings based on selected filters
    const getFilteredBookings = () => {
        return bookings.filter(booking => {
            const dateMatches = filterDate ? booking.booking_date === filterDate : true;
            const statusMatches = filterStatus === "All" || filterStatus === '' ? true : booking.status === filterStatus;
            return dateMatches && statusMatches;
        });
    };

    const totalPages = Math.ceil(getFilteredBookings().length / bookingsPerPage);

    // Calculate the currently displayed bookings
    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = getFilteredBookings().slice(indexOfFirstBooking, indexOfLastBooking);


    // Function to navigate to the next and previous page
    const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

    // Function to determine if the next or previous buttons should be disabled
    const nextButtonDisabled = currentPage >= totalPages;
    const prevButtonDisabled = currentPage <= 1;

    // Add New Booking - Stub for demonstration (You might open a modal or navigate to a form)
    const handleNewBooking = () => {
        navigate('/trucker/truckerbookings/bookingform');
    }

    const handleViewDetails = (bookingId) => {
        localStorage.setItem('selectedBookingId', bookingId);
        navigate('/trucker/truckerbookings/booking'); // Adjust the route as necessary
    };
    

    return (
        <div className="animate-fade-in p-5">
            <div className="flex items-center mb-4">
                <BiSolidBookBookmark className="text-3xl mr-2" />
                <h2 className="text-3xl font-bold">Bookings List</h2>
            </div>
            {/* Filter and  Add new Booking button*/}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                    <span className="font-medium">Filter by:</span>
                    <div>
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="input input-bordered input-sm"
                        />
                    </div>
                    <div>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="select select-bordered select-sm"
                        >
                            {statusOptions.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <button onClick={handleNewBooking} className="btn btn-sm px-4 py-2 rounded-md bg-usertrucker text-white hover:bg-primarycolor hover:text-usertrucker btn-primary">Add New Booking</button>
                </div>

            </div>

            {/* Table to display bookings */}
            <div className="overflow-y-auto mt-4 bg-white rounded-lg drop-shadow-lg shadow-lg opacity-1">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-primarycolor">
                        <tr>
                            <th scope="col" className="py-3 px-6">Client Name</th>
                            <th scope="col" className="py-3 px-6">Delivery Address</th>
                            <th scope="col" className="py-3 px-6">Booking Date</th>
                            <th scope="col" className="py-3 px-6">Est. Arrival Date</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBookings.length > 0 ? (
                            currentBookings.map((booking) => (
                                <tr key={booking.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">{booking.clientDetails ? booking.clientDetails.client_name : 'N/A'}</td>
                                    <td className="py-4 px-6">{booking.delivery_address}</td>
                                    <td className="py-4 px-6">{booking.booking_date}</td>
                                    <td className="py-4 px-6">{booking.est_finish_date}</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex justify-center items-center">
                                            <span className={`inline-flex items-center justify-center font-bold rounded-full py-1 px-3 text-sm 
                                                ${booking.status === "Pending" ? "bg-pending bg-opacity-30 text-orange-600" :
                                                    booking.status === "Processing" ? "bg-processing bg-opacity-30 text-purple-600" :
                                                        booking.status === "Reserved" ? "bg-reserved bg-opacity-30 text-pink-600" :
                                                            booking.status === "Ongoing" ? "bg-ongoing bg-opacity-30 text-blue-600" :
                                                                booking.status === "Completed" ? "bg-complete bg-opacity-30 text-green-600" :
                                                                    booking.status === "Cancelled" ? "bg-cancelled bg-opacity-30 text-red-600" :
                                                                        "bg-gray-100 text-gray-800"}`}>
                                                {booking.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 flex justify-center items-center">
                                        <button className="font-bold px-4 py-1 rounded-lg bg-secondarycolor text-userclient hover:bg-primarycolor hover:underline mr-2"
                                        onClick={() => handleViewDetails(booking.id)}

                                        >View Details
                                    </button>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No bookings found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination and Showing X of Y bookings */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-gray-600 font-bold">Showing {currentBookings.length} of {bookings.length} bookings</span>
                <div className="flex">
                    <button
                        onClick={goToPreviousPage}
                        disabled={prevButtonDisabled}
                        className={`px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${prevButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        &#8592;
                    </button>

                    <div className="flex items-center justify-center">
                        <span className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400">
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={nextButtonDisabled}
                        className={`px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${nextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingManager;
