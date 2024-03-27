import React from 'react';
import { Link } from 'react-router-dom'

import headerbackgroundimage from '../../../assets/images/landingbannerimg.png'

const LandingPage = () => {
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

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Features</h2>
                    <p className="text-lg mb-8">Check out the different features the website has to offer.</p>
                    <div className="mb-8">
                        <button
                            className={`bg-[#007EA7] hover:bg-[#1f3d48] text-white py-2 px-6 rounded mr-4 ${selectedFeature === 'managers' ? 'bg-[#1f3d48]' : ''}`}
                            onClick={() => setSelectedFeature('managers')}
                        >
                            For Managers
                        </button>
                        <button
                            className={`bg-[#007EA7] hover:bg-[#1f3d48] text-white py-2 px-6 rounded ${selectedFeature === 'clients' ? 'bg-[#1f3d48]' : ''}`}
                            onClick={() => setSelectedFeature('clients')}
                        >
                            For Clients
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {featuresData[selectedFeature].map((feature, index) => (
                            <div key={index} className="bg-white p-6 m-4 rounded-lg shadow-md w-72">
                                <img src={feature.image} alt={feature.title} className="w-16 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LandingPage;