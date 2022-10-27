import { Fragment, useEffect, useRef, useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import { Room, Star } from "@mui/icons-material";

import "mapbox-gl/dist/mapbox-gl.css";
import { Button, CardContent, Grid, Typography } from "@mui/material";

import axios from "axios";
// https://www.youtube.com/watch?v=JyPn_o_UJCM
// import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";

const PinsComponent = ({ data }) => {
  const { title, lat, long, desc, username } = data;
  console.log(data);
  return (
    <Fragment>
      <Marker longitude={long} latitude={lat}>
        <Room
          style={{
            fontSize: 50,
            color: "slate-blue",
          }}
        />
      </Marker>
      <Popup longitude={long} latitude={lat} anchor="left">
        <CardContent sx={{ width: 240, maxWidth: "md" }}>
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
            {title}
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
            {desc}
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
          <Grid container spacing={1}>
            <Grid item>
              <Star sx={{ color: "gold", fontSize: 20 }} />
            </Grid>
            <Grid item>
              <Star sx={{ color: "gold", fontSize: 20 }} />
            </Grid>
            <Grid item>
              <Star sx={{ color: "gold", fontSize: 20 }} />
            </Grid>
            <Grid item>
              <Star sx={{ color: "gold", fontSize: 20 }} />
            </Grid>
            <Grid item>
              <Star sx={{ color: "gold", fontSize: 20 }} />
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
              color: "tomato",
            }}
          >
            Information
          </Typography>
          <Typography>
            Created by{" "}
            <Typography variant="span" sx={{ fontWeight: "bold" }}>
              {username}
            </Typography>
          </Typography>
          <Typography sx={{ fontSize: 14 }}>1 hour ago</Typography>
        </CardContent>
      </Popup>
    </Fragment>
  );
};

function App() {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    getPins();
  }, []);

  const getPins = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/pin");
      setPins(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Map
        initialViewState={{
          longitude: -34.7966738,
          latitude: -7.1487534,
          zoom: 5,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        style={{ width: "90vw", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl position="top-left" />
        {pins.map((pin) => {
          return <PinsComponent key={pin._id} data={pin} />;
        })}
      </Map>
    </Fragment>
  );
}

export default App;
