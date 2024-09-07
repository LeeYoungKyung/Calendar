import React from 'react';

const MedicineCard = ({ item }) => {
  return (
    <div className='p-4 border rounded-lg max-w-xs m-2'>
      <div className='flex items-center justify-center w-48 h-48 mb-4 rounded-lg overflow-hidden'>
        <img
          src={item?.img}
          alt={item?.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='text-lg font-bold mb-2'>{item?.title}</div>
      <div className='text-sm text-gray-600 mb-4'>{item?.company}</div>

      <div className='flex flex-wrap gap-2'>
        {item?.add?.map((element, index) => (
          <span
            key={index}
            className='inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full'
          >
            {element}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MedicineCard;
