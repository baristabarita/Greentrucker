import React, { useState } from 'react';

const AddNewAssetModal = ({ isOpen, onClose, onAddAsset }) => {
    const [assetType, setAssetType] = useState('Truck'); // Default to "Truck"
    const [assetDetails, setAssetDetails] = useState({
        name: '',
        brand: '',
        type: '',
        plateNumber: '',
        weight: '',
        measurements: ''
    });

    const resetForm = () => {
        setAssetType('Truck'); // Reset asset type to default value
        setAssetDetails({
            name: '',
            brand: '',
            type: '',
            plateNumber: '',
            weight: '',
            measurements: ''
        }); // Reset all input fields

    };
    // Handle changing input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssetDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddAsset(assetType, assetDetails);
        onClose(); // Close the modal after adding the asset
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
            <div className="bg-white rounded-lg p-5 max-w-md w-full">
                <h2 className="text-lg px-2 font-bold mb-4">Add New Asset</h2>

                {/* Asset Type Selection Buttons */}
                <div className="flex justify-between mb-4">
                    <p className='py-2 px-2 text-userclient font-bold'>ASSET TYPE</p>
                    <div>
                        <button
                            type="button"
                            className={`px-6 py-2 rounded-full mr-4 font-medium ${assetType === 'Truck' ? 'bg-primarycolor text-white' : 'border-solid border-2 border-gray-300 text-gray-800 hover:bg-primarycolor hover:text-white'} `}
                            onClick={() => setAssetType('Truck')}
                        >
                            Truck
                        </button>
                        <button
                            type="button"
                            className={`px-6 py-2 rounded-full font-medium ${assetType === 'Trailer' ? 'bg-primarycolor text-white' : 'border-solid border-2 border-gray-300 text-gray-800 hover:bg-primarycolor hover:text-white'} `}
                            onClick={() => setAssetType('Trailer')}
                        >
                            Trailer
                        </button>
                    </div>

                </div>
                <p className='text-gray-500 px-2 pb-3'>Selecting an asset type will have different inputs.</p>
                {/* Conditional Input Fields */}
                {assetType === 'Truck' ? (
                    <>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Truck Name</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Truck Name"
                                name="name"
                                value={assetDetails.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Truck Brand</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Truck Brand"
                                name="brand"
                                value={assetDetails.brand}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Truck Type</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Truck Type"
                                name="truck_type"
                                value={assetDetails.truck_type}
                                onChange={handleChange}
                            />

                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Plate Number</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Plate Number"
                                name="plateNumber"
                                value={assetDetails.plateNumber}
                                onChange={handleChange}
                            />
                        </div>

                    </>
                ) : (
                    <>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Trailer Type</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Trailer Type"
                                name="trailer_type"
                                value={assetDetails.trailer_type}
                                onChange={handleChange}
                            />

                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Trailer Weight</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Trailer Weight"
                                name="weight"
                                value={assetDetails.weight}
                                onChange={handleChange}
                            />

                        </div>
                        
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Measurements</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Trailer Measurements"
                                name="measurements"
                                value={assetDetails.measurements}
                                onChange={handleChange}
                            />

                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='px-2 py-3'>Plate Number</p>
                            <input
                                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                                placeholder="Enter Plate Number"
                                name="plateNumber"
                                value={assetDetails.plateNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}

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
                        Add Asset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewAssetModal;
