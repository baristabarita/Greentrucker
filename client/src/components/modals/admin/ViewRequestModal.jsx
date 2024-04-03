import React, { useState } from 'react';
import defaultImage from '@/assets/images/defaultpfp.jpg';

const ViewRequestModal = ({ isOpen, onClose, request }) => {
    const [showProofOverlay, setShowProofOverlay] = useState(false);

    if (!isOpen || !request) return null;

    const { contact_name, company_name, email_address, address, status, sent_date } = request;

    const handleViewProofClick = () => {
        setShowProofOverlay(true); // Show overlay with the proof
    };

    const closeProofOverlay = () => {
        setShowProofOverlay(false); // Hide overlay
    };


    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 ${showProofOverlay ? 'z-40' : 'z-50'}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
                <div className="mt-3">
                    {/* Adjusted alignment to start for title */}
                    <h3 className="text-lg ml-6 leading-6 font-bold text-gray-900 text-left">Viewing Account Request Details</h3>
                    <hr className="my-4 border-t border-gray-600 opacity-75" />
                    <div className="mt-2 px-7 py-3">
                        <div className="grid grid-cols-2 gap-4">
                            <span className="text-left">Contact Name:</span>
                            <div className="border px-2 py-1 rounded">{contact_name}</div>
                            <span className="text-left">Company Name:</span>
                            <div className="border px-2 py-1 rounded">{company_name}</div>
                            <span className="text-left">Email Address:</span>
                            <div className="border px-2 py-1 rounded">{email_address}</div>
                            <span className="text-left">Address:</span>
                            <div className="border px-2 py-1 rounded">{address}</div>
                            <span className="text-left">Status:</span>
                            <div className="border px-2 py-1 rounded">{status}</div>
                            <span className="text-left">Sent Date:</span>
                            <div className="border px-2 py-1 rounded">{sent_date}</div>
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-600 opacity-75" />
                    <div className="mt-4 flex justify-between">
                        <h4 className="font-medium py-2 ml-8">Proof of Employment</h4>
                        <button className="px-4 py-2 mr-8 bg-primarycolor text-white rounded hover:bg-usertrucker transition ease-in-out duration-150" onClick={handleViewProofClick}>View Proof of Employment</button>
                    </div>
                    <hr className="my-4 border-t border-gray-600 opacity-75" />
                    <div className="flex justify-center items-center px-4 py-3 space-x-2">
                        {/* Adjust button alignments as necessary */}
                        {status === 'Pending' ? (
                            <>
                                <button className="px-4 py-2 bg-usertrucker text-white rounded hover:bg-primarycolor transition ease-in-out duration-150" onClick={() => {/* Confirm action */ }}>Confirm</button>
                                <button className="px-4 py-2 bg-alert text-white rounded hover:bg-red-700 transition ease-in-out duration-150" onClick={() => {/* Decline action */ }}>Decline</button>
                            </>
                        ) : null}
                        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition ease-in-out duration-150" onClick={onClose}>{status === 'Pending' ? 'Cancel' : 'Close'}</button>
                    </div>
                </div>
            </div>
            {showProofOverlay && (
                <div className="fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
                    <div className="relative">
                        <button onClick={closeProofOverlay} className="absolute top-0 right-0 text-userclient p-1 m-2 rounded-full focus:outline-none">X</button>
                        <img src={defaultImage} alt="Proof of Employment" className="max-w-full max-h-[80vh] rounded-md shadow" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewRequestModal;
