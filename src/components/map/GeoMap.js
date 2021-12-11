import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import location from "../../services/location";
import EventMarker from "./EventMarker";

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
  const fetchData = async () => {
    const data = await location();
    setData(data);
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
