import React from 'react';
import {changeMessageTextareaActionCreator,
    SendMessageActionCreator} from "../../../Redux/Reducer-Messages";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let changeTextarea = (text) => {
        props.dispatch(changeMessageTextareaActionCreator(text));
    }

    let sendMessage = () => {
        props.dispatch(SendMessageActionCreator());
    }

    return <Messages changeMessage={changeTextarea} SendMessage={sendMessage} messagesState={props.messagesState}/>;
};

export default MessagesContainer;
