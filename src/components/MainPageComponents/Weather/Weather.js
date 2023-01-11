import React from 'react';
import s from './Weather.module.css';
import WeatherNews from '../NewsFeed/LSidebarNews/Weather/Weather'

function Weather(props) {
    return (
        <div className={s.Weather}>
            <h1>Weather</h1>
            <WeatherNews/>
        </div>
    );
}






















export default Weather;