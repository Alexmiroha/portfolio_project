import React from 'react';
import s from './LSidebarNews.module.css';
import Weather from "./Weather/Weather";
import {Calendar} from "react-calendar";

const LSidebarNews = (props) => {
    return (
        <div className={s.LSidebarBlock}>
            <div className={`${s.weatherWidget} ${s.widget} weatherSidebar`}>
                <Weather/>
            </div>
            <div className={`${s.calendarWidget} ${s.widget}`}>
                <Calendar/>
            </div>
        </div>
    );
};

export default LSidebarNews;