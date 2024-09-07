import React, { useEffect, useState } from 'react';

const symptoms = [
  '신경통',
  '두통',
  '치통',
  '생리통',
  '관절통',
  '근육통',
  '요통',
  '염좌통',
  '소화불량',
  '과식',
  '식체',
  '설사',
  '종합감기',
  '콧물',
  '재채기',
  '코막힘',
  '습진',
  '아토피',
  '알레르기성',
  '피부질환',
  '구내염',
  '설염',
  '숙취',
];

const SymptomCard = ({ onSelectSymptoms }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const currentSymptoms = symptoms.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === 'next') {
        return Math.min(
          prevPage + 1,
          Math.ceil(symptoms.length / itemsPerPage) - 1
        );
      }
      return Math.max(prevPage - 1, 0);
    });
  };

  const handleSymptomClick = (symptom) => {
    setSelectedSymptoms((prevSelected) => {
      const isSelected = prevSelected.includes(symptom);
      if (isSelected) {
        return prevSelected.filter((item) => item !== symptom);
      } else {
        if (prevSelected.length < 3) {
          return [...prevSelected, symptom];
        } else {
          alert('최대 3개의 증상만 선택할 수 있습니다.');
          return prevSelected;
        }
      }
    });
  };

  useEffect(() => {
    onSelectSymptoms(selectedSymptoms);
  }, [selectedSymptoms, onSelectSymptoms]);

  return (
    <div className='p-4'>
      <div className='grid grid-cols-3 gap-4'>
        {currentSymptoms.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSymptomClick(item)}
            className={`p-4 border border-gray-300 rounded shadow-md cursor-pointer text-center ${
              selectedSymptoms.includes(item) ? 'bg-blue-100' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='mt-4 flex justify-center gap-2'>
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 0}
          className='px-4 py-2 border border-gray-300 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50'
        >
          ﹤
        </button>
        <button
          onClick={() => handlePageChange('next')}
          disabled={
            currentPage >= Math.ceil(symptoms.length / itemsPerPage) - 1
          }
          className='px-4 py-2 border border-gray-300 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50'
        >
          ﹥
        </button>
      </div>
    </div>
  );
};

export default SymptomCard;
//npx json-server --watch db.json --port 4000
