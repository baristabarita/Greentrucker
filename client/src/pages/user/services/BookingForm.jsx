import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { BiSolidBookAdd } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import backgroundimg from '@/assets/images/bgimg1.png';

const BookingForm = () => {
    const navigate = useNavigate();
    const selectedTrucker = JSON.parse(localStorage.getItem('selectedTrucker'));
    console.log("Selected Trucker Details: ", selectedTrucker?.id);
    const [formData, setFormData] = useState({
        pickup_location: "",
        delivery_address: "",
        est_finish_date: "",
        quantity: 0,
        container_size: "",
        weight: ""
    });
    const [itemDetails, setItemDetails] = useState([{
        item_type: "",
        item_quantity: 0,
        item_weight: ""
    }]);
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            const parsedFormData = JSON.parse(savedFormData);
            setFormData({
                pickup_location: parsedFormData.pickup_location,
                delivery_address: parsedFormData.delivery_address,
                est_finish_date: parsedFormData.est_finish_date,
                quantity: parsedFormData.quantity,
                container_size: parsedFormData.container_size,
                weight: parsedFormData.weight
            });
            if (parsedFormData.itemDetails) {
                setItemDetails(parsedFormData.itemDetails);
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (value.trim() !== "") {
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };
    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = [...itemDetails];
        newItems[index] = { ...newItems[index], [name]: value };
        setItemDetails(newItems);
        if (value.trim() !== "") {
            const newErrors = { ...errors };
            delete newErrors[`item_${index}_${name}`];
            setErrors(newErrors);
        }
    };

    const addItemDetail = () => {
        // Simply add a new item detail without checking other inputs
        setItemDetails([...itemDetails, { item_type: "", item_quantity: 0, item_weight: "" }]);
    };
    const removeItemDetail = (index) => {
        const newItems = itemDetails.filter((_, i) => i !== index);
        setItemDetails(newItems);
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        // Validate fields
        if (!formData.pickup_location) newErrors.pickup_location = true;
        if (!formData.delivery_address) newErrors.delivery_address = true;
        if (!formData.est_finish_date) newErrors.est_finish_date = true;
        if (!formData.quantity) newErrors.quantity = true;
        if (!formData.container_size) newErrors.container_size = true;
        if (!formData.weight) newErrors.weight = true;

        itemDetails.forEach((item, index) => {
            if (!item.item_type) newErrors[`item_${index}_item_type`] = true;
            if (!item.item_quantity) newErrors[`item_${index}_item_quantity`] = true;
            if (!item.item_weight) newErrors[`item_${index}_item_weight`] = true;
        });

        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem('formData', JSON.stringify({ ...formData, itemDetails }));
            navigate('/services/choice/book/confirm');
        } else {
            setErrors(newErrors);
            setShowPopup(true);
        }
    };


    return (
        <div className="animate-fade-in font-roboto min-h-screen bg-image bg-cover" style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            {/* Back to Bookings Page */}
            <div className="mt-[1em] text-userclient bg-primarycolor">
                <h3
                    className="ml-[2%] py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => {
                        localStorage.removeItem('formData');
                        navigate('/services/choice')
                    }}
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
                        {showPopup && (
                        <div className="text-alert text-center font-bold">
                            Please fill in all required fields.
                        </div>
                    )}
                        {/* Container Details */}
                        <div className="mb-4 px-5">
                            <h1 className="text-userclient font-bold text-[1.2em]">Container Details</h1>
                            <hr className="my-4 border-gray-400" />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <label htmlFor="container_size" className="text-sm">Size (length x width x height)</label>
                                    <input
                                        type="text"
                                        id="container_size"
                                        name="container_size"
                                        value={formData.container_size}
                                        onChange={handleInputChange}
                                        className={`w-full bg-gray-100 rounded p-2 ${errors.container_size ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="ex. 20 ft. x  8ft. x 6 inches"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="quantity">No. of Containers</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={(handleInputChange)}
                                        className={`w-full bg-gray-100 rounded p-2 appearance-none ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
                                        min="0"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="weight">Weight per Container (lbs.)</label>
                                    <input
                                        type="text"
                                        id="weight"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                        className={`w-full bg-gray-100 rounded p-2 ${errors.weight ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="ex. 4,850 lbs."
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Item Details */}
                        <div className="mb-4 px-5">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-userclient text-xl font-bold">Item Details</h1>
                                <button
                                    onClick={addItemDetail}
                                    className="bg-primarycolor hover:bg-usertrucker text-white px-3 py-2 rounded shadow-custom"
                                >
                                    <BiSolidBookAdd className="inline mr-2 mb-1" />
                                    Add Items
                                </button>
                            </div>
                            <hr className="my-4 border-gray-400" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {itemDetails.map((item, index) => (
                                    <div key={index} className="bg-gray-100 p-4 border rounded">
                                        <div className="flex justify-between items-center mb-2">
                                            <h2 className="text-userclient font-semibold">Item {index + 1}</h2>
                                            {itemDetails.length > 1 && (
                                                <button onClick={() => removeItemDetail(index)} className="bg-alert hover:bg-red-600 text-white px-2 py-1 rounded">
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor={`item_type_${index}`}>Item Type</label>
                                            <select
                                                id={`item_type_${index}`}
                                                name="item_type"
                                                value={item.item_type}
                                                onChange={(e) => handleItemChange(index, e)}
                                                className={`w-full bg-white rounded p-2 ${errors[`item_${index}_item_type`] ? 'border-red-500' : 'border-gray-300'}`}
                                            >
                                                <option value="">Select an item type</option>
                                                <option value="Consumer Goods and Retail Products">Consumer Goods and Retail Products</option>
                                                <option value="Food and Beverages">Food and Beverages</option>
                                                <option value="Furniture and Home Decor">Furniture and Home Decor</option>
                                                <option value="Building Materials">Building Materials</option>
                                                <option value="Machinery and Industrial Equipment">Machinery and Industrial Equipment</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            <label htmlFor={`item_quantity_${index}`}>No. of Items / Units</label>
                                            <input
                                                type="number"
                                                id={`item_quantity_${index}`}
                                                name="item_quantity"
                                                value={item.item_quantity}
                                                onChange={(e) => handleItemChange(index, e)}
                                                className={`w-full bg-white rounded p-2 appearance-none ${errors[`item_${index}_item_quantity`] ? 'border-red-500' : 'border-gray-300'}`}
                                                min="0"
                                            />
                                            <label htmlFor={`item_weight_${index}`}>Weight per Item / Unit</label>
                                            <input
                                                type="text"
                                                id={`item_weight_${index}`}
                                                name="item_weight"
                                                value={item.item_weight}
                                                onChange={(e) => handleItemChange(index, e)}
                                                className={`w-full bg-white rounded p-2 ${errors[`item_${index}_item_weight`] ? 'border-red-500' : 'border-gray-300'}`}
                                            />
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Date and Location */}
                        <div className="flex flex-col gap-4 px-5 mb-4">
                            <h1 className="text-userclient font-bold text-[1.2em]">Date and Location Details</h1>
                            <hr className="border-gray-400" />
                            <div className="col-span-1 w-[35%]">
                                <label htmlFor="est_finish_date">Expected Finish Date</label>
                                <input
                                    type="date"
                                    id="est_finish_date"
                                    name="est_finish_date"
                                    value={formData.est_finish_date}
                                    onChange={handleInputChange}
                                    className={`w-full bg-gray-100 rounded p-2 ${errors.est_finish_date ? 'border-red-500' : 'border-gray-300'}`}
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
                                    className={`w-full bg-gray-100 rounded p-2 ${errors.pickup_location ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Dock 42, Port of Miami, Miami, FL"
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
                                    className={`w-full bg-gray-100 rounded p-2 ${errors.delivery_address ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="5678 Oak Avenue, Madison, WI"
                                />
                            </div>
                        </div>

                        <hr className="mt-4 border-gray-400" />
                        <div className="flex justify-center py-4">
                            <button
                                type="button"
                                className="bg-alert hover:bg-red-600 text-white p-2 rounded shadow-custom"
                                onClick={() => {
                                    localStorage.removeItem('formData');
                                    navigate("/services/choice");
                                }}
                            >
                                <FaTimes className="inline mr-2 mb-1" /> Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-usertrucker hover:bg-primarycolor text-white hover:text-usertrucker p-2 rounded ml-4 shadow-custom"
                            >
                                <FaCheck className="inline mr-2 mb-1" /> Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookingForm;