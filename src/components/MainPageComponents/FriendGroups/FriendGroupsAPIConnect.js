import React from 'react';
import FriendGroups from "./FriendGroups";

class FriendGroupsAPIConnect extends React.Component {


    componentDidMount() {

        this.props.getUsers(this.props.SelectedPage, this.props.UsersTotalCount);
    }



    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.UersPageSize);
    }


    render() {
        return <FriendGroups onPageChanged={this.onPageChanged}
                             {...this.props}
        />
    }


}

export default FriendGroupsAPIConnect;