import React from "react";
import { CustomOverlayMap, MapMarker, useMap } from "react-kakao-maps-sdk";
import useComponentVisible from "../../hooks/useComponentVisible";
import Overlay from "./Overlay";

const EventMarker = ({ position, title }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const map = useMap();

  return (
    <div ref={ref}>
      <MapMarker
        position={position}
        image={{
          src: "/img/trash-icon.svg", // 마커이미지의 주소입니다
          size: {
            width: 30,
            height: 30,
          }, // 마커이미지의 크기입니다
        }}
        // @ts-ignore
        onClick={(marker) => {
          map.panTo(marker.getPosition());
          setIsComponentVisible(true);
        }}
      />
      {isComponentVisible && (
        <>
          <CustomOverlayMap position={position} />
          <Overlay title={title} />
        </>
      )}
    </div>
  );
};

export default EventMarker;
