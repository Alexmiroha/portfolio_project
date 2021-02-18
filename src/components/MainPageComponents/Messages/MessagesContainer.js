import React from 'react';
import {changeMessageTextareaActionCreator,
    SendMessageActionCreator} from "../../../Redux/Reducer-Messages";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesState: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            dispatch(changeMessageTextareaActionCreator(text));
        },
        SendMessage: () => {
            dispatch(SendMessageActionCreator());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;
