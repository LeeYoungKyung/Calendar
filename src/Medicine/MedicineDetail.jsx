import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//아이콘
import { TbMoodKid } from 'react-icons/tb';

const MedicineDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getDetail = async () => {
    let url = `http://localhost:4000/medecine/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Container>
      <Row className='items-center h-lvh'>
        <Col md={6} className='mb-4 md:mb-0 '>
          <img
            src={product?.img}
            alt={product?.title}
            className='w-full h-auto rounded-lg orverflow-hidden '
          />
        </Col>
        <Col md={6} className='p-4 bg-white shadow-md rounded-lg'>
          <h2 className='text-xl font-bold mb-2'>{product?.title}</h2>
          <p className='text-gray-700 mb-2'>
            <strong>Company:</strong> {product?.company}
          </p>

          <div className='mb-2'>
            <strong>복용:</strong> {product?.dosage}
          </div>
          <div className='mb-4'>
            <strong>주의사항:</strong> {product?.cautions}
          </div>
          <div className='flex flex-wrap gap-2'>
            <div>
              {' '}
              {product?.kid === true ? <TbMoodKid className='h-10 w-10' /> : ''}
            </div>
            {product?.add?.map((element, index) => (
              <span
                key={index}
                className='inline-block content-center bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-blue-600'
              >
                {element}
              </span>
            ))}
          </div>
        </Col>{' '}
        <div className='text-center text-lg font-semibold'>
          💊 폐의약품을 쓰레기통에 버리지 마세요!<br></br>
          폐의약품 수거함에 버리셔야 합니다.
        </div>
      </Row>
    </Container>
  );
};

export default MedicineDetail;
