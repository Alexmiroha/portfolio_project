import React from 'react';
import s from './Weather.module.css'
import ReactWeather, { useVisualCrossing } from 'react-open-weather';

const Weather = (props) => {

    const { data, isLoading, errorMessage,} = useVisualCrossing({
        key: '5Y7YF4ZUF8RRBLFYM8XKU74QR',
        lat: '52.238406',
        lon: '21.018845',
        lang: 'en',
        unit: 'metric', // values are (metric,us,uk)
    });

    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#0181C2',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#4BC4F7',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
    };

    return (
        <div className={s.weatherWrapper}>
            <div>
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