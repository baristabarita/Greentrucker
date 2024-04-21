import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaUser, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import { FiX } from "react-icons/fi";
import useAuth from '@/util/userAuthentication.jsx';
import LoadingBar from '@/components/loaders/LoadingBar.jsx';
import TruckingServiceAssetsCard from '@/components/card/TruckingServiceAssetsCard.jsx';
import backgroundimg from '@/assets/images/bgimg1.png';
import truckicon from '@/assets/icons/fast-delivery.png';
import trailericon from '@/assets/icons/trailer.png';

const SelectedServiceChoice = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [businessDetails, setBusinessDetails] = useState(null);
    const [assets, setAssets] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const selectedTrucker = JSON.parse(localStorage.getItem('selectedTrucker'));

    useEffect(() => {
        if (selectedTrucker) {
            setBusinessDetails(selectedTrucker);
            // Assuming selectedTrucker includes a field for averageRating and assets
            setAverageRating(selectedTrucker.averageRating || 0); // Fallback to 0 if not present
            setAssets(selectedTrucker.assets || []); // Fallback to an empty array if not present
        } else {
            console.error('Selected trucker data not found');
            navigate('/services'); // Redirect if data is not available
        }
    }, [navigate]);

    const handleBookServicesClick = () => {
        navigate('/services/choice/book');
    };

    return (
        <div className="animate-fade-in font-poppings bg-primarycolor text-darkblue">
            {/* Back to Bookings Page */}
            <div className="mt-[1em] text-userclient ml-[2%]">
                <h3
                    className="py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => navigate('/services')}
                >
                    <AiOutlineArrowLeft className="text-black mr-[1%] hover:text-white" />
                    Back to Bookings Page
                </h3>
            </div>

            {!businessDetails ? (
                <LoadingBar />
            ) : (
                <div className="bg-white h-[100%] px-7 py-3 mx-auto" style={{ backgroundImage: `url(${backgroundimg})` }}>
                    <div className="max-w-screen-lg mx-auto">
                        {/* View your Selection */}
                        <h1 className="font-bold text-2xl">View your Selection</h1>
                        {/* Main Section */}
                        <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
                            {/* Business Details */}
                            <section className="bg-white col-span-2 md:col-span-2 border rounded p-4 shadow-lg drop-shadow-xl">
                                {/* Business Logo and Name */}
                                <div className="flex items-center mb-4">
                                    <img src={businessDetails.logo || truckicon} alt="Business Logo" className="w-auto h-[10.5em] mr-4" />
                                    <div>
                                        <h1 className="text-[2em] font-bold mb-1">{businessDetails.business_name}</h1>
                                        <div className="flex items-center mb-2">
                                            <FaUser className="mr-2" /> {businessDetails.contact_name}
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <FaPhone className="mr-2" /> {businessDetails.contact_number}
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <FaEnvelope className="mr-2" /> {businessDetails.email_address}
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <FaMapMarker className="mr-2" /> {businessDetails.address}
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4 border-gray-400" />
                                {/* Star Ratings */}
                                <div className="flex items-center">
                                    <div className="bg-primarycolor text-usertrucker font-bold rounded-md ml-2 p-2">
                                        {Math.round(businessDetails.averageRating * 10) / 10}
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-left">Review Score</div>
                                        <Rating name="read-only" value={businessDetails.averageRating} precision={0.1} readOnly />
                                    </div>
                                </div>
                            </section>

                            {/* Service Charges Breakdown */}
                            <section className="bg-white md:col-span-1 border rounded p-4 shadow-lg drop-shadow-xl flex flex-col h-auto">
                                <h2 className="font-bold text-2xl mb-4">Charges Range</h2>

                                {/* Divider Line */}
                                <hr className="my-4 border-gray-400" />

                                {/* Service Price */}
                                <div className="flex justify-between mb-4">
                                    <div>Price for Service</div>
                                    <div>₱ {businessDetails.servCharge}</div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <div>Price per Container</div>
                                    <div>₱ {businessDetails.contrCharge}</div>
                                </div>
                                <hr className="my-4 border-gray-400" />

                                {/* Book Services Button */}
                                <button
                                    className="bg-usertrucker hover:bg-primarycolor font-medium text-white hover:text-usertrucker rounded-md p-2 self-start ml-auto shadow-custom"
                                    onClick={() => {
                                        if (isLoggedIn) {
                                            handleBookServicesClick();
                                        } else {
                                            setShowAlert(true);
                                        }
                                    }}
                                >
                                    Book Services
                                </button>

                            </section>
                        </div>
                        {/* Assets Section */}
                        <div className="bg-white border rounded p-4 shadow-lg drop-shadow-xl mt-6">
                            <h2 className="font-bold text-2xl mb-4">Current Available Assets</h2>
                            <hr className="my-4 border-gray-400" />

                            <div className='flex flex-row justify-between'> {/* Use flex-row for side-by-side layout */}
                                {/* Trucks Section */}
                                <div className="flex-1 mr-2"> {/* flex-1 for equal width and mr-2 for a small gap */}
                                    <h3 className="font-bold text-xl mb-2 ml-3">Available Trucks</h3>
                                    <div className='flex flex-wrap'> {/* flex-wrap to allow items to wrap in the container */}
                                        {businessDetails?.assets?.filter(asset => asset.asset_category === "Truck").length > 0 ? (
                                            businessDetails.assets.filter(asset => asset.asset_category === "Truck").map((asset, index) => (
                                                <TruckingServiceAssetsCard key={`truck-${index}`} asset={asset} />
                                            ))
                                        ) : (
                                            <p>No truck assets available</p>
                                        )}
                                    </div>
                                </div>

                                {/* Trailers Section */}
                                <div className="flex-1 ml-2"> {/* flex-1 for equal width and ml-2 for a small gap */}
                                    <h3 className="font-bold text-xl mb-2 ml-3">Available Trailers</h3>
                                    <div className='flex flex-wrap'> {/* flex-wrap to allow items to wrap in the container */}
                                        {businessDetails?.assets?.filter(asset => asset.asset_category === "Trailer").length > 0 ? (
                                            businessDetails.assets.filter(asset => asset.asset_category === "Trailer").map((asset, index) => (
                                                <TruckingServiceAssetsCard key={`trailer-${index}`} asset={asset} />
                                            ))
                                        ) : (
                                            <p>No trailer assets available</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black backdrop-blur">
                    <div className="bg-white p-6 rounded-md shadow-md flex flex-col">
                        <button onClick={() => setShowAlert(false)} className="self-end mb-4 items-end">
                            <FiX className="text-alert hover:text-primarycolor" />
                        </button>
                        <p className="text-lg text-alert font-semibold">
                            Unable to book services. Please login to your account!
                        </p>
                        <button
                            className="button self-center bg-usertrucker text-white p-[0.5em] w-[45%] mt-2 rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in shadow-custom"
                            onClick={() => { navigate('/userlogin'); }}
                        >
                            Click here to log in
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectedServiceChoice;
