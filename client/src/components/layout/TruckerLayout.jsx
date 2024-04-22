import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TruckerNavbar from '../navbar/TruckerNavbar';
import TruckerSide from '../sidebar/TruckerSidebar';

const TruckerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
            if (window.innerWidth <= 640) {
                setIsSidebarOpen(false);  // Close sidebar when in mobile view
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='flex flex-col h-screen animate-fade-in overflow-hidden'>
            <TruckerNavbar toggleSidebar={toggleSidebar} />
            <div className='flex flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 transition-all duration-300 ease-in-out'>
                <TruckerSide isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} />
                <div className={`flex-1 transition-all duration-300 ease-in-out font-roboto ${
                    isMobile ? (isSidebarOpen ? 'ml-[20%] mr-[4%] w-[76%]' : 'ml-0 mr-0 w-full') :
                    (isSidebarOpen ? 'ml-[20%] mr-[4%] w-[76%]' : 'ml-[4%] mr-[2%] w-full')
                }`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default TruckerLayout;
