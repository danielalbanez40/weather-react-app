import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import styles from "./weatherApp.module.css";

const WeatherApp = () => {

    const [weather, setWeather] = useState(null);

    console.log({styles});
    useEffect(() => {
      loadInfo();

    }, [])
    useEffect(() => {
      document.title = `Weather | ${weather?.location.name}`;
    
      return () => {
        
      }
    }, [weather])
    
    

    async function loadInfo(city = 'london') {
        
        try {
            
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = await request.json();
            setWeather(json)
            console.log(json);

        } catch (error) {
            
        }


    }

    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city);
    }

  return (
    <div className={styles.weatherContainer}>
      <h1 className={styles.mainTitle}>Weather App</h1>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}

export default WeatherApp;