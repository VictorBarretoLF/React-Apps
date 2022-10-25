import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";

const Geocoder = () => {
  const ctrl = new MapBoxGeocoder({
    accessToken:
      "pk.eyJ1IjoiYmFycmV0b2xpbnMiLCJhIjoiY2w5b2h4YTZ1MDI4eTN2cXBudHpsanphayJ9.KyvZA8IIn_wymorOJ7zKTQ",
    marker: false,
    collapsed: true,
  });

  ctrl.on("result", (e) => {
    console.log(e.result.geometry.coordinates);
  });
  useControl(() => ctrl);
  //   ctrl.on("result", (e) => {
  //     const coords = e.result.geometry.coordinates;
  //     dispatch({
  //       type: "UPDATE_LOCATION",
  //       payload: { lng: coords[0], lat: coords[1] },
  //     });
  //   });
  return null;
};

export default Geocoder;
