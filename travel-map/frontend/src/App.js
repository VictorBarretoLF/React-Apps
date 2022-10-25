import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";

import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "./findLocation/Geocoder";

// https://www.youtube.com/watch?v=JyPn_o_UJCM
// import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";

function App() {
  const [viewport, setViewport] = useState({
    longitude: -34.861,
    latitude: -7.11532,
    zoom: 14,
  });

  const mapRef = useRef();
  // console.log(navigator.geolocation.getCurrentPosition());
  // console.log(Geocoder);

  console.log(mapRef);

  useEffect(() => {}, []);

  return (
    <Fragment>
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          longitude: -34.861,
          latitude: -7.11532,
          zoom: 14,
        }}
        dragPan={true}
        mapboxAccessToken={
          "pk.eyJ1IjoiYmFycmV0b2xpbnMiLCJhIjoiY2w5b2h4YTZ1MDI4eTN2cXBudHpsanphayJ9.KyvZA8IIn_wymorOJ7zKTQ"
        }
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl position="top-left" />
        <Geocoder />
      </ReactMapGL>
    </Fragment>
  );
}

export default App;
