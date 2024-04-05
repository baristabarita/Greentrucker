import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TruckerNavbar from '../navbar/TruckerNavbar';
import TruckerSide from '../sidebar/TruckerSidebar';

const TruckerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex flex-col h-screen animate-fade-in overflow-hidden'>
            <TruckerNavbar toggleSidebar={toggleSidebar} />
            <div className='flex flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 transition-all duration-300 ease-in-out'>
                <TruckerSide isSidebarOpen={isSidebarOpen} />
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

export default TruckerLayout;