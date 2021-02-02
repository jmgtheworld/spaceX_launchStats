import { useState, useCallback, useRef } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { Spinner } from 'react-bootstrap';

import mapStyles from "./mapStyles"

const mapContainerStyle = {
  height: "65vh",
  width: "100%",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 28.522442668101252,
  lng: -80.86678503000974,
};

export default function Map(props) {

  const {lat, lng} = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC33XtdGBQ9QDcGC2wC2GF31lDH2-em0qI",
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (!isLoaded) return <Spinner animation="border" variant="secondary" />;

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
      <Marker
        key={`${lat}-${lng}`}
        position={{ lat: lat, lng: lng }}
      />
      </GoogleMap>
    </div>
  )
}
