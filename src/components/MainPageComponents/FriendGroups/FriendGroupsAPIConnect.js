import React from 'react';
import * as axios from "axios";
import FriendGroups from "./FriendGroups";

class FriendGroupsAPIConnect extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.SelectedPage}&count=${this.props.UsersTotalCount}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setSelectedPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.UersPageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
}


    render() {
                return <FriendGroups onPageChanged={this.onPageChanged}
                                     UsersTotalCount={this.props.UsersTotalCount}
                                     UersPageSize={this.props.UersPageSize}
                                     SelectedPage={this.props.SelectedPage}
                                     users={this.props.users}
                                     follow={this.props.follow}
                                     unfollow={this.props.unfollow}
                />
    }


}

export default FriendGroupsAPIConnect;