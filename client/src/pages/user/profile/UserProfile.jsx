import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewProfile from "@/components/settings/usersettings/ViewProfile";
import EditProfile from "@/components/settings/usersettings/EditProfile";
import Security from "@/components/settings/usersettings/Security";
import backgroundimg from '@/assets/images/bgimg1.png';
import defaultimage from '@/assets/images/defaultpfp.jpg';

const UserProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('viewProfile');
    const [userDetails, setUserDetails] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        contactNumber: '0912-345-6789',
        profileImage: defaultimage, // Use the default image URL as the initial state
    });

    return (
        <div className="animate-fade-in min-h-screen bg-cover" style={{ backgroundImage: `url(${backgroundimg})` }}>
            <div className="container mx-auto p-8">
                <div className="flex">
                    {/* Settings Tabs */}
                    <div className="w-1/5 bg-white rounded-lg shadow-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Settings Sections</h3>
                        <hr className="mb-4" />
                        <button onClick={() => setActiveTab('viewProfile')} className={`w-full text-left p-2 rounded-full ${activeTab === 'viewProfile' ? 'bg-primarycolor font-bold' : ''}`}>
                            View Profile
                        </button>
                        <button onClick={() => setActiveTab('editProfile')} className={`w-full text-left p-2 rounded-full ${activeTab === 'editProfile' ? 'bg-primarycolor font-bold' : ''}`}>
                            Edit Profile
                        </button>
                        <button onClick={() => setActiveTab('security')} className={`w-full text-left p-2 rounded-full ${activeTab === 'security' ? 'bg-primarycolor font-bold' : ''}`}>
                            Security
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="w-4/5 ml-10">
                        <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
                        <hr className="mb-4 bg-gray-400 h-[2px] w-full" />
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            {activeTab === 'viewProfile' && <ViewProfile userDetails={userDetails} />}
                            {activeTab === 'editProfile' && <EditProfile />}
                            {activeTab === 'security' && <Security />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;