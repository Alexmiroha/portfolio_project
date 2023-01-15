import React from 'react';
import s from './Weather.module.css'
import ReactWeather, { useVisualCrossing } from 'react-open-weather';

// https://www.npmjs.com/package/react-open-weather

const Weather = (props) => {

    const { data, isLoading, errorMessage,} = useVisualCrossing({
        key: '5Y7YF4ZUF8RRBLFYM8XKU74QR',
        lat: '52.238406',
        lon: '21.018845',
        lang: 'en',
        unit: 'metric', // values are (metric,us,uk)
    });

    const customStyles = {
        fontFamily:  'Roboto, sans-serif',
        gradientStart:  '#00a7ff',
        gradientMid:  '#0076af',
        gradientEnd:  '#0076af',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#006A9D',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#fff',
        forecastDescColor:  '#fff',
        forecastRangeColor:  '#fff',
        forecastIconColor:  '#4BC4F7',
    };

    return (
        <div className={s.weatherWrapper}>
            <div className={s.widget}>
                <ReactWeather
                    theme={customStyles}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel="Warsaw, Poland"
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div>
        </div>
    );
};

export default Weather;