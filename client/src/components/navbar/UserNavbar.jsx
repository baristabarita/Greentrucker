import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUserCog } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import useAuth from '@/util/userAuthentication';
import logoicon from '@/assets/icons/greentrucker-logo2.png';
import defaultuser from '@/assets/images/defaultpfp.jpg';

const UserNavbar = () => {
    const { isLoggedIn, userType, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleUserMenu = () => {
        setIsUserOpen(!isUserOpen);
    }
    const handleLogout = () => {
        logout();
        window.location.reload(); // Reloads the page after logout
    };
    console.log("LOG STATUS: ", isLoggedIn);
    console.log("USERTYPE: ", userType);
    return (
        <nav className="bg-userclient fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoicon} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-1xl text-white font-semibold whitespace-nowrap">GreenTrucker</span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* If user is not logged in */}
                    {!isLoggedIn && (
                        <button onClick={() => navigate('/userlogin')} type="button" className="font-roboto text-black bg-secondarycolor hover:bg-secondarycolor focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-secondarycolor dark:hover:bg-secondarycolor dark:focus:ring-blue-800">Sign In</button>
                    )}
                    {/* If user is logged in */}
                    {isLoggedIn && (
                        <div className="relative">
                            <button type="button" onClick={toggleUserMenu} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={isOpen ? 'true' : 'false'} aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={defaultuser} alt="user photo" />
                            </button>
                            {/* Dropdown menu */}
                            {isUserOpen && (
                                <div className="absolute z-50 right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                                    <div className="py-1">
                                        <button onClick={() => navigate('/userprofile')} className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" role="menuitem">
                                            <FaUserCog className='mt-1 mx-3' />
                                            Account Settings
                                        </button>
                                        <button onClick={() => navigate('/userbookings')} className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" role="menuitem">
                                            <BiSolidBookAlt className='mt-1 mx-3' />
                                            My Bookings
                                        </button>
                                        <button onClick={handleLogout} className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" role="menuitem">
                                            <FiLogOut className='mt-1 mx-3' />
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {/* End of dropdown menu */}
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="font-roboto flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <div onClick={() => navigate('/')} className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${location.pathname === '/' ? 'text-white bg-primarycolor md:bg-transparent md:text-primarycolor md:dark:text-primarycolor' : 'text-white hover:bg-primarycolor md:hover:text-black'}`} aria-current="page">Home</div>
                        </li>
                        <li>
                            <div onClick={() => navigate('/services')} className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${location.pathname === '/services' || location.pathname === '/services/choice' || location.pathname === '/services/choice/book' || location.pathname === '/services/choice/book/confirm' ? 'text-white bg-primarycolor md:bg-transparent md:text-primarycolor md:dark:text-primarycolor' : 'text-white hover:bg-primarycolor md:hover:text-black'}`} aria-current="page">Services</div>
                        </li>
                        <li>
                            <div onClick={() => navigate('/userbookings')} className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${location.pathname === '/userbookings' || location.pathname === '/userbookings/booking' ? 'text-white bg-primarycolor md:bg-transparent md:text-primarycolor md:dark:text-primarycolor' : 'text-white hover:bg-primarycolor md:hover:text-black'}`} aria-current="page">My Bookings</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default UserNavbar;
