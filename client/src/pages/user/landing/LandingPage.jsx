import React from 'react';
import { Link } from 'react-router-dom'

import { FaEnvelope, FaPhone } from 'react-icons/fa'
import headerbackgroundimage from '@/assets/images/landingbannerimg.png'
import aboutusimg from '@/assets/images/landingpage-aboutimg.png'
import feature1 from '@/assets/icons/project-management.png'
import feature2 from '@/assets/icons/booking.png'
import feature3 from '@/assets/icons/bar-chart.png'
import contactusimg from '@/assets/images/contactus-img.png'

const LandingPage = () => {
    const featuresData = [
        {
            title: 'Booking Management',
            description: 'Efficiently manage and organize bookings from one centralized platform.',
            image: feature1,
        },
        {
            title: 'Easy Bookings',
            description: 'Easily search and book services that match your requirements.',
            image: feature2,
        },
        {
            title: 'Performance Analysis',
            description: 'Get a statistical and graphical overview of your work performance.',
            image: feature3,
        },
    ]

    return (
        <div className='font-roboto animate-fade-in'>
            {/* Landing Page Banner Img */}
            <header className="bg-cover bg-center relative h-[30em] " style={{ backgroundImage: `url(${headerbackgroundimage})` }}>
                <div className="container mx-auto flex justify-between items-center text-white p-8 relative z-0">
                    <div className="flex flex-col z-0 items-start max-w-[50%]">
                        <div className="my-20">
                            <h1 className="text-white text-5xl font-bold mb-2">GreenTrucker: Streamlining Trucking Operations</h1>
                            <p className="text-white text-[1em] my-8">
                                Experience seamless booking and efficient asset management with GreenTrucker, your all-in-one solution
                                for modern trucking management.
                            </p>
                            <Link to="/usregister">
                                <button className="bg-primarycolor hover:bg-usertrucker text-white py-2 px-6 rounded">Try GreenTrucker Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <section id="about" className="bg-white py-20 flex flex-col md:flex-row justify-center items-center space-x-10">
                {/* Column 1 - Info */}
                <div className="md:w-1/2 md:max-w-md">
                    <h1 className="text-start text-[10vh] font-roboto font-bold text-userclient">About Us</h1>
                    <p className="font-roboto font-light">
                        Our mission is to provide trucking managers with a user-friendly and comprehensive web application that streamlines their operations, optimizes their fleet, and ultimately drives their business forward.
                    </p>
                    <Link to="/usregister">
                                <button className="bg-primarycolor hover:bg-usertrucker text-white py-2 px-6 mt-3 rounded">Try GreenTrucker Now</button>
                            </Link>
                </div>
                {/* Column 2 - Image */}
                <div className="md:w-1/2 md:max-w-md">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img src={aboutusimg} alt="About Us" className="object-cover w-full h-full animate-fade-in" />
                    </div>
                </div>
            </section>



            {/* Offered Features Section */}
            <section className="bg-[#F2E8CF] py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-4">Offered Features</h2>
                    <p className="text-lg mb-8">Check out the different features GreenTrucker has to offer, like booking management to business performance analysis, to see how it can streamline your business.</p>
                    <div className="flex flex-wrap justify-center">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="bg-white p-6 m-4 rounded-lg shadow-md w-72">
                                <img src={feature.image} alt={feature.title} className="w-16 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Contact Us */}
            <section className="bg-blue-200 h-[30em] py-12 text-center" style={{ backgroundImage: `url(${contactusimg})`, backgroundSize: 'cover' }}>
                <div className="container mx-auto max-w-[45em] mt-[4em] py-10 text-center text-[#e4e4e4] bg-black bg-opacity-50">
                    <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
                    <p className="text-md mb-5">
                        Do you have any further questions or clarifications that require our input?<br /> Let us know or contact us through the following methods:
                    </p>
                    <div className="flex justify-center mb-8">
                        <div className="mr-8 flex items-center">
                            <FaPhone className="text-2xl mr-2" />
                            <span>062-325-7890</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-2xl mr-2" />
                            <span>digiaid@gmail.com</span>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default LandingPage;