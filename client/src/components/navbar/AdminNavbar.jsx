import React, { useEffect, useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import logo from '@/assets/images/logo2.png';

const AdminNavbar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <nav className="bg-useradmin text-white p-4 flex justify-between items-center shadow-2xl">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="text-3xl ml-1 hover:text-primarycolor">
                    <FaBars />
                </button>
                <img src={logo} alt="Logo" className="h-10 ml-10" />
            </div>
            <div className="flex items-center">
                <div className="mr-6">
                    <FaUserCircle className="text-2xl cursor-pointer" />
                </div>

            </div>
        </nav>
    )
}

export default AdminNavbar;