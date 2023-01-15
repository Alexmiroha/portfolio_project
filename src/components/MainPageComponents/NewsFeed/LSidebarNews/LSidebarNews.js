import React from 'react';
import s from './LSidebarNews.module.css';
import Weather from "./Weather/Weather";

const LSidebarNews = (props) => {
    return (
        <div className={s.LSidebarBlock}>
            <div className={s.widget}>
                <Weather/>
            </div>
        </div>
    );
};

export default LSidebarNews;