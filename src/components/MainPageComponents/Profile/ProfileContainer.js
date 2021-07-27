import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../../Redux/Reducer-Profile";
import {withRouter} from "react-router-dom";
import {withLoginRedirect} from "../../../HOC/withLoginRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 17555;
        }
        this.props.getProfile(userID);
        this.props.getUserStatus(userID);

    }
    


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}), withRouter, withLoginRedirect
)(ProfileContainer)