import React from 'react';
import {changeMessageTextarea,
    SendMessage} from "../../../Redux/Reducer-Messages";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withLoginRedirect} from "../../../HOC/withLoginRedirect";

let mapStateToProps = (state) => {
    return {
        messagesState: state.messagePage
    }
}

let LoginRedirectComponent = withLoginRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, {changeMessageTextarea, SendMessage}) (LoginRedirectComponent);

export default MessagesContainer;
