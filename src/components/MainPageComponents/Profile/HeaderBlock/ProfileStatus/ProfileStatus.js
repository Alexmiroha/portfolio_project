import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
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
                    <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                </div>
                }
            </div>
        );
    }
}
;

export default ProfileStatus;
