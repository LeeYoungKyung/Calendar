import React from 'react';
import 'tailwindcss/tailwind.css'; // Tailwind CSS를 가져옵니다.

const MapSkeleton = () => {
  return (
    <div className='relative flex items-center justify-center h-screen w-full bg-gray-200'>
      <div className='w-full max-w-screen-lg h-full flex items-center justify-center relative'>
        {/* 원형으로 회전하는 스켈레톤 */}
        <div className='relative w-32 h-32 rounded-full border-4 border-gray-300 border-t-transparent animate-rotate'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-16 h-16 rounded-full bg-gray-300'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSkeleton;
