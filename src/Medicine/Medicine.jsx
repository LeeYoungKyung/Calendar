import React, { useEffect, useState } from 'react';
import MedicineCard from './MedicineCard';
import SymptomCard from './SymptomCard';
import { Link } from 'react-router-dom';

const Medicine = () => {
  const [medicine, setMedicine] = useState([]);
  const [filteredMedicine, setFilteredMedicine] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const getMedicine = async () => {
    let url = `http://localhost:4000/medecine`;
    let response = await fetch(url);
    let data = await response.json();
    setMedicine(data);
  };

  const filterMedicines = (symptoms) => {
    const filtered = medicine.filter((med) =>
      symptoms.every((symptom) => med.add.includes(symptom))
    );
    setFilteredMedicine(filtered);
  };

  useEffect(() => {
    getMedicine();
  }, []);

  useEffect(() => {
    filterMedicines(selectedSymptoms);
  }, [selectedSymptoms, medicine]);

  const handleSymptomSelection = (symptoms) => {
    setSelectedSymptoms(symptoms);
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[80%]'>
          <SymptomCard onSelectSymptoms={handleSymptomSelection} />
          <div className='flex overflow-y-scroll'>
            {filteredMedicine.map((item) => (
              <MedicineCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className=' text-center'>
        <Link
          to='/hospital'
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600'
        >
          약국찾기
        </Link>
      </div>
    </>
  );
};

export default Medicine;
