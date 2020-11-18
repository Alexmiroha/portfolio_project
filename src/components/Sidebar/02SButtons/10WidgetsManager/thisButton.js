import React from 'react';
import s from './thisButton.module.css';
import {BsColumns} from "react-icons/bs";
import st from "../buttons.module.css";


function WidgetsManager() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><BsColumns /></div>
                <div className={st.name}>Manage Widgets</div>
            </a>
        </li>
    );
}






















export default WidgetsManager;