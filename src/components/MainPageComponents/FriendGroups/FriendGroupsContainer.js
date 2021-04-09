import React from 'react';
import {connect} from "react-redux";
import FriendGroups from "./FriendGroups";
import {FollowAC, SetUsersAC, UnfollowAC} from "../../../Redux/Reducer-FriendGroups";

let mapStateToProps = (state) => {
    return {
        users: state.friendGroupPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId));
        },
        unfollow: (userId) => {
            dispatch(UnfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(SetUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendGroups)