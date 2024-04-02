import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
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
    navigate("/");
  };

  return { isLoggedIn, userType, login, logout };
};

export default useAuth;
