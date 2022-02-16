import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Dialog/Message/Message";
import {Field, reduxForm} from "redux-form";


const MessageReduxForm = reduxForm({ form: "MessageForm"}) (MessageForm);

function MessageForm(props) {
    return <form onSubmit={props.handleSubmit} className={s.sendMessageArea}>
        <Field
            component="textarea"
            name="messageTextarea"
            placeholder="Write your message"
            >
        </Field>
        <button>Send</button>
    </form>;
}

const Messages = (props) => {

    let addNewMessage = (values) => {
        props.SendMessage(values.messageTextarea)
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
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Messages;
