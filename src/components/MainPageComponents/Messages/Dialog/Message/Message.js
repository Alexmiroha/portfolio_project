import React from 'react';
import s from "../../Messages.module.css";

const Message = (props) => {
    return (
        <li className={s.message}>{props.message}</li>
    );
};

export default Message;
