import React from 'react';
import s from './SidebarButton.module.css';
import { RiNewspaperLine } from 'react-icons/ri';
import {NavLink} from "react-router-dom";

function SidebarButton(props) {
    return (
        <li>
            <NavLink to={props.link} className={s.button}>
                <div className={s.iconSB}>{props.icon}</div>
                <div className={s.name}>{props.name}</div>
            </NavLink>
        </li>
    );
}






















export default SidebarButton;