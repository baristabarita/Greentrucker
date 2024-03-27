import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserNavbar from '../navbar/UserNavbar.jsx';
import Footer from '../footer/Footer.jsx'

const UserLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-grow'>
                <div className='animate-fade-in'>
                    <UserNavbar />
                    <div className='font-roboto w-full mt-[6em]'>
                        <h1>UserLayout</h1>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout;