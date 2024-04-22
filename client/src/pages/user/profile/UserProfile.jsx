import React, { useState } from "react";
import { CgMenuRight } from 'react-icons/cg'; // For the menu icon
import ViewProfile from "@/components/settings/usersettings/ViewProfile";
import EditProfile from "@/components/settings/usersettings/EditProfile";
import Security from "@/components/settings/usersettings/Security";
import backgroundimg from '@/assets/images/bgimg1.png';
import defaultimage from '@/assets/images/defaultpfp.jpg';

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('viewProfile');
    const [userDetails, setUserDetails] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        contactNumber: '0912-345-6789',
        profileImage: defaultimage,
    });

    const selectTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-cover" style={{ backgroundImage: `url(${backgroundimg})` }}>
            <div className="container mx-auto p-8">
                <div className="flex flex-col md:flex-row">
                    {/* Mobile Menu Toggle */}
                    <section className="z-10 bg-white rounded-lg shadow-lg p-4 md:hidden flex justify-between items-center">
                        <button onClick={() => selectTab('viewProfile')} className={`flex-1 text-center p-2 rounded-md ${activeTab === 'viewProfile' ? 'bg-primarycolor text-white' : ''}`}>
                            View Profile
                        </button>
                        <button onClick={() => selectTab('editProfile')} className={`flex-1 text-center p-2 rounded-md ${activeTab === 'editProfile' ? 'bg-primarycolor text-white' : ''}`}>
                            Edit Profile
                        </button>
                        <button onClick={() => selectTab('security')} className={`flex-1 text-center p-2 rounded-md ${activeTab === 'security' ? 'bg-primarycolor text-white' : ''}`}>
                            Security
                        </button>
                    </section>

                    {/* Desktop Settings Tabs */}
                    <section className="hidden md:block w-1/5 bg-white rounded-lg shadow-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Settings Sections</h3>
                        <hr className="mb-4" />
                        <button onClick={() => selectTab('viewProfile')} className={`w-full text-left p-2 rounded-md ${activeTab === 'viewProfile' ? 'bg-primarycolor text-white' : ''}`}>
                            View Profile
                        </button>
                        <button onClick={() => selectTab('editProfile')} className={`w-full text-left p-2 rounded-md ${activeTab === 'editProfile' ? 'bg-primarycolor text-white' : ''}`}>
                            Edit Profile
                        </button>
                        <button onClick={() => selectTab('security')} className={`w-full text-left p-2 rounded-md ${activeTab === 'security' ? 'bg-primarycolor text-white' : ''}`}>
                            Security
                        </button>
                    </section>

                    {/* Content Area */}
                    <section className="flex-grow ml-0 md:ml-10 mt-10 md:mt-0 w-full">
                        <h1 className="text-2xl md:text-4xl font-bold mb-2">Account Settings</h1>
                        <hr className="mb-4 bg-gray-400 h-[2px]" />
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            {activeTab === 'viewProfile' && <ViewProfile userDetails={userDetails} />}
                            {activeTab === 'editProfile' && <EditProfile userDetails={userDetails} />}
                            {activeTab === 'security' && <Security />}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
