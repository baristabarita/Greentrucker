import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import Footer from '@/components/footer/Footer.jsx';
import background from '@/assets/images/bgimg1.png';
import leftboximg from '@/assets/images/medium-shot-man-wearing-helmet.png';
import logo from '@/assets/icons/greentrucker-logo.png';

const TruckerRegister = () => {
    const navigate = useNavigate();
    const [emailAdd, setEmailAdd] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const closeError = () => {
        setError("");
    };

    const handleRegister = () => {
        navigate("/");
    };

    const handleEmailChange = (e) => {
        setEmailAdd(e.target.value);
        setError(""); 
    };
    const handleFnameChange = (e) => {
        setFirstName(e.target.value);
        setError(""); 
    };
    const handleLnameChange = (e) => {
        setLastName(e.target.value);
        setError(""); 
    };
    const handleContactChange = (e) => {
        setContactNum(e.target.value);
        setError(""); 
    };
    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
        setError(""); 
    };
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setError(""); 
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError("");
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
                {/* registration box */}
                <div className="relative flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-[4px_15px_10px_4px_gray] rounded-[7px_7px_7px_7px] mt-10 mb-10">
                    {/* Left side */}
                    <div
                        className="leftBox flex flex-col items-center justify-center w-full md:w-1/3 p-10 rounded-[7px_0px_0px_7px]"
                        style={{ backgroundImage: `url(${leftboximg})`, backgroundSize: 'cover' }}
                    >
                        <div className="mt-7 items-center text-center">
                            <span className="text-3xl text-white font-semibold">
                                Interested in Booking Services?
                            </span>
                        </div>
                        <Link
                            to="/usregister"
                            className="block bg-usertrucker text-white w-full py-2 px-4 rounded-full mt-3 hover:bg-primarycolor hover:text-white transition-colors delay-250 duration-3000 ease-in text-center"
                        >
                            Register as Client
                        </Link>
                    </div>


                    {/* Right Side */}
                    <div className="right flex flex-col items-center justify-center max-w-4xl md:w-2/3 p-10">
                        <div className="imgBox mb-2">
                            <img className="w-16" src={logo} alt="logo" />
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Welcome to GreenTrucker!</h2>
                        <p>Set up your account to start your journey.</p>
                        <form className="w-full max-w-sm">
                            {/* Row 1 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="First Name"
                                        type="text"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleFnameChange}
                                        required
                                    />
                                </div>
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="Last Name"
                                        type="text"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleLnameChange}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="grid grid-cols-2 gap-4">
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
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="Phone Number"
                                        type="text"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                        id="contactNum"
                                        name="contactNum"
                                        value={contactNum}
                                        onChange={handleContactChange}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Row 3 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="Company Name"
                                        type="text"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                        id="company"
                                        name="company"
                                        value={company}
                                        onChange={handleCompanyChange}
                                        required
                                    />
                                </div>
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="Country of Residence"
                                        type="text"
                                        className="mt-1 p-3 w-full border border-gray-300 rounded focus:ring focus:ring-primarycolor focus:border-primarycolor"
                                        id="country"
                                        name="country"
                                        value={country}
                                        onChange={handleCountryChange}
                                        required
                                    />
                                </div>
                            </div>
                            {/* Pass and Confirm Pass */}
                            <div className="mt-3 mb-2 relative">
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
                            <div className="mt-3 mb-2 relative">
                                <input
                                    placeholder="Confirm Password"
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
                                    onClick={handleRegister}
                                    className="flex items-center justify-center button bg-primarycolor text-white p-[0.7em] w-full rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                                >
                                    Create Manager Account
                                </button>
                            </div>
                            <div className="text-center text-sm mt-5">
                                <span className="capitalize">Already Have an account? </span>
                                <Link
                                    to="/trkrlogin"
                                    className="text-black font-bold hover:text-primarycolor transition-colors delay-250 duration-3000 ease-in"
                                >
                                    Sign In Here
                                </Link>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
}

export default TruckerRegister;