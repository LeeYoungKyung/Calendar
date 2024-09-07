// MapComponent.js
import React from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

const MapComponent = ({ center, markers, onMarkerClick }) => {
  return (
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
            onClick={() => onMarkerClick(marker)}
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
  );
};

export default MapComponent;
