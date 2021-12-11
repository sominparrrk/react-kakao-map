import React, { useState } from "react";
import { MapMarker, useMap } from "react-kakao-maps-sdk";

const EventMarker = ({ position, title }) => {
  const map = useMap();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MapMarker
      position={position}
      // @ts-ignore
      onClick={(marker) => {
        map.panTo(marker.getPosition());
        setIsOpen(true);
      }}
    >
      {isOpen && (
        <div style={{ minWidth: "150px" }}>
          <img
            alt="close"
            width="14"
            height="13"
            src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(false)}
          />
          <div style={{ padding: "5px", color: "#000" }}>{title}</div>
        </div>
      )}
    </MapMarker>
  );
};

export default EventMarker;
