import React, { useState } from 'react';

const ViewAccountLogModal = ({ isOpen, onClose, log }) => {

    if (!isOpen || !log) return null;

    const { id, username, email_address, user_type, company_name, status, date_registered, last_login } = log;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 ">
            <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden w-full max-w-xl">
                <div className="mt-3">
                    {/* Adjusted alignment to start for title */}
                    <h3 className="text-lg ml-6 leading-6 font-bold text-gray-900 text-left">Viewing Account ID: {id}</h3>
                    <hr className="my-4 border-t border-gray-600 opacity-75" />
                    <div className="mt-2 px-7 py-3">
                        <div className="grid grid-cols-2 gap-4">
                            <span className="font-semibold text-left">Username:</span>
                            <div className=" px-2 py-1 rounded">{username}</div>
                            <span className="font-semibold text-left">Email Address:</span>
                            <div className=" px-2 py-1 rounded">{email_address}</div>
                            <span className="font-semibold text-left">User Type:</span>
                            <div className=" px-2 py-1 rounded">{user_type}</div>
                            {status === 'Trucker' ? (
                                <>
                                    <span className="text-left">Company Name:</span>
                                    <div className="border px-2 py-1 rounded">{company_name}</div>
                                </>
                            ) : null}
                            <span className="font-semibold text-left">Date Registered:</span>
                            <div className=" px-2 py-1 rounded">{date_registered}</div>
                            <span className="font-semibold text-left">Last Logged In:</span>
                            <div className=" px-2 py-1 rounded">{last_login}</div>
                            <span className="font-semibold text-left">Status:</span>
                            <div className=" px-2 py-1 rounded">{status}</div>
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-600 opacity-75" />
                    <div className="flex justify-center items-center px-4 py-3 space-x-2">
                        {/* Adjust button alignments as necessary */}
                        <button className="font-roboto button text-userclient p-[0.7em] w-[45%] rounded-full border-solid border-2 border-userclient font-bold hover:bg-primarycolor hover:text-userclient transition-colors delay-250 duration-[3000] ease-in" onClick={onClose}>{status === 'Deleted' ? 'Cancel' : 'Close'}</button>
                        {status === 'Deleted' ? (
                            <>
                                <button className="button bg-alert text-white p-[0.5em] w-[45%] rounded-full hover:bg-red-500 font-bold transition-colors delay-250 duration-[3000] ease-in" onClick={onClose}>Delete Account</button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAccountLogModal;