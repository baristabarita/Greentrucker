import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import Footer from '../../../components/footer/Footer.jsx';
import background from '../../../assets/images/bgimg1.png';
import leftboximg from '../../../assets/images/medium-shot-man-wearing-helmet.png';
import logo from '../../../assets/icons/greentrucker-logo.png';

const TruckerLogin = () => {
    const navigate = useNavigate();
    const [emailAdd, setEmailAdd] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleGuest = () => {
        setError("");
        navigate("/");
    };

    const closeError = () => {
        setError("");
    };

    const handleLogin = () => {
        navigate("/");
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
                        <div className="mt-7 items-center text-center">
                            <span className="text-3xl text-white font-semibold">
                                Got Trucker Services to Book?
                            </span>
                        </div>
                        <Link
                            to="/userlogin"
                            className="block bg-usertrucker text-white w-full py-2 px-4 rounded-full mt-3 hover:bg-primarycolor hover:text-white transition-colors delay-250 duration-3000 ease-in text-center"
                        >
                            Sign In as Client
                        </Link>
                    </div>


                    {/* Right Side */}
                    <div className="right flex flex-col items-center justify-center max-w-4xl md:w-2/3 p-10">
                        <div className="imgBox mb-2">
                            <img className="w-16" src={logo} alt="logo" />
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Welcome Trucking Manager!</h2>
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
                                    onClick={handleLogin}
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
                                    to="/trkregister"
                                    className="text-black font-bold hover:text-primarycolor transition-colors delay-250 duration-3000 ease-in"
                                >Register Here
                                </Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default TruckerLogin;