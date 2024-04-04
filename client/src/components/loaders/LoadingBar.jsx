import React from 'react';

const LoadingBar = () => (
  <div className="w-full float-center">
    <div className='w-full rounded animate-pulse'>
        <div className='w-full'>
            <div className='h-[50px] bg-gray-400 px-4 rounded-lg dark:bg-gray-600 w-full mb-[20px]'></div>
        </div>
    </div>
  </div>
);

export default LoadingBar;