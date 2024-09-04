import React, { useEffect, useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import MapSkeleton from './MapSkeleton';
const { kakao } = window;

const Hospital = () => {
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);

  const categories = [
    { id: 'HP8', value: '병원' },
    { id: 'PM9', value: '약국' },
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location', error);
          // Handle error or fallback
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const searchPlaces = (category) => {
    if (!center) return;

    const ps = new kakao.maps.services.Places();
    const options = {
      location: new kakao.maps.LatLng(center.lat, center.lng),
      radius: 5000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };

    ps.categorySearch(
      category.id,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const markersWithIndex = data.map((item, index) => ({
            ...item,
            index,
          }));
          setMarkers(markersWithIndex);
          setHospitalList(markersWithIndex);
        } else {
          console.error('검색에 실패하였습니다.');
        }
        console.log(data);
      },
      options
    );
  };

  const handleButtonClick = (category) => {
    searchPlaces(category);
  };

  const handleMarkerClick = (hospital) => {
    window.open(hospital.place_url, '_blank'); // 클릭한 병원의 링크를 새 탭에서 열기
  };

  if (!center) {
    return (
      <div>
        <MapSkeleton></MapSkeleton>
      </div>
    );
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <Map
          id='map'
          center={center}
          style={{ width: '100%', height: '100%' }}
          level={3}
        >
          <MapMarker position={center} title='You are here' />
          {markers.map((marker) => (
            <React.Fragment key={marker.id}>
              <MapMarker
                position={{ lat: marker.y, lng: marker.x }}
                image={{
                  src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                  size: { width: 35, height: 35 },
                }}
                title={`Marker ${marker.index + 1}`}
                onClick={() => handleMarkerClick(marker)} // 클릭 시 병원 정보 저장
              />
              <CustomOverlayMap
                position={{ lat: marker.y, lng: marker.x }}
                xAnchor={0.5}
                yAnchor={0.5}
                zIndex={1}
              >
                <div
                  style={{
                    padding: '2px',
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    textAlign: 'center',
                    fontSize: '10px',
                  }}
                >
                  <span>{marker.place_name}</span>
                </div>
              </CustomOverlayMap>
            </React.Fragment>
          ))}
        </Map>
      </div>

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
              onClick={() => handleButtonClick(category)}
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
    </div>
  );
};

export default Hospital;
