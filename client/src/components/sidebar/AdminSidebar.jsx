import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '@/util/userAuthentication';
import { FaBook, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsFillGearFill, BsCheckSquareFill  } from "react-icons/bs";

const AdminSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { isLoggedIn, userType, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (!isSidebarOpen) {
      toggleSidebar(); // Close sidebar when navigating if it's not open
    }
  };
  const handleLogout = () => {
    logout();
    window.location.reload(); // Reloads the page after logout
  };
  console.log("LOG STATUS: ", isLoggedIn);
  console.log("USERTYPE: ", userType);
  return (
    <div className={`h-screen fixed bg-useradmin text-[#B1B1B1] text-[1.2em]  font-semibold p-4 flex flex-col items-start ${isSidebarOpen ? 'w-60' : 'w-16'} transition-all duration-300 ease-in-out`}>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/admin/admindash' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/admin/admindash')}>
        <BiSolidDashboard className={`mr-2`} />
        {isSidebarOpen && 'Dashboard'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/admin/verifications' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/admin/verifications')}>
        <BsCheckSquareFill  className={`mr-2`} />
        {isSidebarOpen && 'Verifications'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/admin/accountlogs' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/admin/accountlogs')}>
        <FaUser className={`mr-2`} />
        {isSidebarOpen && 'Account Logs'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/admin/bookinglogs' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/admin/bookinglogs')}>
        <FaBook className={`mr-2`} />
        {isSidebarOpen && 'Booking Logs'}
      </div>
      <div className={`mb-5 cursor-pointer flex items-center ${location.pathname === '/admin/adminsettings' ? ' text-primarycolor rounded' : 'hover:text-primarycolor'}`} onClick={() => handleNavigation('/admin/adminsettings')}>
        <BsFillGearFill className={`mr-2`} />
        {isSidebarOpen && 'Settings'}
      </div>
      <div className={`fixed bottom-[5%] ml-2 w-[15%] cursor-pointer flex items-center hover:text-primarycolor`} onClick={handleLogout}>
        <FaSignOutAlt className={`mr-2 mt-1`} />
        {isSidebarOpen && 'Logout'}
      </div>
    </div>
  );
};

export default AdminSidebar;
