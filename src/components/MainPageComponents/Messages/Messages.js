import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Dialog/Message/Message";


const Messages = (props) => {

    let changeTextarea = (event) => {
        let text = event.target.value;
        props.changeMessageTextarea(text);
    }

    let sendMessage = () => {
        props.SendMessage();
    }


    let dialogsElement = props.messagesState.dialogsData.map((dialog, key) => <DialogItem name={dialog.name}
                                                                                          path={dialog.path}
                                                                                          key={dialog.id}/>);
    let messagesElement = props.messagesState.messagesData.map((message, key) => <Message message={message.message}
                                                                                          key={message.id}/>);


    return (
        <div className={s.messagesComp}>
            <ul className={s.dialogsList}>
                {dialogsElement}
            </ul>
            <div className={s.dialogArea}>
                <div className={s.dialodTittle}>DialogTitte</div>
                <div className={s.messagesArea}>
                    <ul className={s.messages}>
                        {messagesElement}
                    </ul>
                    <form className={s.sendMessageArea}>
                    <textarea name="messageArea" placeholder="Write your message"
                              value={props.messagesState.newMessageTextarea} onChange={changeTextarea}></textarea>
                        <input type="button" value="send" onClick={sendMessage}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Messages;
