import React from 'react';
import s from './thisButton.module.css';
import {TiStarOutline} from "react-icons/ti";
import st from "../buttons.module.css";

function FavPagesFeed() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><TiStarOutline /></div>
                <div className={st.name}>Fav Pages Feed</div>
            </a>
        </li>
    );
}






















export default FavPagesFeed;