import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import Footer from '@/components/footer/Footer.jsx';
import background from '@/assets/images/bgimg1.png';
import leftboximg from '@/assets/images/medium-shot-man-wearing-helmet.png';
import logo from '@/assets/icons/greentrucker-logo.png';


const UserRegister = () => {
    const navigate = useNavigate();
    const [emailAdd, setEmailAdd] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNum, setContactNum] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleGuest = () => {
        setErrors("");
        navigate("/");
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!emailAdd.trim()) {
            newErrors.emailAdd = "Email address is required";
        }
        if (!contactNum.trim()) {
            newErrors.contactNum = "Contact number is required";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required";
        }
        if (password.trim() && (confirmPassword.trim() !== password.trim())) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setRegistrationSuccess(true);
            setTimeout(() => {
                navigate("/userlogin");
            }, 3000);
        }
    };

    const handleFnameChange = (e) => {
        setFirstName(e.target.value);
        const newErrors = { ...errors };
        delete newErrors.firstName;
        setErrors(newErrors);
    };
    const handleLnameChange = (e) => {
        setLastName(e.target.value);
        const newErrors = { ...errors };
        delete newErrors.lastName;
        setErrors(newErrors);
    };
    const handleEmailChange = (e) => {
        setEmailAdd(e.target.value);
        const newErrors = { ...errors };
        delete newErrors.emailAdd;
        setErrors(newErrors);
    };
    const handleContactChange = (e) => {
        setContactNum(e.target.value);
        const newErrors = { ...errors };
        delete newErrors.contactNum;
        setErrors(newErrors);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        const newErrors = { ...errors };
        delete newErrors.password;
        setErrors(newErrors);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        const newErrors = { ...errors };
        delete newErrors.confirmPassword;
        setErrors(newErrors);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const closeError = () => {
        setErrors("");

    };

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen overflow-hidden font-roboto animate-fade-in" 
            style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                {/* registration box */}
                <div className="flex flex-col items-center justify-center w-full pt-5 pb-5">

                <div className="relative flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-[4px_15px_10px_4px_gray] rounded-[7px_7px_7px_7px] mt-10 mb-10">
                    {/* Left side */}
                    <section
                        className="leftBox flex flex-col items-center justify-center w-full md:w-1/3 p-10 rounded-[7px_0px_0px_7px]"
                        style={{ backgroundImage: `url(${leftboximg})`, backgroundSize: 'cover' }}
                    >
                        <div className="mt-7 items-center text-center">
                            <span className="text-3xl text-white font-semibold">
                                Want to Streamline your Business?
                            </span>
                        </div>
                        <Link
                            to="/trkregister"
                            className="block bg-secondarycolor text-usertrucker font-bold w-full py-2 px-4 rounded-full mt-3 hover:bg-primarycolor hover:text-white transition-colors delay-250 duration-3000 ease-in text-center shadow-custom"
                        >
                            Register as Manager
                        </Link>
                    </section>


                    {/* Right Side */}
                    <section className="right flex flex-col items-center justify-center max-w-4xl md:w-2/3 p-10">
                        <div className="imgBox mb-2">
                            <img className="w-16" src={logo} alt="logo" />
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Welcome to GreenTrucker!</h2>
                        <p>Set up your account to start your journey.</p>
                        {registrationSuccess && (
                            <p className="bg-primarycolor text-usertrucker py-2 px-3 my-2 rounded-md">Account Registered! Redirecting you to the login page.</p>
                        )}
                        {Object.keys(errors).length > 0 && (
                            <div className="text-alert p-2 text-center flex justify-between items-center animate-slide-down">
                                <span>{Object.values(errors).join(', ')}</span>
                                <button onClick={() => setErrors({})}>
                                    <FiX className="text-white" />
                                </button>
                            </div>
                        )}
                        <form onSubmit={handleRegister} className="w-full max-w-sm">
                            {/* Row 1 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="First Name"
                                        type="text"
                                        className={`mt-1 p-3 w-full border rounded ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-primarycolor focus:border-primarycolor`}
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleFnameChange}
                                    />
                                </div>
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="Last Name"
                                        type="text"
                                        className={`mt-1 p-3 w-full border rounded ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-primarycolor focus:border-primarycolor`}
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleLnameChange}
                                    />
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="grid grid-cols-2 gap-4">
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
                                <div className="mt-3 mb-2">
                                    <input
                                        placeholder="Phone Number"
                                        type="text"
                                        className={`mt-1 p-3 w-full border rounded ${errors.contactNum ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-primarycolor focus:border-primarycolor`}
                                        id="contactNum"
                                        name="contactNum"
                                        value={contactNum}
                                        onChange={handleContactChange}
                                    />
                                </div>
                            </div>
                            {/* Pass and Confirm Pass */}
                            <div className="mt-3 mb-2 relative">
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
                            <div className="mt-3 mb-2 relative">
                                <input
                                    placeholder="Confirm Password"
                                    type={showPassword ? "text" : "password"} // Toggle password visibility
                                    className={`mt-1 p-3 w-full border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:ring focus:ring-primarycolor focus:border-primarycolor`}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
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
                                    className="flex items-center justify-center button bg-primarycolor text-white p-[0.7em] w-full rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                                >
                                    Create an Account
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
                                <span className="capitalize">Already Have an account? </span>
                                <Link
                                    to="/userlogin"
                                    className="text-black font-bold hover:text-primarycolor transition-colors delay-250 duration-3000 ease-in"
                                >
                                    Sign In Here
                                </Link>
                            </div>
                        </form>
                    </section>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserRegister;