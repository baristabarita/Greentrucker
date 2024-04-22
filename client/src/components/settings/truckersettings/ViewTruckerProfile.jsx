import React from 'react';

const ViewTruckerProfile = ({ userProfile }) => {
    return (
        <div className="bg-white rounded-lg max-w-4xl mx-auto">
            <div className="px-4 py-5 sm:px-6 grid grid-cols-3 items-center">
                <img src={userProfile.profileImage} alt="Profile" className="col-span-1 rounded-full h-24 w-24 object-cover" />
                <div className="col-span-2 ml-4">
                    <h3 className="text-xl leading-6 font-medium text-gray-900">{`${userProfile.fname} ${userProfile.lname}`}</h3>
                    <p className='font-light text-sm text-gray-600'>{userProfile.companyName}</p>
                    <p className="mt-2 sm:w-[15%] w-full text-sm text-primarycolor border text-center rounded-lg shadow-custom">Active</p>
                </div>
            </div>

            {/* Second Row: Profile Details */}
            <h1 className='font-bold text-2xl my-4'>Personal Details</h1>
            <hr />
            <div className="divide-y divide-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">First Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.fname}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.lname}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.email}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.contactNumber}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.dob}</dd>
                    </div>
                </dl>
            </div>
            {/* Third Row: Company Details */}
            <h1 className='font-bold text-2xl my-4'>Company Details</h1>
            <hr />
            <div className="divide-y divide-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.companyName}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">Company Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userProfile.companyAddress}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default ViewTruckerProfile;
