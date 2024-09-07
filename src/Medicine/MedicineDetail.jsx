// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const MedicineDetail = () => {
//   let { id } = useParams();
//   const getDetail = async () => {
//     let url = `http://localhost:3000/medicine/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//   };
//   useEffect(() => {
//     getDetail();
//   }, []);
//   return <div>MedicineDetail</div>;
// };

// export default MedicineDetail;
