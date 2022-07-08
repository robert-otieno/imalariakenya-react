import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@mui/material'

import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI.js'
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'

const App = () => {
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getWeatherData(coords.lat, coords.lng).then((data) => setWeatherData(data));
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
    }
  }, [bounds, coords])

  return (
    <>
    <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <List />
            <List  isLoading={isLoading} places={places} childClicked={childClicked} />
          </Grid>
          <Grid item xs={12} sm={6} md={8} xl={9}>
            <Map />
            <Map setChildClicked={setChildClicked} setBounds={setBounds} setCoords={setCoords}  places={places} weatherData={weatherData} />
          </Grid>
        </Grid>
    </>
  )
}

export default App