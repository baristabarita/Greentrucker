import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ViewTruckerProfile from './ViewTruckerProfile';
import EditTruckerProfile from './EditTruckerProfile';
import SecuritySettings from './SecuritySettings';
import defaultImage from '@/assets/images/defaultpfp.jpg';

const SettingsContainer = ({ userProfile, onSaveProfile, onAccountVerification, onSaveSecurity }) => {
    const [activeTab, setActiveTab] = useState('viewProfile');
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

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Tab Switches */}
            <div className="flex justify-start mb-6 border-b">
                <button
                    className={`flex-1 py-2 ${activeTab === 'viewProfile' ? 'border-b-2 border-primarycolor text-usertrucker' : 'border-transparent text-gray-600'} hover:text-primarycolor focus:outline-none`}
                    onClick={() => setActiveTab('viewProfile')}
                >
                    View Profile
                </button>
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
            {/* View Profile State */}
            {activeTab === 'viewProfile' &&
                <ViewTruckerProfile
                    userProfile={profile}
                />
            }
            {/* Edit Profile State */}
            {activeTab === 'editProfile' && (
                <EditTruckerProfile
                    profile={profile}
                    handleInputChange={handleInputChange}
                    handleImageChange={handleImageChange}
                />
            )}

            {/* Security State */}
            {activeTab === 'security' && (
                <SecuritySettings
                    userProfile={userProfile}
                    newPassword={newPassword}
                    confirmNewPassword={confirmNewPassword}
                    handleCurrentPasswordChange={handleCurrentPasswordChange}
                    handleNewPasswordChange={handleNewPasswordChange}
                    handleConfirmNewPasswordChange={handleConfirmNewPasswordChange}
                    showCurrentPassword={showCurrentPassword}
                    showNewPassword={showNewPassword}
                    showConfirmNewPassword={showConfirmNewPassword}
                    setShowCurrentPassword={setShowCurrentPassword}
                    setShowNewPassword={setShowNewPassword}
                    setShowConfirmNewPassword={setShowConfirmNewPassword}
                />
            )}

            {/* Save Changes Button */}
            {/* Save Changes Button */}
            {(['editProfile', 'security'].includes(activeTab)) && (
                <div className="flex justify-end mt-6">
                    <button
                        className="px-4 py-2 bg-primarycolor text-white rounded-lg hover:bg-usertrucker shadow-custom"
                        onClick={activeTab === 'editProfile' ? onSaveProfile : onSaveSecurity}
                    >
                        Save Changes
                    </button>
                </div>
            )}

        </div>
    );
};

export default SettingsContainer;
