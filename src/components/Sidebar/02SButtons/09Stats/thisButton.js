import React from 'react';
import s from './thisButton.module.css';
import {BiStats} from "react-icons/bi";
import st from "../buttons.module.css";

function AccStats() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><BiStats /></div>
                <div className={st.name}>Account Stats</div>
            </a>
        </li>
    );
}






















export default AccStats;