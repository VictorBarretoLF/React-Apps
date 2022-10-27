import { Fragment, useEffect, useRef, useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import { Room, Star } from "@mui/icons-material";

import "mapbox-gl/dist/mapbox-gl.css";
import { Button, CardContent, Typography } from "@mui/material";
// https://www.youtube.com/watch?v=JyPn_o_UJCM
// import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";

function App() {
  return (
    <Fragment>
      <Map
        initialViewState={{
          longitude: -34.7966738,
          latitude: -7.1487534,
          zoom: 5,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={-34.7966738} latitude={-7.1487534}>
          <Room
            style={{
              fontSize: 50,
              color: "slate-blue",
            }}
          />
        </Marker>
        <Popup longitude={-34.7966738} latitude={-7.1487534} anchor="left">
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                textDecoration: "underline",
                color: "tomato",
              }}
            >
              Place
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                margin: "4px 0px",
                fontWeight: "bold",
              }}
            >
              Farol de Cabo Branco
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textDecoration: "underline",
                color: "tomato",
              }}
            >
              Review
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                margin: "4px 0px",
              }}
            >
              Beautiful place. I like it.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textDecoration: "underline",
                color: "tomato",
              }}
            >
              Rating
            </Typography>
          </CardContent>
        </Popup>
      </Map>
    </Fragment>
  );
}

export default App;
