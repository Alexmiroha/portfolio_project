import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
        }, [props.status])

    let activateEditMode = () => {
        if (props.match.params.userID == props.loginedUserId) {
            setEditMode(true);
        }
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.statusWrapper}>
            {!editMode &&
            <div>
                <div className={s.status} onClick={activateEditMode}>{props.status}</div>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus={true}/>
            </div>
            }
        </div>
    );
};


let mapStateToProps = (state) => ({
    loginedUserId: state.app.userId
});

export default compose(
    connect(mapStateToProps, {}), withRouter)(ProfileStatus)
