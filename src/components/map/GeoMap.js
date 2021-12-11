import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import location from "../../services/location";
import EventMarker from "./EventMarker";

const LoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  line-height: 75vh;
  color: #20124d;
  background-color: #ede8ff;
  font-size: 1.5rem;
`;

const GeoMap = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await location();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  if (loading) {
    return <LoadingPage>로딩 중 입니다</LoadingPage>;
  }

  return (
    <>
      <Map
        center={state.center}
        style={{
          width: "100vw",
          height: "100vh",
        }}
        level={5}
      >
        {data.length > 0 &&
          data.map((value) => (
            <EventMarker
              key={value.id}
              position={value.latlng}
              name={value.name}
              quantity={value.quantity}
            />
          ))}
      </Map>
    </>
  );
};

export default GeoMap;
