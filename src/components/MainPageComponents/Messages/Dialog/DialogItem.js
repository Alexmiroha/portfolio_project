import React from 'react';
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={s.dialog}>
            <NavLink to={props.path}>{props.name}</NavLink>
        </li>
    );
};

export default DialogItem;
