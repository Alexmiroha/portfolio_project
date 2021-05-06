import React from 'react';
import {connect} from "react-redux";
import {FollowAC, SetUsersAC, UnfollowAC, SetSelectedPageAC, setUsersTotalCountAC} from "../../../Redux/Reducer-FriendGroups";
import FriendGroupsAPIConnect from "./FriendGroupsAPIConnect";

let mapStateToProps = (state) => {
    return {
        users: state.friendGroupPage.users,
        UersPageSize: state.friendGroupPage.UersPageSize,
        UsersTotalCount: state.friendGroupPage.UsersTotalCount,
        SelectedPage: state.friendGroupPage.SelectedPage

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
        },
        setSelectedPage: (pageNumber) => {
            dispatch(SetSelectedPageAC(pageNumber));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendGroupsAPIConnect)