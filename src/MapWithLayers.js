import React from "react";
//import { MapContainer } from "react-leaflet";
//import { ComposableMap } from "react-simple-maps"
import { Map, Marker, Overlay } from "pigeon-maps"


function MapWithLayers() {
  return (
    <div className="map-with-layers">
     <Map height={520} defaultCenter={[52.4069200, 16.9299300]} defaultZoom={13}>
      <Marker width={50} anchor={[52.4069200, 16.9299300]} />
      <Overlay anchor={[52.4069200, 16.9299300]} offset={[240, 140]}>
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
          <path id="blob" d="M417,323.5Q335,397,235,423.5Q135,450,76,350Q17,250,85,166Q153,82,260,64.5Q367,47,433,148.5Q499,250,417,323.5Z" fill="#0099ff" fill-opacity="0.5"></path>
        </svg>
      </Overlay>
      <Overlay anchor={[52.4069200, 16.9299300]} offset={[700, 709]} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1580" width={1400} height={1580}>
          <rect width="1400" height="1500" fill="#0099ff" fill-opacity="0.2" />
        </svg>
      </Overlay>
      <Overlay anchor={[52.4069200, 16.9299300]} offset={[120, 69]}>
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
          <path id="blob" d="M417,323.5Q335,397,235,423.5Q135,450,76,350Q17,250,85,166Q153,82,260,64.5Q367,47,433,148.5Q499,250,417,323.5Z" fill="#0099ff" fill-opacity="0.7"></path>
        </svg>
      </Overlay>
    </Map>
    </div>
  );
}

export default MapWithLayers;
