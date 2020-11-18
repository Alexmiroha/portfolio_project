import React from 'react';
import s from './SidebarButton.module.css';
import { RiNewspaperLine } from 'react-icons/ri';
import st from "../buttons.module.css";

function SidebarButton(props) {
    return (
        <li>
            <a href={props.link} className={s.button}>
                <div className={st.iconSB}>{props.icon}</div>
                <div className={st.name}>{props.name}</div>
            </a>
        </li>
    );
}






















export default SidebarButton;