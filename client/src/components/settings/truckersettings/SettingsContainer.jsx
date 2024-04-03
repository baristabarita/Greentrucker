import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import defaultImage from '@/assets/images/defaultpfp.jpg';

const SettingsContainer = ({ userProfile, onSaveProfile, onAccountVerification, onSaveSecurity }) => {
    const [activeTab, setActiveTab] = useState('editProfile');
    const [profile, setProfile] = useState(userProfile);
    const [verificationFile, setVerificationFile] = useState(null);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };
    // For current password
    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    // For new password
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    // For confirm new password
    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
    };
    const handleImageChange = (e) => {
        // Assuming you're handling the image as a base64 string for simplicity
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile({ ...profile, profileImage: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleVerificationFileChange = (event) => {
        setVerificationFile(event.target.files[0]); // Set the selected file
    };

    const handleAccountVerificationSubmit = () => {
        // Example function to handle account verification
        // You might want to implement the actual upload logic here
        // For demonstration, we'll just log the file
        console.log('Submitting file for verification:', verificationFile);
        onAccountVerification(verificationFile); // Call prop function to handle verification
    };
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Tab Switches */}
            <div className="flex justify-start mb-6 border-b">
                <button
                    className={`flex-1 py-2 ${activeTab === 'editProfile' ? 'border-b-2 border-primarycolor text-usertrucker' : 'border-transparent text-gray-600'} hover:text-primarycolor focus:outline-none`}
                    onClick={() => setActiveTab('editProfile')}
                >
                    Edit Profile
                </button>
                <button
                    className={`flex-1 py-2 ${activeTab === 'security' ? 'border-b-2 border-primarycolor text-usertruckerborder-primarycolor text-usertrucker' : 'border-transparent text-gray-600'} hover:text-primarycolor focus:outline-none`}
                    onClick={() => setActiveTab('security')}
                >
                    Security
                </button>
            </div>

            {/* Edit Profile State */}
            {activeTab === 'editProfile' && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* Profile Image Column */}
                    <div className="md:col-span-1 flex flex-col items-center mb-4 md:mb-0">
                        <img src={profile.profileImage || defaultImage} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                        <label className="cursor-pointer bg-primarycolor text-white hover:bg-usertrucker p-2 rounded-lg">
                            Upload New Image
                            <input type="file" className="hidden" onChange={handleImageChange} />
                        </label>
                    </div>

                    {/* Personal and Account Information Columns */}
                    <div className="md:col-span-2">
                        {/* Personal Information */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="First Name"
                                name="fname"
                                value={profile.fname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="Last Name"
                                name="lname"
                                value={profile.lname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="Email Address"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="Contact Number"
                                name="contactNumber"
                                value={profile.contactNumber}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Account Information */}
                    <div className='md:col-span-2 space-y-4'>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="Date of Birth"
                                name="dob"
                                value={profile.dob}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="Company Name"
                                name="companyName"
                                value={profile.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">Company Address</label>
                            <input
                                className="form-input mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                                placeholder="Company Address"
                                name="companyAddress"
                                value={profile.companyAddress}
                                onChange={handleInputChange}
                            />
                        </div>

                    </div>

                </div>

            )}
            {/* Security State */}
            {activeTab === 'security' && (
                <div>
                    {/* Account Verification */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg">Account Verification</h3>
                        <p className='mb-4'>Upload a proof of employment to have your account verified.</p>
                        <input
                            type="file"
                            onChange={handleVerificationFileChange}
                            className="mb-4 w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-usertrucker
                         hover:file:bg-blue-100"
                        />
                        <button
                            onClick={handleAccountVerificationSubmit}
                            className="px-4 py-2 bg-usertrucker text-white rounded-lg hover:bg-primarycolor"
                        >
                            Submit Verification
                        </button>
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
                                    className="ml-2 flex items-center justify-center px-4 border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-r">
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
                                    className="border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 py-2 px-4 rounded-r">
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
                                    className="border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 py-1 px-4 rounded-r">
                                    {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* Save Changes Button */}
            <div className="flex justify-end mt-6">
                <button
                    className="px-4 py-2 bg-primarycolor text-white rounded-lg hover:bg-usertrucker"
                    onClick={activeTab === 'editProfile' ? onSaveProfile : onSaveSecurity}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default SettingsContainer;
