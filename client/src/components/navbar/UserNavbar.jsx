import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoicon from '../../assets/icons/greentrucker-logo2.png'

const UserNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <nav className="bg-userclient fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoicon} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-1xl text-white font-semibold whitespace-nowrap">GreenTrucker</span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-black bg-secondarycolor hover:bg-secondarycolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-secondarycolor dark:hover:bg-secondarycolor dark:focus:ring-blue-800">Sign In</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <div onClick={() => navigate('/')} className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${location.pathname === '/' ? 'text-white bg-primarycolor md:bg-transparent md:text-primarycolor md:dark:text-primarycolor' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primarycolor md:dark:hover:text-primarycolor dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current="page">Home</div>
                        </li>
                        <li>
                            <div onClick={() => navigate('/services')} className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${location.pathname === '/services' ? 'text-white bg-primarycolor md:bg-transparent md:text-primarycolor md:dark:text-primarycolor' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primarycolor md:dark:hover:text-primarycolor dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current="page">Services</div>
                        </li>
                        <li>
                            <div onClick={() => navigate('/userbookings')} className={`block py-2 px-3 rounded md:p-0 cursor-pointer ${location.pathname === '/userbookings' ? 'text-white bg-primarycolor md:bg-transparent md:text-primarycolor md:dark:text-primarycolor' : 'text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primarycolor md:dark:hover:text-primarycolor dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current="page">My Bookings</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default UserNavbar;
