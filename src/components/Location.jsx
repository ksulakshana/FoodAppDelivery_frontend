import React, { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./Location.module.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function Location() {
  function openPopup(e) {
    e.target.openPopup();
  }

  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={13}
      // scrollWheelZoom={false}
      // style={{ width: "20rem", height: "20rem" }}
      style={{
        position: "relative",
        height: "20rem",
        width: "90vw",
        zIndex: 1,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[12.9716, 77.5946]}
        eventHandlers={{ add: openPopup }}
        style={{ position: "relative", right: "5rem" }}
      >
        <div
          className={styles.pop}
          style={{ display: "block", background: "black" }}
        >
          <p>McDonald’s South London</p>
        </div>
        <Popup closeButton={false} autoClose={false} closeOnClick={false}>
          <div className={styles.pop}>
            <p>McDonald’s South London</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Location;
