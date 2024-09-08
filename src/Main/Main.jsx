import React, { useEffect, useState } from 'react';
import '../App.css';

//icon
import { FaHospital, FaPills, FaCalendarAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Main = () => {
  const btn1 = () => {
    window.location.href = '/hospital';
  };
  const btn2 = () => {
    window.location.href = '/medicine';
  };
  const btn3 = () => {
    window.location.href = '/diary';
  };

  const mainMent = [
    '주변 병원과 약국을 한곳에서 찾아보세요!',
    '운동으로 하루를 마무리해보는건 어때요?',
    '빠르게 질병에 맞게 약을 추천해요',
    '모든 스케줄을 한 앱에서!',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % mainMent.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [mainMent.length]);

  return (
    <>
      <div className='relative flex flex-col items-center min-h-[200vh] pt-24 bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 overflow-hidden'>
        <div className='relative bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-16 w-[80%] mt-10 h-[60vh] flex flex-col justify-center items-center shadow-2xl'>
          <p className='text-3xl text-gray-600 text-center mb-6 font-bold'>
            {mainMent[currentTextIndex]}
          </p>
          <h1 className='text-lg font-bold text-gray-800  opacity-35'>
            건강 관리의 모든 것, check well
          </h1>
        </div>

        {/* 2 */}
        <div className='flex flex-wrap justify-center h-3/5 mt-36'>
          <div className='bg-white bg-opacity-90 backdrop-blur-lg rounded-xl p-8 m-4 flex flex-col justify-center items-center shadow-lg w-[500px]'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>다음 일정</h2>
            <ul className='text-lg text-gray-600'>
              <li className='mb-2'>09/11 - 병원 예약</li>
              <li className='mb-2'>09/11 - 약 복용</li>
              <li className='mb-2'>09/12 - 운동 계획</li>
            </ul>
          </div>

          <div className='bg-white bg-opacity-90 backdrop-blur-lg rounded-xl p-8 m-4 flex flex-col justify-center items-center shadow-lg w-[500px]'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              추천 콘텐츠
            </h2>
            <p className='text-lg text-gray-600 mb-4'>
              새로운 운동 루틴을 시도해 보세요!
            </p>
          </div>
        </div>

        {/* main btn */}
        <div className='flex flex-wrap justify-center w-full mt-36'>
          <div className='bg-white bg-opacity-90 backdrop-blur-lg rounded-xl p-8 w-[90%] max-w-[400px] m-4 h-[40vh] flex flex-col justify-center items-center shadow-lg'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>일정 관리</h2>
            <p className='text-lg text-gray-600 text-center mb-4'>
              운동 관리, 약 복용 시간, 병원 일정 등을 체계적으로 정리하세요.
            </p>
            <button
              className='bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300'
              onClick={btn3}
            >
              <FaCalendarAlt className='inline mr-2' />
              일정 관리하기
            </button>
          </div>
          <div className='bg-white bg-opacity-90 backdrop-blur-lg rounded-xl p-8 w-[90%] max-w-[400px] m-4 h-[40vh] flex flex-col justify-center items-center shadow-lg'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              주변 병원 및 약국
            </h2>
            <p className='text-lg text-gray-600 text-center mb-4'>
              위치 기반으로 가까운 병원과 약국을 쉽게 찾을 수 있습니다.
            </p>
            <button
              className='bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300'
              onClick={btn1}
            >
              <FaHospital className='inline mr-2' />
              지금 찾기
            </button>
          </div>
          <div className='bg-white bg-opacity-90 backdrop-blur-lg rounded-xl p-8 w-[90%] max-w-[400px] m-4 h-[40vh] flex flex-col justify-center items-center shadow-lg'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>약 추천</h2>
            <p className='text-lg text-gray-600 text-center mb-4'>
              증상에 맞는 맞춤형 약을 추천받아 보세요.
            </p>
            <button
              className='bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300'
              onClick={btn2}
            >
              <FaPills className='inline mr-2' />약 추천받기
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='h-48 flex flex-col items-center justify-center space-y-4'>
        <img src='/logo.png' alt='Logo' className='h-10 w-auto opacity-40' />
        <div className='flex space-x-4 items-center'>
          <a href='https://velog.io/@yklee1040/posts'>
            <img
              src='https://img.shields.io/badge/velog-2b68a7?style=plastic&logo=velog&logoColor=white'
              alt='Velog'
            />
          </a>
          <a href='https://www.notion.so/LeeYoungKyung-bcf4658b19d049269b5ed67df3fdce64'>
            <img
              className='object-fit:center'
              src='https://img.shields.io/badge/Notion-F3F3F3.svg?style=for-the-badge&logo=notion&logoColor=black'
              alt='Notion'
            />
          </a>
          <a href='https://github.com/LeeYoungKyung'>
            <img
              src='https://img.shields.io/badge/git-F3F3F3.svg?style=for-the-badge&logo=git&logoColor=black'
              alt='GitHub'
            />
          </a>
        </div>
        <div>
          <div className='no-underline text-black opacity-40 flex items-center'>
            <IoMdMail className='mr-2' /> yklee1040@naver.com
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Main;
