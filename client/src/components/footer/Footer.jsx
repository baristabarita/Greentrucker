import React from 'react';
import logo from '@/assets/images/logo1.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='flex flex-row justify-between items-center text-sm drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 bg-[#131313]'>
            <img src={logo} alt="Logo" className="h-8" />
            <p className="text-center text-gray-500">Copyright © {currentYear} All Rights reserved | DigiAid</p>
        </footer>
    )
}

export default Footer;
