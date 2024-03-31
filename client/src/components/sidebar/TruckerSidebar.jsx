import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBook, FaTruck, FaDollarSign, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';

const TruckerSide = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (!isSidebarOpen) {
      toggleSidebar(); // Close sidebar when navigating if it's not open
    }
  };

  return (
    <div className={`h-screen fixed bg-[#011627] text-[#6488a5] text-[1.2em] font-semibold p-4 flex flex-col items-start ${isSidebarOpen ? 'w-60' : 'w-16'} transition-all duration-300 ease-in-out`}>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerdash' ? 'bg-gray-700 text-[#21a1da] p-2 rounded' : ''}`} onClick={() => handleNavigation('/trucker/truckerdash')}>
        <BiSolidDashboard className={`mr-2`} />
        {isSidebarOpen && 'Dashboard'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerbookings' ? 'bg-gray-700 text-[#21a1da] p-2 rounded' : ''}`} onClick={() => handleNavigation('/trucker/truckerbookings')}>
        <FaBook className={`mr-2`} />
        {isSidebarOpen && 'Bookings'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerassets' ? 'bg-gray-700 text-[#21a1da] p-2 rounded' : ''}`} onClick={() => handleNavigation('/trucker/truckerassets')}>
        <FaTruck className={`mr-2`} />
        {isSidebarOpen && 'Assets'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerpayments' ? 'bg-gray-700 text-[#21a1da] p-2 rounded' : ''}`} onClick={() => handleNavigation('/trucker/truckerpayments')}>
        <FaDollarSign className={`mr-2`} />
        {isSidebarOpen && 'Payments'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckersettings' ? 'bg-gray-700 text-[#21a1da] p-2 rounded' : ''}`} onClick={() => handleNavigation('/trucker/truckersettings')}>
        <FaUser className={`mr-2`} />
        {isSidebarOpen && 'Account Settings'}
      </div>
      <div className={`fixed bottom-[5%] ml-2 w-[15%] cursor-pointer flex items-center`} onClick={() => handleNavigation('/')}>
        <FaSignOutAlt className={`mr-2`} />
        {isSidebarOpen && 'Logout'}
      </div>
    </div>
  );
};

export default TruckerSide;
