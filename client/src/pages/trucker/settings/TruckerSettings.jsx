import React from 'react';
import SettingsContainer from '@/components/settings/truckersettings/SettingsContainer'; // Adjust the import path as necessary
import defaultImage from '@/assets/images/defaultpfp.jpg';
import { BsFillGearFill } from "react-icons/bs";

const TruckerSettings = () => {
  // Simulated user profile data
  const userProfile = {
    fname: "John",
    lname: "Doe",
    email: "johndoe@example.com",
    contactNumber: "123-456-7890",
    companyName: "Doe Logistics",
    username: "johnDoe2023",
    dob: "1990-01-01",
    companyAddress: "123 Main St, Anytown, AT 12345",
    password: 'Password123',
    newPassword: '',
    confirmNewPassword: '',
    profileImage: defaultImage
  };

  // Handler for saving profile changes (you will need to implement the actual logic)
  const onSaveProfile = (updatedProfile) => {
    console.log("Saving profile changes:", updatedProfile);
    // Implement your save logic here (e.g., API call to update the user profile)
  };

  // Handler for saving security settings (e.g., account verification, password change)
  const onSaveSecurity = (securityData) => {
    console.log("Saving security settings:", securityData);
    // Implement your save logic here (e.g., API call to update security settings)
  };

  // Handler for account verification (uploading proof of employment)
  const onAccountVerification = (file) => {
    console.log("Submitting proof of employment:", file);
    // Implement your upload logic here (e.g., API call to upload the file)
  };

  return (
    <div className="animate-fade-in p-5">
      <div className="flex items-center mb-4 text-primarycolor">
        <BsFillGearFill className="text-3xl mr-2" />
        <h2 className="text-3xl font-bold"> Account Settings</h2>
      </div>
      <SettingsContainer
        userProfile={userProfile}
        onSaveProfile={onSaveProfile}
        onSaveSecurity={onSaveSecurity}
        onAccountVerification={onAccountVerification}
      />
    </div>
  );
}

export default TruckerSettings;
