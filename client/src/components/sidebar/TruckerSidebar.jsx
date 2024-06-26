import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '@/util/userAuthentication';
import { FaBook, FaTruck, FaDollarSign, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';

const TruckerSide = ({ isSidebarOpen, toggleSidebar, isMobile }) => {
  const { isLoggedIn, userType, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile && isSidebarOpen) {
      toggleSidebar(); // Automatically close sidebar after navigation in mobile view
    }
  };

  const handleLogout = () => {
    logout();
    window.location.reload(); // Reloads the page after logout
  };
  console.log("LOG STATUS: ", isLoggedIn);
  console.log("USERTYPE: ", userType);
  return (
    <div className={`fixed top-[64px] left-0 h-[calc(100%-64px)] z-10 bg-usertrucker text-[#B1B1B1] text-[1.2em] font-semibold p-4 flex flex-col items-start transition-all duration-300 ease-in-out ${
      isMobile ? (isSidebarOpen ? 'w-60' : 'w-0 hidden') : (isSidebarOpen ? 'w-60' : 'w-16')
  }`}>
        <>
          <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerdash' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/trucker/truckerdash')}>
            <BiSolidDashboard className={`mr-2`} />
            {isSidebarOpen && 'Dashboard'}
          </div>
          <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerbookings' || location.pathname === '/trucker/truckerbookings/booking' || location.pathname === '/trucker/truckerbookings/bookingform' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/trucker/truckerbookings')}>
            <FaBook className={`mr-2`} />
            {isSidebarOpen && 'Bookings'}
          </div>
          <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerassets' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/trucker/truckerassets')}>
            <FaTruck className={`mr-2`} />
            {isSidebarOpen && 'Assets'}
          </div>
          <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckerpayments' || location.pathname === '/trucker/truckerpayments/payment' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/trucker/truckerpayments')}>
            <FaDollarSign className={`mr-2`} />
            {isSidebarOpen && 'Payments'}
          </div>
          <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/trucker/truckersettings' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/trucker/truckersettings')}>
            <FaUser className={`mr-2`} />
            {isSidebarOpen && 'Account Settings'}
          </div>
          <div className={`fixed bottom-[5%] ml-2 w-[15%] cursor-pointer flex items-center hover:text-primarycolor`} onClick={handleLogout}>
            <FaSignOutAlt className={`mr-2 mt-1`} />
            {isSidebarOpen && 'Logout'}
          </div>
        </>

    </div>
  );
};

export default TruckerSide;