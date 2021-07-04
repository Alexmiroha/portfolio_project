import React from 'react';
import {connect} from "react-redux";
import {
    getUsers, follow, unfollow
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

export default connect(mapStateToProps, {getUsers, follow, unfollow})(FriendGroupsAPIConnect)