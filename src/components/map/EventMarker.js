import React from "react";
import { CustomOverlayMap, MapMarker, useMap } from "react-kakao-maps-sdk";
import useComponentVisible from "../../hooks/useComponentVisible";
import Overlay from "./Overlay";

const EventMarker = ({ position, name, quantity }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const map = useMap();

  return (
    <div ref={ref}>
      <MapMarker
        position={position}
        image={{
          src: "/img/trash-icon.svg",
          size: {
            width: 30,
            height: 30,
          },
        }}
        // @ts-ignore
        onClick={(marker) => {
          setIsComponentVisible(false);
          map.panTo(marker.getPosition());
          setIsComponentVisible(true);
        }}
      />
      {isComponentVisible && (
        <>
          <CustomOverlayMap position={position} />
          <Overlay name={name} quantity={quantity} />
        </>
      )}
    </div>
  );
};

export default EventMarker;
