import React from 'react';
import * as axios from "axios";
import FriendGroups from "./FriendGroups";

class FriendGroupsAPIConnect extends React.Component {


    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.SelectedPage}&count=${this.props.UsersTotalCount}`).then(response => {
            this.props.toggleIsLoading(false);
            this.props.SetUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.SetSelectedPage(pageNumber)
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.UersPageSize}`).then(response => {
            this.props.toggleIsLoading(false);
            this.props.SetUsers(response.data.items);
        })
}


    render() {
                return <FriendGroups onPageChanged={this.onPageChanged}
                    {...this.props}
                />
    }


}

export default FriendGroupsAPIConnect;