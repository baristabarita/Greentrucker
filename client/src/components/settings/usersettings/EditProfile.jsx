import React, { useState } from 'react';
import defaultimage from '../../../assets/images/defaultpfp.jpg';

const EditProfile = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        contactNumber: '0912-345-6789',
        profileImage: defaultimage, // Use the default image URL as the initial state
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    // Handle file input for profile image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
        setUserDetails(prevDetails => ({
            ...prevDetails,
            profileImage: imageUrl // Update the state with the new image URL
        }));
    };

    // Save changes
    const handleSaveChanges = () => {
        console.log(userDetails);
        // Here, implement the functionality to save changes
    };

    return (
        <div className="bg-white rounded-lg p-4 w-full mx-auto">
            <h2 className="text-center font-bold mb-4">Edit Profile</h2>
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
                <label htmlFor="profile-image-upload" className="cursor-pointer">
                    <img src={userDetails.profileImage || defaultimage} alt="Profile" className="rounded-full hover:border-4 hover:border-primarycolor h-24 w-24 object-cover mb-2" />
                    <input type="file" id="profile-image-upload" className="hidden" onChange={handleFileChange} />
                </label>
            </div>
            {/* Input Rows */}
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={userDetails.firstName}
                        onChange={handleChange}
                        className="mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={userDetails.lastName}
                        onChange={handleChange}
                        className="mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                        className="mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input
                        id="contactNumber"
                        type="text"
                        name="contactNumber"
                        value={userDetails.contactNumber}
                        onChange={handleChange}
                        className="mt-1 block bg-gray-100 w-full border border-gray-300 rounded py-2 px-3"
                    />
                </div>
            </div>
            {/* Save Changes Button */}
            <div className="flex justify-center">
                <button onClick={handleSaveChanges} className="bg-primarycolor hover:bg-usertrucker text-userclient hover:text-primarycolor font-bold py-2 px-4 rounded">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default EditProfile;
