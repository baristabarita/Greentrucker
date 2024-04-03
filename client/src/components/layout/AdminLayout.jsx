import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AdminSidebar from '../sidebar/AdminSidebar';
import AdminNavbar from '../navbar/AdminNavbar';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

   return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <AdminNavbar toggleSidebar={toggleSidebar} />
            <div className='flex flex-1 overflow-x-hidden overflow-y-auto bg-userclient transition-all duration-300 ease-in-out'>
                <AdminSidebar isSidebarOpen={isSidebarOpen} />
                <div
                    className={`flex-1 transition-all duration-300 ease-in-out font-roboto ${isSidebarOpen ? 'ml-[20%] mr-[4%] w-[76%]' : 'ml-[7%] mr-[4%] w-[81%]'
                        }`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;