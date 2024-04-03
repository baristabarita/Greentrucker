import React, { useState } from 'react';

const SetChargesModal = ({ isOpen, onClose, onSetCharges }) => {
    const [chargesDetails, setChargesDetails] = useState({
        service_charge: '',
        distance_charge: '',
        container_charge: ''
    });

    const resetForm = () => {
        setChargesDetails({
            service_charge: '',
            distance_charge: '',
            container_charge: ''
        }); // Reset all input fields

    };
    // Handle changing input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setChargesDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSetCharges(chargesDetails);
        onClose(); // Close the modal after adding the asset
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
            <div className="bg-white rounded-lg p-5 max-w-md w-full">
                <h2 className="text-lg px-2 font-bold mb-4">Set your Booking Charges</h2>

                <p className='text-gray-500 px-2 pb-3'>Set your respective charges for your bookings</p>
                
                <div className='flex justify-between mb-2'>
                    <p className='px-2 py-3'>Charge for Service</p>
                    <input
                        className="form-input mt-1 block w-[50%] bg-gray-100 border border-gray-300 rounded-md p-2"
                        placeholder="0000.00"
                        name="service_charge"
                        value={chargesDetails.service_charge}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='px-2 py-3'>Charge per Distance</p>
                    <input
                        className="form-input mt-1 block w-[50%] bg-gray-100 border border-gray-300 rounded-md p-2"
                        placeholder="0000.00"
                        name="distance_charge"
                        value={chargesDetails.distance_charge}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='px-2 py-3'>Charge per Container</p>
                    <input
                        className="form-input mt-1 block w-[50%] bg-gray-100 border border-gray-300 rounded-md p-2"
                        placeholder="0000.00"
                        name="container_charge"
                        value={chargesDetails.container_charge}
                        onChange={handleChange}
                    />
                </div>


                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => {
                            resetForm();
                            onClose(); // Additionally close the modal
                        }}
                        className="font-roboto button text-usertrucker p-[0.7em] w-[45%] rounded-lg border-solid border-2 border-gray-300 font-bold hover:bg-usertrucker hover:text-primarycolor transition-colors delay-250 duration-[3000] ease-in"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="button bg-primarycolor text-white p-[0.5em] w-[45%] rounded-lg hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                    >
                        Save Charges
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetChargesModal;
