import React from 'react';
import FriendGroups from "./FriendGroups";
import {usersAPI} from "../../../API/API";

class FriendGroupsAPIConnect extends React.Component {


    componentDidMount() {
        this.props.toggleIsLoading(true);
        usersAPI.getUsers(this.props.SelectedPage, this.props.UsersTotalCount).then(data => {
            debugger
            this.props.toggleIsLoading(false);
            this.props.SetUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.SetSelectedPage(pageNumber)
        this.props.toggleIsLoading(true);
        usersAPI.getUsers(pageNumber, this.props.UersPageSize).then(data => {
            this.props.toggleIsLoading(false);
            this.props.SetUsers(data.items);
        })
}


    render() {
                return <FriendGroups onPageChanged={this.onPageChanged}
                    {...this.props}
                />
    }


}

export default FriendGroupsAPIConnect;