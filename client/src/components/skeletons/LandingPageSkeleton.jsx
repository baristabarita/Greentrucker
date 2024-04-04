import React from 'react';

const LandingPageSkeleton = () => {
    return (
        <div className='animate-pulse'>
            {/* Header placeholder with rounded corners */}
            <div className='bg-gray-300 h-[30em] rounded-lg'></div> 
            <div className='flex justify-center items-center space-x-4 p-4'>
                {/* About Us text placeholder with rounded corners */}
                <div className='bg-gray-300 h-48 w-full md:w-1/2 rounded-lg'></div> 
                {/* About Us image placeholder with rounded corners */}
                <div className='bg-gray-300 h-48 w-full md:w-1/2 rounded-lg'></div> 
            </div>
            {/* Features placeholder with rounded corners */}
            <div className='bg-gray-300 h-24 w-full rounded-lg'></div>
            {/* Contact Us placeholder with rounded corners */}
            <div className='bg-gray-300 h-[30em] rounded-lg'></div>
        </div>
    );
};

export default LandingPageSkeleton;
