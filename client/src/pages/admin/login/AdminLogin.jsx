import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/util/userAuthentication.jsx";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import Footer from '@/components/footer/Footer.jsx';
import background from '@/assets/images/bgimg1.png';
import leftboximg from '@/assets/images/medium-shot-man-wearing-helmet.png';
import logo from '@/assets/icons/greentrucker-logo.png';

const AdminLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [emailAdd, setEmailAdd] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const closeError = () => {
        setError("");
    };

    const handleLogin = () => {
        // Assuming successful login for regular user
        login('admin');
        navigate("/admin/admindash");
    };

    const handleEmailChange = (e) => {
        setEmailAdd(e.target.value);
        setError(""); // Clear error on email change
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError(""); // Clear error on password change
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="h-screen flex items-center justify-center overflow-hidden font-roboto animate-fade-in">
                {/* Background Picture */}
                <img
                    className="absolute h-screen w-full object-cover"
                    src={background}
                    alt="background"
                />
                {error && (
                    <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-2 text-center flex justify-between items-center animate-slide-down">
                        <span>{error}</span>
                        <button onClick={closeError}>
                            <FiX className="text-white" />
                        </button>
                    </div>
                )}
                {/* login box */}
                <div className="relative flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-[4px_15px_10px_4px_gray] rounded-[7px_7px_7px_7px]">
                    {/* Left side */}
                    <div
                        className="leftBox flex flex-col items-center justify-center w-full md:w-1/3 p-10 rounded-[7px_0px_0px_7px]"
                        style={{ backgroundImage: `url(${leftboximg})`, backgroundSize: 'cover' }}
                    >
                    </div>


                    {/* Right Side */}
                    <div className="right flex flex-col items-center justify-center max-w-4xl md:w-2/3 p-10">
                        <div className="imgBox mb-2">
                            <img className="w-16" src={logo} alt="logo" />
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Welcome Admin!</h2>
                        <p>Please sign in to access your account.</p>
                        <form className="w-full max-w-sm">
                            <div className="mt-3 mb-2">
                                <input
                                    placeholder="Email Address"
                                    type="email"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                    id="emailAdd"
                                    name="emailAdd"
                                    value={emailAdd}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 relative">
                                <input
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"} // Toggle password visibility
                                    className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                {/* Button to toggle password visibility */}
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                            <div className="buttons flex flex-col items-center space-y-5">
                                <button
                                    type="submit"
                                    onClick={handleLogin}
                                    className="flex items-center justify-center button bg-primarycolor text-white p-[0.7em] w-full rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                                >
                                    Sign In
                                </button>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminLogin;