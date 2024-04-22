import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { FaMapMarker, FaTruck, FaEye, FaTrailer, FaTruckMoving } from "react-icons/fa";

const TruckingServiceCard = ({ trucker }) => {
    const {
        business_name,
        address,
        description,
        truckCount,
        trailerCount,
        averageRating,
        servCharge,
        logo,
        customData
    } = trucker;

    const navigate = useNavigate();

    const handleViewMoreClick = () => {
        localStorage.setItem('selectedTrucker', JSON.stringify(trucker));
        navigate('/services/choice');
    };

    return (
        <div className="animate-fade-in card bg-white shadow-lg p-4 m-2 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4 min-w-[90%] md:min-w-[80%] max-w-[90%] md:max-w-[80%]">
            {/* Logo Column */}
            <section className="col-span-1 mb-4 md:mb-0">
                {logo ? (
                    <div className="rounded-lg overflow-hidden h-[10em] md:h-[15em] w-[10em] md:w-[15em] mx-auto md:mr-2 mb-4 md:mb-0">
                        <img src={logo} alt="Business Logo" className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <FaTruckMoving className="h-[10em] md:h-[15em] w-[10em] md:w-[15em] mx-auto md:mr-2 mb-4 md:mb-0 text-gray-500" />
                )}
            </section>

            {/* Contents Column */}
            <section className="md:col-span-2 mr-[2em]">
                <h2 className="font-bold text-darkblue text-lg md:text-[2em] mb-1">{business_name}</h2>
                <div className="flex items-center my-2">
                    <FaMapMarker className="text-darkblue" />
                    <span className="text-darkblue mx-2">{address}</span>
                </div>
                <div className="flex items-center my-2">
                    <FaTruck className="text-darkblue mr-1" />
                    <span className="text-darkblue mx-2">{truckCount} Truck Assets</span>
                </div>
                <div className="flex items-center my-2">
                    <FaTrailer className="text-darkblue mr-1" />
                    <span className="text-darkblue mx-2">{trailerCount} Trailer Assets</span>
                </div>
                <p className="text-darkblue text-sm md:text-[0.8em] my-2">{description}</p>
            </section>

            {/* Rating, Price, and Buttons Column */}
            <section className="col-span-1 flex flex-col items-center md:items-end">
                {/* Ratings section */}
                <div className="mb-4 md:mb-[5em]">
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="mr-4">
                            <div className="text-center md:text-right">Review Score</div>
                            <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
                        </div>
                        <div className="bg-primarycolor text-usertrucker font-bold rounded-lg p-3">{Math.round(averageRating * 10) / 10}</div>
                    </div>
                </div>

                {/* Price and Buttons Section */}
                <div className="text-black">Trucking Service Charge</div>
                <div className="text-black text-[1em] md:text-[1.5em] font-bold mb-2">₱ {servCharge.toFixed(2)}</div>
                <button
                    className="bg-usertrucker font-medium text-white rounded-md p-2 flex items-center hover:bg-primarycolor hover:text-usertrucker shadow-custom"
                    onClick={handleViewMoreClick}
                >
                    <FaEye className="mr-1" />
                    View Trucking Service
                </button>
            </section>
        </div>
    );
};

export default TruckingServiceCard;
