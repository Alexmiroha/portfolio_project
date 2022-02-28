import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./DropdownButton.module.css";

const ReusableSidebarDropdownButton = (props) => {
    return (
        <li onClick={props.onClick} className={s.button}>
            <NavLink to={props.path}>
                <div className={s.itemsWrapper}>
                    <div className={s.icon}>{props.icon}</div>
                    <div className={s.buttonName}>{props.name}</div>
                </div>
            </NavLink>
        </li>
    );
};

export default ReusableSidebarDropdownButton;
