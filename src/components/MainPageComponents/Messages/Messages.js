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

let messageText = React.createRef();

let sendMessage = () => {
    let message = messageText.current.value;
    alert(message);
}

const Messages = (props) => {
    // функції, які приміняють метод map до даних в масивах, і перероблюють їх в масив з компонентами
    let dialogsElement = props.messagesState.dialogsData.map(dialog => <DialogItem name={dialog.name} path={dialog.path}/>);
    let messagesElement = props.messagesState.messagesData.map(message => <Message message={message.message}/>);
    return (
        <div className={s.messagesComp}>
            <ul className={s.dialogsList}>
                {dialogsElement}
            </ul>
            <div className={s.dialogArea}>
                <ul className={s.messages}>
                    {messagesElement}
                </ul>
                <form className={s.sendMessageArea}>
                    <textarea name="messageArea" ref={messageText} cols="30" rows="10" placeholder="Write your message"></textarea>
                    <input type="button" value="send" onClick={sendMessage}/>
                </form>
            </div>
        </div>
    );
};

export default Messages;
