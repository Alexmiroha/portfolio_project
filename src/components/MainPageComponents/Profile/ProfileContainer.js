import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../Redux/Reducer-Profile";
import {withRouter} from "react-router-dom";
import {withLoginRedirect} from "../../../HOC/withLoginRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        this.props.getProfile(userID)
    }
    


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getProfile}), withRouter, withLoginRedirect
)(ProfileContainer)