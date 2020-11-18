import React from 'react';
import s from './thisButton.module.css';
import {BiBadgeCheck} from "react-icons/bi";
import st from "../buttons.module.css";

function ComunityBadges() {
    return (
        <li>
            <a href="" className={s.button}>
                <div  className={st.iconSB}><BiBadgeCheck /></div>
                <div className={st.name}>Comunity Badges</div>
            </a>
        </li>
    );
}






















export default ComunityBadges;