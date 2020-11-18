import React from 'react';
import s from './thisButton.module.css';
import { RiNewspaperLine } from 'react-icons/ri';
import st from "../buttons.module.css";

function NewsFeed() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><RiNewspaperLine /></div>
                <div className={st.name}>News Feed</div>
            </a>
        </li>
    );
}






















export default NewsFeed;