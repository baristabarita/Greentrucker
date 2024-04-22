import React from 'react';

const ViewProfile = ({ userDetails }) => {
    return (
        <div className="bg-white rounded-lg divide-y divide-gray-200">
            {/* First Row: Profile Image, Name, and Status */}
            <div className="px-4 py-5 sm:px-6 flex items-center">
                <img src={userDetails.profileImage} alt="Profile" className="rounded-full h-16 w-16 object-cover" />
                <div className="ml-4">
                    <h3 className="text-xl leading-6 font-medium text-gray-900">{`${userDetails.firstName} ${userDetails.lastName}`}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-primarycolor border text-center rounded-lg shadow-custom">Active</p>
                </div>
            </div>
            {/* Second Row: Profile Details */}
            <div className="px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-bold text-gray-500">First Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.firstName}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-bold text-gray-500">Last Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.lastName}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.email}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.contactNumber}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default ViewProfile;
