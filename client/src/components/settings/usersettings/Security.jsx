import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Security = () => {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords({
            ...passwords,
            [name]: value
        });
    };

    // Save changes
    const handleSaveChanges = () => {
        console.log(userDetails);
        // Here, implement the functionality to save changes
    };

    return (
        <div className="bg-white rounded-lg p-4 max-w-md text-left">
            <h2 className="font-bold mb-4">Security</h2>
            {/* Current Password */}
            <div className="mb-4">
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                <div className="flex">
                    <input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        name="currentPassword"
                        value={passwords.currentPassword}
                        onChange={handleChange}
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
                        value={passwords.newPassword}
                        onChange={handleChange}
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
                        value={passwords.confirmNewPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-l py-2 px-3"
                        required
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                        className="border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 py-1 px-4 rounded-r">
                        {showConfirmNewPassword ?  <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
            </div>
            {/* Save Changes Button */}
            <div className="flex justify-end">
                <button onClick={handleSaveChanges} className="bg-primarycolor hover:bg-usertrucker text-userclient hover:text-primarycolor font-bold py-2 px-4 rounded">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Security;
