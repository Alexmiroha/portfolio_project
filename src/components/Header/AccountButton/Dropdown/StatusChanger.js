import React from 'react';
import s from "./StatusChanger.module.css";

const StatusChanger = (props) => {

    console.log(props)
    return (
        <li className={s.statusChanger}>
            <span className={s.status_icon} style={{ backgroundColor: props.BGColor}}/>
            <div className={s.name}>{props.title}</div>
        </li>
    );
};

export default StatusChanger;
