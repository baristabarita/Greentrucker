import React from 'react';

const DashboardSkeleton = () => {
    return (
        <div className="animate-pulse p-5 space-y-6">
            {/* Top Boxes Placeholder */}
            <div className="flex overflow-x-auto rounded-lg">
                <div className="flex gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="bg-gray-300 h-[24vh] w-[37vh] rounded-2xl m-2"></div>
                    ))}
                </div>
            </div>

            {/* Graph Section Placeholder */}
            <div className="container mt-5 bg-gray-300 rounded-md h-[50vh]"></div>

            {/* Tables Section Placeholder */}
            <div className="flex overflow-auto mt-5 space-x-2">
                <div className="bg-gray-300 w-full lg:w-[49%] h-[50vh] rounded-lg m-2"></div>
                <div className="bg-gray-300 w-full lg:w-[49%] h-[50vh] rounded-lg m-2"></div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
