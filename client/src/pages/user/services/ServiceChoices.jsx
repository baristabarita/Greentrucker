import React, { useState, useEffect } from 'react';
import TruckingServiceCard from '@/components/card/TruckingServiceCard';
import LoadingBar from '@/components/loaders/LoadingBar.jsx';
import ServiceCardSkeleton from '@/components/skeletons/ServiceCardSkeleton';
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import backgroundimg from '@/assets/images/bgimg1.png';
import defaultserviceicon from '@/assets/icons/transport.png';

const ServiceChoices = () => {
    const [truckerData, setTruckerData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Max items per page
    const [sortOrder, setSortOrder] = useState('asc');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTruckerData([
                // Unique data for each trucking service
                {
                    id: 1,
                    business_name: 'Express Movers',
                    address: '123 Park Avenue, NY',
                    description: 'Fast and reliable moving services for your home or office.',
                    contact_name: 'John Doe',
                    contact_number: '0912-345-6789',
                    email_address: 'expressmove@gmail.com',
                    truckCount: 10,
                    trailerCount: 5,
                    averageRating: 4.7,
                    servCharge: 1500,
                    contrCharge: 500,
                    distCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Long Haul',
                        availability: '24/7',
                    },
                    assets: [ // Adding sample assets here
                        {
                            asset_id: 'T1',
                            asset_name: 'Truck A',
                            asset_category: 'Truck',
                            brand: 'Brand A',
                            type: 'Type 1',
                            plateNumber: 'XYZ1234'
                        },
                        {
                            asset_id: 'T2',
                            asset_name: 'Truck B',
                            asset_category: 'Truck',
                            brand: 'Brand B',
                            type: 'Type 2',
                            plateNumber: 'ABC9876'
                        },
                        {
                            asset_id: 'TR1',
                            asset_name: 'Trailer A',
                            asset_category: 'Trailer',
                            type: 'Flatbed',
                            measurements: '20ft',
                            weight: '1 Ton',
                            plateNumber: 'TR1234A'
                        }
                    ]
                },
                {
                    id: 2,
                    business_name: 'Freight Masters',
                    address: '400 Broad St, Seattle, WA',
                    description: 'Cost-effective and dependable freight services to and from anywhere in the country.',
                    contact_name: 'James Smith',
                    contact_number: '0912-345-6789',
                    email_address: 'freightmasters@gmail.com',
                    truckCount: 15,
                    trailerCount: 10,
                    averageRating: 4.4,
                    servCharge: 2500,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'National',
                        availability: 'Business hours',
                    },
                },
                {
                    id: 3,
                    business_name: 'Pioneer Trucking',
                    address: '789 Sunset Blvd, Los Angeles, CA',
                    description: 'Leading the way in eco-friendly transportation and logistics.',
                    contact_name: 'Emily Johnson',
                    contact_number: '0912-345-6789',
                    email_address: 'pioneertrucking@gmail.com',
                    truckCount: 7,
                    trailerCount: 4,
                    averageRating: 4.8,
                    servCharge: 2200,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Regional',
                        availability: '24/7',
                    },
                },
                {
                    id: 4,
                    business_name: 'Urban Logistics',
                    address: '321 Lakeside Ave, Cleveland, OH',
                    description: 'Urban delivery solutions tailored for businesses large and small.',
                    contact_name: 'Robert Brown',
                    contact_number: '0912-345-6789',
                    email_address: 'urbanlogistics@gmail.com',
                    truckCount: 5,
                    trailerCount: 2,
                    averageRating: 4.2,
                    servCharge: 1200,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Local',
                        availability: 'Weekdays',
                    },
                },
                {
                    id: 5,
                    business_name: 'Coastal Haulers',
                    address: '159 Ocean View Dr, Miami, FL',
                    description: 'Expertise in oversized loads and special logistics along the coastlines.',
                    contact_name: 'Isabella Taylor',
                    contact_number: '0912-345-6789',
                    email_address: 'coastalhaulers@gmail.com',
                    truckCount: 20,
                    trailerCount: 15,
                    averageRating: 4.6,
                    servCharge: 3000,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Oversized',
                        availability: '24/7 On-call',
                    },
                },
                {
                    id: 6,
                    business_name: 'Cross-Country Carriers',
                    address: '963 Freedom Rd, Philadelphia, PA',
                    description: 'Safe and secure cross-country logistics for your peace of mind.',
                    contact_name: 'Michael Davis',
                    contact_number: '0912-345-6789',
                    email_address: 'cccarrierss@gmail.com',
                    truckCount: 25,
                    trailerCount: 18,
                    averageRating: 4.9,
                    servCharge: 3200,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Cross-Country',
                        availability: 'Scheduled',
                    },
                },
                {
                    id: 7,
                    business_name: 'Highway Express',
                    address: '874 Speedway Blvd, Charlotte, NC',
                    description: 'Timely and reliable highway freight services for your critical shipments.',
                    contact_name: 'Sophia Miller',
                    contact_number: '0912-345-6789',
                    email_address: 'highwayexpress@gmail.com',
                    truckCount: 12,
                    trailerCount: 6,
                    averageRating: 4.1,
                    servCharge: 1700,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Expedited',
                        availability: '24/7',
                    },
                },
                {
                    id: 8,
                    business_name: 'Metro Moving',
                    address: '500 City Plaza, Boston, MA',
                    description: 'City-wide logistics and moving services with exceptional care and speed.',
                    contact_name: 'William Wilson',
                    contact_number: '0912-345-6789',
                    email_address: 'metromoving@gmail.com',
                    truckCount: 8,
                    trailerCount: 3,
                    averageRating: 4.3,
                    servCharge: 1300,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Urban',
                        availability: 'Daytime',
                    },
                },
                {
                    id: 9,
                    business_name: 'Alpine Transports',
                    address: '342 Mountain Pass Rd, Denver, CO',
                    description: 'Specialized transport services for mountainous and challenging terrains.',
                    contact_name: 'Olivia Moore',
                    contact_number: '0912-345-6789',
                    email_address: 'alphinetransports@gmail.com',
                    truckCount: 10,
                    trailerCount: 7,
                    averageRating: 4.5,
                    servCharge: 2800,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Special Terrain',
                        availability: '24/7 Weather Permitting',
                    },
                },
                {
                    id: 10,
                    business_name: 'Rural Routes Delivery',
                    address: '227 Country Rd, Austin, TX',
                    description: 'Connecting the countryside with reliable delivery and trucking services.',
                    contact_name: 'Joseph Thomas',
                    contact_number: '0912-345-6789',
                    email_address: 'rrdelivery@gmail.com',
                    truckCount: 6,
                    trailerCount: 4,
                    averageRating: 4.0,
                    servCharge: 1100,
                    contrCharge: 500,
                    logo: defaultserviceicon,
                    customData: {
                        serviceType: 'Rural',
                        availability: 'On Demand',
                    },
                },

            ]);
            {/*setTruckerCount(1);*/ } // Set the initial count of trucker services
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSort = (order) => {
        const sortedData = [...truckerData].sort((a, b) => {
            const priceA = a.servCharge;
            const priceB = b.servCharge;
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        setTruckerData(sortedData);
        setSortOrder(order);
    };

    // Pagination controls
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = truckerData.slice(firstItemIndex, lastItemIndex);

    const totalPageCount = Math.ceil(truckerData.length / itemsPerPage);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="flex-grow min-h-screen bg-image bg-cover h-full animate-fade-in" style={{ backgroundImage: `url(${backgroundimg})` }}>
            <section className="mb-4 text-center bg-primarycolor py-4 rounded-lg">
                <h1 className="font-bold text-5xl text-[#363636] mt-4 mb-5">Choose the Trucking Service that Fits Your Needs</h1>
                <p className="text-[#363636] text-xl mb-5">
                    We offer a wide variety of trucking services to meet your needs, from local moves to long-haul shipments.
                </p>
            </section>

            {loading ? (
                <>
                    <LoadingBar />
                    <ServiceCardSkeleton />
                    <ServiceCardSkeleton />
                </>

            ) : (
                <div className='mx-5'>
                    {/* Sorting section */}
                    <section className="flex flex-col sm:flex-row justify-between items-center p-2">
    <div>
        <span className="font-bold text-[#363636] text-lg sm:text-xl">Showing {firstItemIndex + 1}-{lastItemIndex} of {truckerData.length} Services</span>
    </div>
    <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col sm:flex-row items-center">
        <h1 className="font-bold text-[#363636] text-lg sm:text-xl mb-2 sm:mb-0 sm:mr-4">Sort by:</h1>
        <div className="flex space-x-2 rounded-full p-2 bg-white border-slate-950 border-2">
            <button
                className={`rounded-full px-4 p-2 ${sortOrder === 'desc' ? 'bg-usertrucker text-white' : 'bg-transparent text-[#2e2e2e]'}`}
                onClick={() => handleSort('desc')}
            >
                <FaSortAlphaUp className="inline mr-1" /> Highest Price First
            </button>
            <button
                className={`rounded-full px-4 p-2 ${sortOrder === 'asc' ? 'bg-usertrucker text-white' : 'bg-transparent text-[#2e2e2e]'}`}
                onClick={() => handleSort('asc')}
            >
                <FaSortAlphaDown className="inline mr-1" /> Lowest Price First
            </button>
        </div>
    </div>
</section>


                    
                    {/* Trucking Cards called */}
                    <section className="flex flex-wrap justify-center mt-4">
                        {currentItems.map((trucker, index) => (
                            <TruckingServiceCard key={index} trucker={trucker} />
                        ))}
                    </section>
                    
                    {/* Pagination */}
                    <section className="flex justify-center mt-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 m-1 rounded-md border ${currentPage === 1 ? 'bg-gray-300' : 'bg-white hover:bg-gray-100'}`}
                        >
                            &laquo;
                        </button>
                        {[...Array(totalPageCount).keys()].map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number + 1)}
                                className={`px-3 py-1 m-1 rounded-md border ${currentPage === number + 1 ? 'bg-userclient text-white' : 'bg-white hover:bg-gray-100'}`}
                            >
                                {number + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPageCount))}
                            disabled={currentPage === totalPageCount}
                            className={`px-3 py-1 m-1 rounded-md border ${currentPage === totalPageCount ? 'bg-gray-300' : 'bg-white hover:bg-gray-100'}`}
                        >
                            &raquo;
                        </button>
                    </section>
                </div>
            )}
        </div>
    );
};

export default ServiceChoices;
