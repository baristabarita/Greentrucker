import React, { useEffect, useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/images/logo2.png';

const TruckerNavbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [username, setUsername] = useState("");
  const storedTruckerUser = localStorage.getItem('truckerUserDetails'); //to be used later
  const [shortLet, setShortLet] = useState("");
/*
  useEffect(() => {
    if(storedTruckerUser){
      setUsername(JSON.parse(storedTruckerUser).truckerOwner.split(' ')[0]);
    }

    if(username){
      getShortLetter(username);
    }
  }, [username]);

  
  const getShortLetter = (name) => {
    const nameParts = name.split(' ');
    if (nameParts.length === 1) {
      setShortLet(nameParts[0].charAt(0).toUpperCase());
    } else if (nameParts.length > 1) {
      setShortLet(nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase());
    }
  };

*/

  return (
    <nav className="bg-[#011627] text-white p-4 flex justify-between items-center shadow-2xl">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-3xl ml-1">
          <FaBars />
        </button>
        <img src={logo} alt="Logo" className="h-10 ml-10" />
      </div>
      <div className="flex items-center">
      <p className='ml-[0.8rem] mr-2 text-[1.1em] xs:max-sm:text-[1em] xs:max-sm:ml-[0.7em] xl:max-2xl:text-[0.9em] text-[#21a2da] font-medium'>{username}</p>
        
        <div className="mr-6">
          <FaUserCircle className="text-2xl cursor-pointer" />
        </div>
      
      </div>
    </nav>
  );
};

export default TruckerNavbar;
