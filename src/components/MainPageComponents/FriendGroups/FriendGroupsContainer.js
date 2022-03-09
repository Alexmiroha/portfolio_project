import React from 'react';
import {connect} from "react-redux";
import {
    getUsers, follow, unfollow
} from "../../../Redux/Reducer-FriendGroups";
import FriendGroupsAPIConnect from "./FriendGroupsAPIConnect";
import {
    getFollowing,
    getIsLoading,
    getPageSize,
    getSelectedPage,
    getUserss,
    getUsersTotalCount
} from "../../../Redux/Selectors-FriendGroups";

// let mapStateToProps = (state) => {
//     return {
//         users: state.friendGroupPage.users,
//         UersPageSize: state.friendGroupPage.UersPageSize,
//         UsersTotalCount: state.friendGroupPage.UsersTotalCount,
//         SelectedPage: state.friendGroupPage.SelectedPage,
//         isLoading: state.friendGroupPage.isLoading,
//         followingInProgress: state.friendGroupPage.followingInProgress,
//
//
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUserss(state),
        UersPageSize: getPageSize(state),
        UsersTotalCount: getUsersTotalCount(state),
        SelectedPage: getSelectedPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowing(state),


    }
}

export default connect(mapStateToProps, {getUsers, follow, unfollow})(FriendGroupsAPIConnect)