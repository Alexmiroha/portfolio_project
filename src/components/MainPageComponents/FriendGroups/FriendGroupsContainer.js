import React from 'react';
import {connect} from "react-redux";
import {
    Follow,
    SetUsers,
    Unfollow,
    SetSelectedPage,
    setUsersTotalCount,
    toggleIsLoading,
    toggleFollowingInProgress
} from "../../../Redux/Reducer-FriendGroups";
import FriendGroupsAPIConnect from "./FriendGroupsAPIConnect";

let mapStateToProps = (state) => {
    return {
        users: state.friendGroupPage.users,
        UersPageSize: state.friendGroupPage.UersPageSize,
        UsersTotalCount: state.friendGroupPage.UsersTotalCount,
        SelectedPage: state.friendGroupPage.SelectedPage,
        isLoading: state.friendGroupPage.isLoading,
        followingInProgress: state.friendGroupPage.followingInProgress,


    }
}

export default connect(mapStateToProps, {Follow, Unfollow, SetUsers, SetSelectedPage, setUsersTotalCount, toggleIsLoading, toggleFollowingInProgress})(FriendGroupsAPIConnect)