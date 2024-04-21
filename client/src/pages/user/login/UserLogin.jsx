import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/util/userAuthentication.jsx";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import Footer from '@/components/footer/Footer.jsx';
import background from '@/assets/images/bgimg1.png';
import leftboximg from '@/assets/images/medium-shot-man-wearing-helmet.png';
import logo from '@/assets/icons/greentrucker-logo.png';

const UserLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [emailAdd, setEmailAdd] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!emailAdd.trim()) {
            newErrors.emailAdd = "Email address is required";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            login('user');
            navigate("/");
        }
    };

    const handleEmailChange = (e) => {
        setEmailAdd(e.target.value);
        if (errors.emailAdd) {
            const newErrors = { ...errors };
            delete newErrors.emailAdd;
            setErrors(newErrors);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            const newErrors = { ...errors };
            delete newErrors.password;
            setErrors(newErrors);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleGuest = () => {
        setErrors("");
        navigate("/");
    };

    const closeError = () => {
        setErrors("");
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
                {/* login box */}
                <div className="relative flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-[4px_15px_10px_4px_gray] rounded-[7px_7px_7px_7px]">
                    {/* Left side */}
                    <div
                        className="leftBox flex flex-col items-center justify-center w-full md:w-1/3 p-10 rounded-[7px_0px_0px_7px]"
                        style={{ backgroundImage: `url(${leftboximg})`, backgroundSize: 'cover' }}
                    >
                        <div className="mt-7 items-center text-center">
                            <span className="text-3xl text-white font-semibold">
                                Got a Trucking Business to Manage?
                            </span>
                        </div>
                        <Link
                            to="/trkrlogin"
                            className="block bg-secondarycolor text-usertrucker font-bold w-full py-2 px-4 rounded-full mt-3 hover:bg-primarycolor hover:text-white transition-colors delay-250 duration-3000 ease-in text-center shadow-custom"
                        >
                            Sign In as Manager
                        </Link>
                    </div>


                    {/* Right Side */}
                    <section className="right flex flex-col items-center justify-center max-w-4xl md:w-2/3 p-10">
                        <div className="imgBox mb-2">
                            <img className="w-16" src={logo} alt="logo" />
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Welcome to GreenTrucker!</h2>
                        <p>Please sign in to access your account.</p>
                        {Object.keys(errors).length > 0 && (
                            <div className="text-alert p-2 text-center flex justify-between items-center animate-slide-down">
                                <span>{Object.values(errors).join(', ')}</span>
                                <button onClick={closeError}>
                                    <FiX className="text-white" />
                                </button>
                            </div>
                        )}
                        <form onSubmit={handleLogin} className="w-full max-w-sm">
                            <div className="mt-3 mb-2">
                                <input
                                    placeholder="Email Address"
                                    type="email"
                                    className={`mt-1 p-3 w-full border rounded ${errors.emailAdd ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-primarycolor focus:border-primarycolor`}
                                    id="emailAdd"
                                    name="emailAdd"
                                    value={emailAdd}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="mb-3 relative">
                                <input
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"} // Toggle password visibility
                                    className={`mt-1 p-3 w-full border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-primarycolor focus:border-primarycolor`}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
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
                            { /* 
                            <div className="text-right text-sm mb-6">
                                <Link
                                    to="/forgpass"
                                    className="text-[#007EA7] hover:text-[#003249] transition-colors delay-250 duration-3000 ease-in"
                                >
                                    {" "}
                                    Forgot Password?{" "}
                                </Link>
                            </div>
                            */}
                            <div className="buttons flex flex-col items-center space-y-5">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center button bg-primarycolor text-white p-[0.7em] w-full rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                                >
                                    Sign In
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleGuest}
                                    className="font-roboto button text-usertrucker p-[0.7em] w-full rounded-full border-solid border-2 border-usertrucker font-bold hover:bg-usertrucker hover:text-primarycolor transition-colors delay-250 duration-[3000] ease-in "
                                >
                                    Continue as Guest
                                </button>
                            </div>
                            <div className="text-center text-sm mt-5">
                                <span className="capitalize">Don't Have an account? </span>
                                <Link
                                    to="/usregister"
                                    className="text-black font-bold hover:text-primarycolor transition-colors delay-250 duration-3000 ease-in"
                                >Register Here
                                </Link>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserLogin;
