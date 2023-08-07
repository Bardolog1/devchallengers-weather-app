import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LeftViewer from './components/LeftViewer';
import RightViewer from './components/RightViewer';
import { useFetch }   from "./hooks/useFetch";



const AppCont = styled.div`
  background: #100E1D;
  min-height: 100vh;
  width: 100%;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const App = () => {

  // apiKey incluida desde un fichero externo de variables de entorno indexado en el .gitignore
  const apiKey = process.env.REACT_APP_API_KEY;
  const [lati, setLati] = useState('4.6097');
  const [longi, setLongi] = useState('-74.0817');
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}`;
  const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${longi}&appid=${apiKey}`;
  
  const { data: weatherData } = useFetch(weatherUrl);
  const { data: dailyData} = useFetch(dailyUrl);
 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
 
  const [searchCity, setSearchCity] = useState('bogota');
 
  const temp = weatherData?.main?.temp || 0;
  const descri = weatherData?.weather[0]?.description || "Sin datos";
  const cityApi = weatherData?.name || "Ciudad desconocida";
  const country = weatherData?.sys?.country || "Desconocido";
  const wind = (weatherData?.wind?.speed * 3.6).toFixed(1) || 0;
  const humidity = (weatherData?.main?.humidity)?.toFixed(0) || 0;
  const pressure = (weatherData?.main?.pressure)?.toFixed(0) || 0;
  const visibility = (weatherData?.visibility/1000)?.toFixed(0) || 0;
  const degreeWind = weatherData?.wind?.deg || 0;
  const daysWeather = dailyData?.list || [];


  useEffect(() => {
    setLati(searchCity.coord?.lat || '4.6097');
    setLongi(searchCity.coord?.lon || '-74.0817');
  }, [searchCity]);
  

  const toggleSearchView = () => {
      setIsSearchOpen((prevState) => !prevState);
  };

  const handleDegreeChange = () => {
    setIsCelsius((prevState) => !prevState);
  }

  const handleCityChange = (eCity) => {
    toggleSearchView();
    setSearchCity(eCity);
  }

  const handleGeoLocation = (geo) => {
    setLati(geo.coords.latitude);
    setLongi(geo.coords.longitude);
  }
  
  return (
    <AppCont>
       <LeftViewer 
        handleCityChange={handleCityChange}
        isSearchOpen={isSearchOpen} 
        toggleSearchView={toggleSearchView} 
        temp={temp} 
        descri={descri}
        city={cityApi}
        country={country}
        units={isCelsius}
        handleGeoLocation={handleGeoLocation}
      />
      <RightViewer
        degree={isCelsius}
        handleDegreeChange={handleDegreeChange}
        daylyData={daysWeather}
        isCelsius={isCelsius}
        wind={wind}
        humidity={humidity}
        pressure={pressure}
        visibility={visibility}
        degreeWind={degreeWind}
      />
    </AppCont>
    
  );
};

export default App;
