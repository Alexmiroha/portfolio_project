import React from 'react';
import s from './ProfileStatus.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        if (this.props.match.params.userID == this.props.loginedUserId) {
            this.setState( {
                editMode: true,
            })
        }
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {



        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <div className={s.status} onClick={this.activateEditMode}>{this.props.status}</div>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                </div>
                }
            </div>
        );
    }
}
;

let mapStateToProps = (state) => ({
    loginedUserId: state.header.userId
});

export default compose(
    connect(mapStateToProps, {}), withRouter)(ProfileStatus)
