import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import backgroundimg from '../../../assets/images/bgimg1.png';

const BookingForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const selectedTrucker = JSON.parse(localStorage.getItem('selectedTrucker'));
    console.log("Selected Trucker Details: ", selectedTrucker?.id);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Check for empty fields in formData
        const isFormComplete = Object.values(formData).every(value => {
            // Check if the value is not empty; customize this as needed (e.g., checking for non-zero length)
            return value !== "" && value !== 0;
        });
    
        if (isFormComplete) {
            localStorage.setItem('formData', JSON.stringify(formData));
            navigate('/services/choice/book/confirm');
        } else {
            setShowPopup(true); // Show popup if form is incomplete
        }
    }
    return (
        <div className="animate-fade-in font-roboto min-h-screen bg-image bg-cover" style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
             {/* Back to Bookings Page */}
             <div className="mt-[1em] text-userclient bg-primarycolor">
                <h3
                    className="ml-[2%] py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => navigate('/services/choice/view')}
                >
                    <AiOutlineArrowLeft className="text-black mr-[1%] hover:text-white" />
                    Back to Viewing Selected Service
                </h3>
            </div>
            <div className="container w-[60%] mx-auto px-5 py-4">
                <form onSubmit={handleFormSubmit}>
                    <div className="bg-white rounded-lg shadow-lg drop-shadow-lg">
                        <h1 className="text-2xl font-bold text-center mt-0 rounded-t-lg bg-usertrucker text-primarycolor p-4">Booking Services for {selectedTrucker?.business_name}</h1>
                        <hr className="mb-4 border-gray-400" />
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
                        <div className="flex justify-center py-4">
                            <button
                                type="submit"
                                className="bg-usertrucker hover:bg-primarycolor text-white hover:text-usertrucker p-2 rounded"
                            >
                                Submit <FaCheck className="inline ml-2" />
                            </button>
                            <button
                                type="button"
                                className="bg-alert hover:bg-red-600 text-white p-2 rounded ml-4"
                                onClick={() => {
                                    navigate("/services/choice/view");
                                }}
                            >
                                Cancel <FaTimes className="inline ml-2" />
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
        </div>
    )
}

export default BookingForm;