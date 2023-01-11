import React from 'react';
import s from './LSidebarNews.module.css';
import Weather from "./Weather/Weather";

const LSidebarNews = (props) => {
    return (
        <div className={s.LSidebarBlock}>
            <Weather/>
        </div>
    );
};

export default LSidebarNews;