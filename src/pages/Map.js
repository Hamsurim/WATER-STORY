import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// 목록 데이터 (예시)
// 디비 연결하기 전에 일단예시로 여기다가 좌표값을 넣었습니다.
const locations = [
  { id: 1, name: '양양', lat: 38.028346, lng: 128.717472 }, // 양양 비치
  { id: 2, name: '제주', lat: 33.555410, lng: 126.797499 }, // 제주 서핑
  { id: 3, name: '강릉', lat: 37.640025, lng: 129.043370 }, // 강릉 서핑
];

const ShopMap = () => {
  const [map, setMap] = useState(null); // 지도를 상태로 저장할 변수

  useEffect(() => {
    // Kakao Maps API 스크립트 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=aab1efdd78d0e9a1d016a215a4126cc1&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    // 스크립트가 로드되면 실행
    script.onload = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error('Kakao Maps API is not loaded correctly.');
        return;
      }

      // Kakao Maps API가 로드된 후 실행
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); // 지도를 표시할 HTML 요소
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도의 초기 중심 좌표 (서울)
          level: 5, // 지도 확대 수준
        };

        // 지도 생성
        const mapInstance = new window.kakao.maps.Map(container, options);
        setMap(mapInstance); // 지도를 상태에 저장

        // 마커와 인포윈도우 추가
        locations.forEach(location => {
          const markerPosition = new window.kakao.maps.LatLng(location.lat, location.lng); // 마커의 위치
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: mapInstance, // 생성한 지도에 마커를 추가
          });

          // 인포윈도우 생성
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:5px;">${location.name}</div>`, // 인포윈도우에 표시할 내용
            removable: true, // 인포윈도우의 닫기 버튼을 활성화
          });

          // 마커에 마우스 오버 이벤트 리스너 추가
          window.kakao.maps.event.addListener(marker, 'mouseover', () => {
            infowindow.open(mapInstance, marker); // 마커 위에 인포윈도우 열기
          });

          // 마커에 마우스 아웃 이벤트 리스너 추가
          window.kakao.maps.event.addListener(marker, 'mouseout', () => {
            infowindow.close(); // 인포윈도우 닫기
          });
        });
      });
    };
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 목록 항목 클릭 시 지도 중심 이동
  const handleLocationClick = (lat, lng) => {
    if (map) {
      map.setCenter(new window.kakao.maps.LatLng(lat, lng)); // 지도 중심 좌표 변경
    }
  };

  return (
    <div className="container-fluid" style={{ display: 'flex', height: '90vh' }}>
      <div className="card" style={{ width: '250px', padding: '10px', borderRadius: '0.5rem' }}>
        <div className="card-header">
          <h4 className="card-title">목록</h4>
        </div>
        <ul className="list-group list-group-flush">
          {locations.map(location => (
            <li
              key={location.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleLocationClick(location.lat, location.lng)} // 목록 항목 클릭 시 지도 중심 이동
              style={{ cursor: 'pointer' }}
            >
              {location.name} {/* 장소 이름 표시 */}
            </li>
          ))}
        </ul>
      </div>
      <div id="map" style={{ flex: 1, borderRadius: '0.5rem', overflow: 'hidden' }}></div>
    </div>
  );
};

export default ShopMap;
