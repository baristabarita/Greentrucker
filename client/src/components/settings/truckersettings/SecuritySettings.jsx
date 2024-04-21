import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SecuritySettings = ({ userProfile, newPassword, confirmNewPassword, handleCurrentPasswordChange, handleNewPasswordChange, handleConfirmNewPasswordChange, showCurrentPassword, showNewPassword, showConfirmNewPassword, setShowCurrentPassword, setShowNewPassword, setShowConfirmNewPassword }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);  // Set the file state
        } else {
            setFile(null);  // Clear the file state if no file is selected
        }
    };
    const handleSubmitVerification = () => {
        if (file) {
            console.log('Submitting file for verification:', file);
            // Implement the actual upload logic here
        }
    };
    return (
        <div>
            {/* Account Verification */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg">Account Verification</h3>
                <p className='mb-4'>Upload a proof of employment to have your account verified.</p>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-mdfile:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-usertrucker hover:file:bg-blue-100"
                />
                 {file && (
                    <button
                        onClick={handleSubmitVerification}
                        className="px-4 py-2 bg-usertrucker text-white rounded-lg hover:bg-primarycolor shadow-custom"
                    >
                        Submit Verification
                    </button>
                )}
            </div>

            {/* Change Password */}
            <div className="mb-6 w-[50%]">
                <h3 className="font-semibold text-lg mb-4">Change Password</h3>

                {/* Current Password */}
                <div className="mb-4">
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                    <div className="flex">
                        <input
                            id="currentPassword"
                            type={showCurrentPassword ? "text" : "password"}
                            name="currentPassword"
                            value={userProfile.password}
                            onChange={handleCurrentPasswordChange}
                            className="mt-1 block w-full border border-gray-300 rounded-l py-2 px-3"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="ml-2 flex items-center justify-center px-4 border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-r"
                        >
                            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                {/* New Password */}
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                    <div className="flex">
                        <input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            name="newPassword"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            className="mt-1 block w-full border border-gray-300 rounded-l py-2 px-3"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="ml-2 border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-r"
                        >
                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                {/* Confirm New Password */}
                <div className="mb-4">
                    <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <div className="flex">
                        <input
                            id="confirmNewPassword"
                            type={showConfirmNewPassword ? "text" : "password"}
                            name="confirmNewPassword"
                            value={confirmNewPassword}
                            onChange={handleConfirmNewPasswordChange}
                            className="mt-1 block w-full border border-gray-300 rounded-l py-2 px-3"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                            className="ml-2 border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 py-1 px-4 rounded-r"
                        >
                            {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;
