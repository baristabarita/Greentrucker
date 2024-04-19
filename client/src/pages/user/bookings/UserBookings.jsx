import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/util/userAuthentication";
import UserBookingCard from '@/components/card/UserBookingCard';
import backgroundimg from '@/assets/images/bgimg1.png';


const UserBookings = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const [tab, setTab] = useState("All Bookings");

    // Initialize bookings with sample data
    useEffect(() => {
        setBookings([
            {
                booking_id: 1, 
                status: "Pending", 
                businessName: "Quick Logistics", 
                contact_number: "123-456-7890", 
                delivery_address: "101 Main St, Metropolis",
                pickup_location: "88 Speedway Blvd, Gotham",
                est_finish_date: "2023-10-10",
                truckAsset: { 
                    brand: "Nissan",
                    model: "AB123",
                    plate_number: "ABC 1234",
                },  
                container:{
                    quantity: "4",
                    container_type: "1 x 40",
                    item_type: "Building Materials",
                    item_weight: "20",
                },
                payments:{
                    container_charge: "10000.00",
                    service_charge: "1540.00",
                    distance_charge: "500.00",
                    total_balance: "12040.00",
                    paymentStatus: "Pending",
                },
                is_visible: 1
            },
            {
                booking_id: 2, 
                status: "Completed", 
                businessName: "Global Shipping Co.", 
                contact_number: "123-456-7890", 
                pickup_location: "100 South St, Metropolis", 
                delivery_address: "2020 Vision Rd, Star City", 
                est_finish_date: "2023-09-20",
                container:{
                    quantity: "2",
                    container_type: "2 x 20",
                    item_type: "Electronics",
                    item_weight: "10",
                },
                payments:{
                    container_charge: "8000.00",
                    service_charge: "1200.00",
                    distance_charge: "400.00",
                    total_balance: "9600.00",
                    paymentStatus: "Paid",
                },
                is_visible: 1
            },
            {
                booking_id: 3, 
                status: "Reserved", 
                businessName: "Fast Movers", 
                delivery_address: "88 Speedway Blvd, Gotham",
                pickup_location: "100 South St, Metropolis",  
                est_finish_date: "2023-11-15",
                container:{
                    quantity: "3",
                    container_type: "3 x 20",
                    item_type: "Furniture",
                    item_weight: "15",
                },
                payments:{
                    container_charge: "9000.00",
                    service_charge: "1350.00",
                    distance_charge: "450.00",
                    total_balance: "10800.00",
                    paymentStatus: "Pending",
                },
                is_visible: 1
            },
            {
                booking_id: 4, 
                status: "Cancelled", 
                businessName: "Reliable Transports", 
                delivery_address: "42 Galaxy Way, Central City",
                pickup_location: "100 South St, Metropolis",  
                est_finish_date: "2023-08-05",
                container:{
                    quantity: "3",
                    container_type: "3 x 20",
                    item_type: "Food",
                    item_weight: "15",
                },
                payments:{
                    container_charge: "9000.00",
                    service_charge: "1350.00",
                    distance_charge: "450.00",
                    total_balance: "10800.00",
                    paymentStatus: "Cancelled",
                }, 
                is_visible: 1
            },
            {
                booking_id: 5, 
                status: "Ongoing", 
                businessName: "Efficient Carriers", 
                contact_number: "123-456-7890", 
                delivery_address: "1234 Riverside Drive, Jump City", 
                pickup_location: "100 South St, Metropolis", 
                est_finish_date: "2023-08-18",
                truckAsset: { 
                    brand: "Volvo",
                    model: "FH16",
                    plate_number: "XYZ 1234",
                },
                container:{
                    quantity: "5",
                    container_type: "5 x 20",
                    item_type: "Automotive Parts",
                    item_weight: "25",
                },
                payments:{
                    container_charge: "11000.00",
                    service_charge: "1650.00",
                    distance_charge: "550.00",
                    total_balance: "13200.00",
                    paymentStatus: "Pending",
                },
                is_visible: 1
            }
        ]);
    }, []);

    // Filter bookings based on selected tab
    const filteredBookings = bookings.filter(booking => {
        if (tab === "All Bookings") return true; // Show all bookings
        return booking.status === tab; // Filter by status
    });

    const countBookingsByStatus = (status) => {
        return bookings.filter(booking => booking.status === status && booking.is_visible === 1).length;
    };

    // Pagination logic
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentBookings = filteredBookings.slice(firstItemIndex, lastItemIndex);

    const totalPageCount = Math.ceil(filteredBookings.length / itemsPerPage);
    
    const handleViewDetailsClick = (bookingId) => {
        // Find the booking data using the bookingId
        const bookingData = bookings.find(booking => booking.booking_id === bookingId);
        
        // Store the found booking data in localStorage or handle it as needed
        localStorage.setItem('currentBooking', JSON.stringify(bookingData));
        
        // Navigate to the booking details page
        navigate(`/userbookings/booking`);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-cover" style={{ backgroundImage: `url(${backgroundimg})` }}>
            <div className="container mx-auto p-8">
            {isLoggedIn ? (
            <>
            <div className="flex">
                    {/* Modified Sorting Tabs */}
                    <div className="w-1/5 bg-white rounded-lg shadow-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Sort my Bookings</h3>
                        <hr className="mb-4" />
                        {["All Bookings", "Pending", "Processing", "Reserved", "Ongoing", "Completed", "Cancelled"].map((status) => (
                            <div key={status} className={`flex justify-between items-center mb-2 p-2 rounded-lg ${tab === status ? 'bg-[#71BF82] bg-opacity-30' : 'bg-transparent'} transition-colors duration-150`}>
                            <button
                                onClick={() => setTab(status)}
                                className={`flex-grow text-left ${tab === status ? 'text-[#549462]' : 'text-black'} rounded-lg`}
                            >
                                {status}
                            </button>
                            <span className="ml-2 text-sm">{status === "All Bookings" ? bookings.length : countBookingsByStatus(status)}</span>
                        </div>
                        ))}
                    </div>
                    {/* Bookings Display with Heading and Divider */}
                    <div className="w-4/5 ml-20">
                        <h1 className="text-4xl font-bold mb-2">My Recent Bookings</h1>
                        <hr className="mb-4 bg-gray-400 h-[2px] w-[75%]" />
                        <div className="grid grid-cols-1 gap-4">
                            {currentBookings.map(booking => (
                                <UserBookingCard
                                    key={booking.booking_id}
                                    status={booking.status}
                                    bookingId={`Booking ID: ${booking.booking_id}`}
                                    businessName={booking.businessName}
                                    deliveryAddress={`Delivery Address: ${booking.delivery_address}`}
                                    estFinishDate={`Estimated Finish Date: ${booking.est_finish_date}`}
                                    handleDetailsClick={() => handleViewDetailsClick(booking.booking_id)}
                                />
                            ))}
                            {currentBookings.length === 0 && <p>No bookings found for this category.</p>}
                        </div>
                    </div>
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 m-1 rounded-md border bg-white hover:bg-gray-100"
                    >
                        &laquo;
                    </button>
                    {[...Array(totalPageCount).keys()].map(number => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number + 1)}
                            className={`px-3 py-1 m-1 rounded-md border ${currentPage === number + 1 ? 'bg-primarycolor text-white' : 'bg-white hover:bg-gray-100'}`}
                        >
                            {number + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPageCount))}
                        disabled={currentPage === totalPageCount}
                        className="px-3 py-1 m-1 rounded-md border bg-white hover:bg-gray-100"
                    >
                        &raquo;
                    </button>
                </div>
            </>
            ) : (
                <h1 className="font-bold text-alert">UNABLE TO VIEW CONTENTS. Only logged in users can view this page.</h1>
            )}
                

            </div>
        </div>
    )
}

export default UserBookings;