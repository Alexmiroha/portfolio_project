import React from 'react';
import {
    changeMessageTextarea,
    SendMessage
} from "../../../Redux/Reducer-Messages";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withLoginRedirect} from "../../../HOC/withLoginRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesState: state.messagePage
    }
}

export default compose(
    connect(mapStateToProps, {changeMessageTextarea, SendMessage}), withLoginRedirect
)(Messages)
