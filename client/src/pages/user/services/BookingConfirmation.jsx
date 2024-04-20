import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CustomConfirmationModal from "@/components/modals/CustomConfirmationModal.jsx";
import { FaUser, FaPhone, FaEnvelope, FaMapMarker, FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import backgroundimg from '@/assets/images/bgimg1.png';

const BookingConfirmation = () => {
    const navigate = useNavigate();
    const [businessDetails, setBusinessDetails] = useState({});
    const [storedFormData, setStoredFormData] = useState({});
    // Initialize with 0 to keep it controlled
    const [averageRating, setAverageRating] = useState(0);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    useEffect(() => {
        const selectedTrucker = JSON.parse(localStorage.getItem('selectedTrucker'));
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (selectedTrucker && formData) {
            setBusinessDetails(selectedTrucker);
            setStoredFormData(formData);
            setAverageRating(selectedTrucker.averageRating || 0);
        } else {
            console.error('Booking or Trucker details not found');
            navigate('/services');
        }
    }, [navigate]);

    const handleConfirmBooking = () => {
        // Logic after confirmation goes here
        console.log('Confirmed Booking', { ...storedFormData, ...businessDetails });
        navigate('/userbookings');
    };

    return (
        <div className="animate-fade-in bg-image bg-cover h-full" style={{ backgroundImage: `url(${backgroundimg})` }}>
            {/* Back to Bookings Page */}
            <div className="mt-[1em] text-userclient bg-primarycolor">
                <h3
                    className="ml-[2%] py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => navigate('/services/choice/book')}
                >
                    <AiOutlineArrowLeft className="text-black mr-[1%] hover:text-white" />
                    Back to Booking Form
                </h3>
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-2 gap-8 p-4">
                    {/* First Column */}
                    <div className="ml-4">
                        {/* First Box */}
                        <div className="bg-white border-gray-400 rounded p-4 shadow-lg drop-shadow-lg">
                            <h1 className="font-bold mb-2">Selected Service Overview</h1>
                            <hr className="my-4 border-gray-400" />
                            <div className="flex items-center mb-4">
                                <img
                                    src={businessDetails.logo}
                                    alt="Business Logo"
                                    className="w-[40%] h-auto mr-4"
                                />
                                <div>
                                    <h1 className="text-[2em] font-bold mb-1">
                                        {businessDetails.business_name}
                                    </h1>
                                    {/* Business Details */}
                                    <div className="flex items-center mb-2">
                                        <FaUser className="mr-2" /> {businessDetails.contact_name}
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaPhone className="mr-2" /> {businessDetails.contact_number}
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaEnvelope className="mr-2" /> {businessDetails.email_address}
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaMapMarker className="mr-2" /> {businessDetails.address}
                                    </div>
                                </div>
                            </div>
                            {/* Divider Line */}
                            <hr className="my-4 border-gray-400" />
                            {/* Star Ratings */}
                            <div className="flex items-center mb-2">
                                <div className="bg-primarycolor text-usertrucker font-bold rounded-lg p-3">{businessDetails.averageRating}</div>
                                <div className="ml-4">
                                    <div className="text-left">Review Score</div>
                                    <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Second Column */}
                    <div>
                        <div className="bg-white border-gray-400 rounded p-4 shadow-lg drop-shadow-lg">
                            <h2 className="font-bold mb-4">Booking Price Breakdown</h2>
                            <hr className="my-4 border-gray-400" />
                            <div className="flex justify-between mb-2">
                                <div>
                                    <p>Price for {storedFormData.quantity} Containers</p>
                                    <p>Service Charge</p>
                                    <p>Distance Charge</p>
                                </div>
                                <div className="text-right">
                                    <p>{businessDetails.contrCharge * storedFormData.quantity}</p>
                                    <p>{businessDetails.servCharge}</p>
                                    <p>{businessDetails.distCharge}</p>
                                </div>
                            </div>
                            <hr className="my-2 border-gray-400" />
                            <div className="flex justify-between">
                                <p>Total Price</p>
                                <p className="font-bold">₱ {(storedFormData.quantity * businessDetails.contrCharge) + businessDetails.servCharge + businessDetails.distCharge}</p> {/* Sample Total Price */}
                            </div>
                        </div>
                        {/* Payment Method Selection */}
                        <div className="bg-white border-gray-400 rounded p-4 shadow-lg drop-shadow-lg mt-3">
                            <h2 className="font-bold mb-4">Select Payment Method</h2>
                            <hr className="my-4 border-gray-400" />
                            <div className="flex flex-col">
                                <label className="inline-flex items-center mt-3">
                                    <input type="radio" className="form-radio h-5 w-5 text-gray-600" name="paymentMethod" value="Cash" />
                                    <span className="ml-2 text-gray-700">Physical Cash</span>
                                </label>
                                <label className="inline-flex items-center mt-3">
                                    <input type="radio" className="form-radio h-5 w-5 text-gray-600" name="paymentMethod" value="GCash" />
                                    <span className="ml-2 text-gray-700">GCash</span>
                                </label>
                                <label className="inline-flex items-center mt-3">
                                    <input type="radio" className="form-radio h-5 w-5 text-gray-600" name="paymentMethod" value="Card" />
                                    <span className="ml-2 text-gray-700">Card</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="font-bold mb-4 mx-8 mt-1 text-[200%]">Confirm Inputted Details</h2>
                {/* Confirm Inputted Details Section and Buttons */}
                <div className="bg-white mt-1 border-gray-400 rounded-lg p-4 mx-8 shadow-lg drop-shadow-lg">

                    <table className="w-full border-collapse border">
                        <tbody>
                            {/* General Information */}
                            <tr>
                                <td colSpan="2" className="border-b border-r font-bold p-2 bg-usertrucker text-primarycolor">General Information</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-2 border-gray-300">Pickup Location:</td>
                                <td className="border-b p-2 border-gray-300">{storedFormData.pickup_location}</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-2 border-gray-300">Delivery Location:</td>
                                <td className="border-b p-2 border-gray-300">{storedFormData.delivery_address}</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-2 border-gray-300">Est. Finish Date:</td>
                                <td className="border-b p-2 border-gray-300">{storedFormData.est_finish_date}</td>
                            </tr>

                            {/* Container Information */}
                            <tr>
                                <td colSpan="2" className="border-b border-r font-bold p-2 bg-usertrucker text-primarycolor">Container Information</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-2 border-gray-300">Container Quantity:</td>
                                <td className="border-b p-2 border-gray-300">{storedFormData.quantity}</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-2 border-gray-300">Container Type:</td>
                                <td className="border-b p-2 border-gray-300">{storedFormData.container_size}</td>
                            </tr>
                            <tr>
                                <td className="border-b border-r p-2 border-gray-300">Container Weight:</td>
                                <td className="border-b p-2 border-gray-300">{storedFormData.weight}</td>
                            </tr>

                            {/* Item Information */}
                            {storedFormData.itemDetails?.map((item, index) => (
                                <tr key={index}>
                                    <td className="border-b border-r font-bold p-2 bg-usertrucker text-primarycolor">Item {index + 1} Details</td>
                                    <td className="border-b p-2 border-gray-300">
                                        Type: {item.item_type}, Quantity: {item.item_quantity}, Weight: {item.item_weight}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Buttons Section */}
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            className="bg-alert hover:bg-red-600 text-white p-2 rounded"
                            onClick={() => {
                                // Clear the stored form data from localStorage on cancel
                                localStorage.removeItem('formData');
                                navigate("/services");
                            }}
                        >
                            Cancel Booking <FaTimes className="inline ml-2 " />
                        </button>
                        <button
                            type="button"
                            className="bg-usertrucker hover:bg-primarycolor text-white hover:text-usertrucker p-2 rounded ml-2"
                            onClick={() => setShowConfirmationModal(true)}
                        >
                            Confirm Booking <FaCheck className="inline ml-2" />
                        </button>
                    </div>
                </div>
            </div>
            <CustomConfirmationModal
                isOpen={showConfirmationModal}
                onClose={() => setShowConfirmationModal(false)}
                title="Confirm Your Booking"
                description="Are you sure you want to proceed with this booking?"
                buttonOneText="Cancel"
                buttonOneOnClick={() => setShowConfirmationModal(false)}
                buttonTwoText="Confirm"
                buttonTwoOnClick={() => {
                    handleConfirmBooking();
                    setShowConfirmationModal(false); // Close modal after confirmation
                }}
            />
        </div>
    );
}

export default BookingConfirmation;