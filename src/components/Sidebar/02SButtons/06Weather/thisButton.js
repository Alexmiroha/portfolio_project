import React from 'react';
import s from './thisButton.module.css';
import {TiWeatherPartlySunny} from "react-icons/ti";
import st from "../buttons.module.css";

function Weather() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><TiWeatherPartlySunny /></div>
                <div className={st.name}>Weather App</div>
            </a>
        </li>
    );
}






















export default Weather;