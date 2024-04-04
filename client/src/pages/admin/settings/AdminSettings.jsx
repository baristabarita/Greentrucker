import React from 'react';
import AdminSettingsContainer from '@/components/settings/adminsettings/AdminSettingsContainer';
import defaultImage from '@/assets/images/defaultpfp.jpg';
import { BsFillGearFill } from "react-icons/bs";

const AdminSettings = () => {
    const userProfile = {
        fname: "Mark",
        lname: "Fischbach",
        email: "admin1@example.com",
        contactNumber: "123-456-7890",
        companyName: "Digi Aid",
        username: "admin12024",
        dob: "1990-01-01",
        companyAddress: "123 Main St, Anytown, AT 12345",
        password: 'Password123',
        newPassword: '',
        confirmNewPassword: '',
        profileImage: defaultImage
    };
    const onSaveProfile = (updatedProfile) => {
        console.log("Saving profile changes:", updatedProfile);
    }
    const onSaveSecurity = (securityData) => {
        console.log("Saving security settings:", securityData);
    }
    return (
        <div className="animate-fade-in p-5">
            <div className="flex items-center mb-4 text-primarycolor">
                <BsFillGearFill className="text-3xl mr-2" />
                <h2 className="text-3xl font-bold">Admin Account Settings</h2>
            </div>
            <AdminSettingsContainer
                userProfile={userProfile}
                onSaveProfile={onSaveProfile}
                onSaveSecurity={onSaveSecurity}
            />
        </div>
    )
}

export default AdminSettings;