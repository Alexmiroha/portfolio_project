import React from 'react';
import s from './thisButton.module.css';
import {GoCalendar} from "react-icons/go";
import st from "../buttons.module.css";

function Planner() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><GoCalendar /></div>
                <div className={st.name}>Calendar and Events</div>
            </a>
        </li>
    );
}






















export default Planner;