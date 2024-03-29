import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('userType');
    setIsLoggedIn(!!loggedInStatus);
    setUserType(userType || '');
  }, []);

  const login = (userType) => {
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userType', userType);
    setIsLoggedIn(true);
    setUserType(userType);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType('');
  };

  return { isLoggedIn, userType, login, logout };
};

export default useAuth;
