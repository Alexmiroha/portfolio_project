import React from 'react';
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={s.dialog}>
            <NavLink to={props.path}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <li className={s.message}>{props.message}</li>
    )
}

let dialogsData = [
    {id: 1, name: "Vas'an", path: "/messages/1"},
    {id: 2, name: "Igor", path: "/messages/2"},
    {id: 3, name: "Masha", path: "/messages/3"},
    {id: 4, name: "Sveta", path: "/messages/4"},
    {id: 5, name: "Andrey", path: "/messages/5"},
    {id: 6, name: "Yuliya", path: "/messages/6"},
    {id: 7, name: "Katya", path: "/messages/7"},
]
let messagesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "I'm Vas'an"},
    {id: 3, message: "And today I will show U"},
    {id: 4, message: "How to play in this game"},
    {id: 5, message: "Let's Start!!!"},
    {id: 6, message: "Are U ready???"},
]
// імітація файлів з бази даних, де є дані діалогів, повідосленнь


let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} path={dialog.path}/>);
let messagesElement = messagesData.map(message => <Message message={message.message}/>);
// функції, які приміняють метод map до даних в масивах, і перероблюють їх в масив з компонентами

const Messages = () => {
    return (
        <div className={s.messagesComp}>
            <ul className={s.dialogsList}>
                {dialogsElement}
            </ul>
            <div className={s.dialogArea}>
                <ul className={s.messages}>
                    {messagesElement}
                </ul>
            </div>
        </div>
    );
};

export default Messages;
