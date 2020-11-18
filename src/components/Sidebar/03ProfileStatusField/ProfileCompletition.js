import React from 'react';
import s from './ProfileCompletition.module.css';

let classes = `${s.active} ${s.Mcolor} ${s.animate} ${s.progress}`;

function ProfileCompletition() {
    return (
        <div className={s.thisBlock}>
            <div className={s.skillsItem}>
                <div className={s.info}>
                    <div className={s.tittle}>Profile Completition</div>
                    <div className={s.units}>82%</div>
                </div>
                <div className={s.meter}>
                    <span className={classes}></span>
                </div>
            </div>
            <div className={s.text}>
                Complete
                <a href="" className={s.rText}> your profile </a>
                your profile so people can know more about you!
            </div>
        </div>

    );
}


export default ProfileCompletition;