// EditProfile.jsx
import React from 'react';
import defaultImage from '@/assets/images/defaultpfp.jpg'; 

const EditTruckerProfile = ({ profile, handleInputChange, handleImageChange }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Profile Image Column */}
            <div className="md:col-span-1 flex flex-col items-center mb-4 md:mb-0">
                <img src={profile.profileImage || defaultImage} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                <label className="cursor-pointer bg-primarycolor text-white hover:bg-usertrucker p-2 rounded-lg shadow-custom">
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
    );
};

export default EditTruckerProfile;
