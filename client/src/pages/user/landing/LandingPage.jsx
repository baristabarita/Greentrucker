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
                    
                </div>
            </section>

        </div>
    )
}

export default LandingPage;