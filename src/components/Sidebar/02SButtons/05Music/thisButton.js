import React from 'react';
import s from './thisButton.module.css';
import {BsMusicPlayer} from "react-icons/bs";
import st from "../buttons.module.css";

function Music() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><BsMusicPlayer /></div>
                <div className={st.name}>Music & Playlists</div>
            </a>
        </li>
    );
}






















export default Music;