import React, { useEffect, useState } from 'react';
import MapComponent from './MapComponent';
import HospitalList from './HospitalList';
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
          console.error('위치 정보를 가져오는 데 실패했습니다.', error);
          // 오류 처리 또는 대체 방법
        }
      );
    } else {
      console.error('이 브라우저는 지리 위치 서비스를 지원하지 않습니다.');
    }
  }, []);

  const searchPlaces = (category) => {
    if (!center) return;

    const ps = new window.kakao.maps.services.Places();
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
        <MapComponent
          center={center}
          markers={markers}
          onMarkerClick={handleMarkerClick}
        />
      </div>
      <HospitalList
        categories={categories}
        hospitalList={hospitalList}
        onCategoryClick={handleButtonClick}
      />
    </div>
  );
};

export default Hospital;
