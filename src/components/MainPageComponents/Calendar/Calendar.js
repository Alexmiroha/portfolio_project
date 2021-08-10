import React from 'react';
import s from './Calendar.module.css';

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

class Calendar extends React.Component {

    state = {
        monthNames: ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"],
        weekDayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        currentDate: date.getDate(),
        // 1-31
        currentMounth: date.getMonth(),
        // 0-11
        currentYear: date.getFullYear(),
        // 2000- -2021- 2050+
        currentDayOfWeek: new Date(year, month, day).toString().substr(0,3),
        // Mon-Sun
        firstDayInMonth: new Date(year, month, 1).toString().substr(0,3),
        // Mon-Sun
        lastDayInMonth: new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString('eu').substr(0, 2),
        // 28-31
    }


    render() {



        const {monthNames, weekDayNames, currentDate, currentMounth, currentYear,
            currentDayOfWeek, firstDayInMonth, lastDayInMonth} = this.state;

        return (
            <div className={s.Calendar}>
                <div>test {currentYear}</div>
                <header className={s.header}>
                    <button>{'<'}</button>
                        <div className={s.moth}>
                            <div>{monthNames[currentMounth]}</div>
                            <div>{currentYear}</div>
                        </div>
                    <button>{'>'}</button>
                </header>

                <table className={s.table}>
                    <div className={s.week}>
                        {weekDayNames.map(day =>
                            <td className={s.day}>{day}</td>
                        )}
                    </div>
                    <div className={s.dates}>

                    </div>

                </table>

            </div>
        );
    }

}





















export default Calendar;