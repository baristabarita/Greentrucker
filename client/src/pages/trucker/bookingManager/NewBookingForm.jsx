import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomConfirmationModal from "../../../components/modals/CustomConfirmationModal";
import { FaPlus , FaTimes } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const NewBookingForm = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [formData, setFormData] = useState({
        client_name: "",
        email_address: "",
        contact_number: "",
        pickup_location: "",
        delivery_address: "",
        est_finish_date: "",
        quantity: 0,
        container_type: "",
        weight: "",
        item_quantity: 0,
        item_type: "",
        item_weight: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleConfirmBooking = () => {
        // Logic after confirmation goes here
        navigate('/trucker/truckerbookings');
    };
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check for empty fields in formData
        const isFormComplete = Object.values(formData).every(value => {
            // Check if the value is not empty
            return value !== "" && value !== 0;
        });

        if (isFormComplete) {
            setShowConfirmationModal(true);
        } else {
            setShowPopup(true); // Show popup if form is incomplete
        }
    }
    return (
        <div className="animate-fade-in font-roboto">
            {/* Back to Bookings Page */}

            <div className="container w-[60%] mx-auto px-5 py-4">
                <form onSubmit={handleFormSubmit}>
                    <div className="bg-white rounded-lg shadow-lg drop-shadow-lg">
                        <h1 className="text-2xl font-bold text-center mt-0 rounded-t-lg bg-usertrucker text-primarycolor p-4">Creating New Booking</h1>
                        {/* Client Details */}
                        <div className="flex flex-col gap-4 px-5 mt-4 mb-5">
                            <h1 className="text-userclient text-[1.2em]">Client Details</h1>
                            <hr className="border-gray-400" />
                            <div className="col-span-1">
                                <label htmlFor="client_name">Client Name</label>
                                <input
                                    type="text"
                                    id="client_name"
                                    name="client_name"
                                    value={formData.client_name}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="email_address">Email Address</label>
                                <input
                                    type="text"
                                    id="email_address"
                                    name="email_address"
                                    value={formData.email_address}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="contact_number">Contact Number</label>
                                <input
                                    type="text"
                                    id="contact_number"
                                    name="contact_number"
                                    value={formData.contact_number}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                        </div>

                        {/* Container and Item Details */}
                        <div className="grid grid-cols-2 gap-4 mb-4 px-5">
                            <div className="col-span-1 px-4 border-r-2 ">
                                <h1 className="text-userclient text-[1.2em]">Container Details</h1>
                                <hr className="my-4 border-gray-400" />
                                <label htmlFor="container_type">Container Size (ft.)</label>
                                <input
                                    type="text"
                                    id="container_type"
                                    name="container_type"
                                    value={formData.container_type}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                                    required
                                />

                                <label htmlFor="quantity"># of Containers</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />

                                <label htmlFor="weight">Weight per Container</label>
                                <input
                                    type="text"
                                    id="weight"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    placeholder="Format: XX.X kg"
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />
                            </div>

                            <div className="col-span-1 px-4">
                                <h1 className="text-userclient text-[1.2em]">Item Details</h1>
                                <hr className="my-4 border-gray-400" />

                                <label htmlFor="item_type">Item Type</label>
                                <select
                                    id="item_type"
                                    name="item_type"
                                    value={formData.item_type}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                >
                                    <option value="">Select an item type</option>
                                    <option value="Consumer Goods and Retail Products">Consumer Goods and Retail Products</option>
                                    <option value="Food and Beverages">Food and Beverages</option>
                                    <option value="Furniture and Home Decor">Furniture and Home Decor</option>
                                    <option value="Building Materials">Building Materials</option>
                                    <option value="Machinery and Industrial Equipment">Machinery and Industrial Equipment</option>
                                    <option value="Others">Others</option>
                                </select>

                                <label htmlFor="item_quantity"># of Items per Container</label>
                                <input
                                    type="number"
                                    id="item_quantity"
                                    name="item_quantity"
                                    value={formData.item_quantity}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />


                                <label htmlFor="item_weight">Weight per Item</label>
                                <input
                                    type="text"
                                    id="item_weight"
                                    name="item_weight"
                                    value={formData.item_weight}
                                    onChange={handleInputChange}
                                    placeholder="Format: XX.X kg"
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />
                            </div>
                        </div>
                        {/* Date and Location Details */}
                        <div className="flex flex-col gap-4 px-5 mb-4">
                            <h1 className="text-userclient text-[1.2em]">Date and Location Details</h1>
                            <hr className="border-gray-400" />
                            <div className="col-span-1 w-[35%]">

                                <label htmlFor="est_finish_date">Expected Finish Date</label>
                                <input
                                    type="date"
                                    id="est_finish_date"
                                    name="est_finish_date"
                                    value={formData.est_finish_date}
                                    onChange={handleInputChange}
                                    placeholder="Format: MM/DD/YY"
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="pickup_location">Pick Up Location</label>
                                <input
                                    type="text"
                                    id="pickup_location"
                                    name="pickup_location"
                                    value={formData.pickup_location}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300  rounded p-2"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="delivery_address">Delivery Location</label>
                                <input
                                    type="text"
                                    id="delivery_address"
                                    name="delivery_address"
                                    value={formData.delivery_address}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                        </div>
                        <hr className="mt-4 border-gray-400" />

                        {/* Buttons */}
                        <div className="flex justify-center py-4">
                            <button
                                type="submit"
                                className="bg-secondarycolor hover:bg-usertrucker text-userclient hover:text-white p-2 rounded"
                            >
                                Submit <FaPlus  className="inline ml-2" />
                            </button>
                            <button
                                type="button"
                                className="bg-alert hover:bg-red-600 text-white p-2 rounded ml-4"
                                onClick={() => {
                                    navigate("/trucker/truckerbookings");
                                }}
                            >
                                Cancel <FaTimes  className="inline ml-2" />
                            </button>
                        </div>
                    </div>
                    {showPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black backdrop-blur">
                            <div className="bg-white p-8 rounded shadow-lg flex items-center justify-between">
                                <p>Please fill in all required fields.</p>
                                <button
                                    onClick={closePopup}
                                >
                                    <FiX className="text-black hover:text-[#2d7df6] ml-2" />
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
            <CustomConfirmationModal
                isOpen={showConfirmationModal}
                onClose={() => setShowConfirmationModal(false)}
                title="Adding New Booking Record"
                description="Are you sure you want to add this new booking?"
                buttonOneText="Cancel"
                buttonOneOnClick={() => setShowConfirmationModal(false)}
                buttonTwoText="Confirm"
                buttonTwoOnClick={() => {
                    handleConfirmBooking();
                    setShowConfirmationModal(false); // Close modal after confirmation
                }}
            />
        </div>
    )
}

export default NewBookingForm;