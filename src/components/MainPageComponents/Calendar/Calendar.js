import React from 'react';
import s from './Calendar.module.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarReact = () => {
    return (
        <div className={s.calendarWrapper}>
            <Calendar />
        </div>
    );
};

export default CalendarReact;
