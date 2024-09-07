// HospitalList.js
import React from 'react';

const HospitalList = ({ categories, hospitalList, onCategoryClick }) => {
  return (
    <div
      style={{
        height: '300px',
        overflowY: 'auto',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderTop: '1px solid #ddd',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        {categories.map((category) => (
          <button
            className='bg-slate-400 hover:text-white hover:bg-slate-600 pl-20 pr-20 pb-3 pt-3 opacity-90 m-2 rounded-xl'
            key={category.id}
            onClick={() => onCategoryClick(category)}
            style={{
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            {category.value}
          </button>
        ))}
      </div>
      <ul
        className='bg-white shadow-md rounded-md w-full max-w-3xl'
        style={{ listStyleType: 'none', padding: '0', margin: '0' }}
      >
        {hospitalList.map((hospital) => (
          <li
            className='p-4'
            key={hospital.id}
            style={{
              marginBottom: '10px',
              borderBottom: '1px solid #ddd',
              paddingBottom: '10px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              transition: 'background-color 0.3s',
            }}
          >
            <a
              className='text-center'
              href={hospital.place_url}
              target='_blank'
              rel='noopener noreferrer'
              style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '16px',
                display: 'block',
                padding: '10px',
              }}
            >
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>
                {hospital.index + 1}.
              </span>
              {hospital.place_name} <br />
              📍{hospital.address_name}
              <br />
              ☎️ {hospital.phone}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
