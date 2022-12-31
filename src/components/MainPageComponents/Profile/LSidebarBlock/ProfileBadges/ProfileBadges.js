import React from 'react';
import s from './ProfileBadges.module.css'
import badge1 from "../../../../../img/Badges/badge1 (1).webp";
import badge2 from "../../../../../img/Badges/badge3 (1).webp"
import badge3 from "../../../../../img/Badges/badge4.webp"
import badge4 from "../../../../../img/Badges/badge6.webp"
import badge5 from "../../../../../img/Badges/badge7.webp"
import badge6 from "../../../../../img/Badges/badge8.webp"
import badge7 from "../../../../../img/Badges/badge10.webp"
import badge8 from "../../../../../img/Badges/badge11.webp"
import badge9 from "../../../../../img/Badges/badge12.webp"
import badge10 from "../../../../../img/Badges/badge13.webp"

const Badge = (props) => {
    return (
        <div className={s.badge}>
            <img src={props.image} alt=""/>
            {props.count? <div className={s.badgeCount}>{props.count}</div> : <div></div>}
        </div>
    )

}

const ProfileBadges = () => {
    return (
        <div className={s.ProfileBadges}>
            <h6 className={s.mainTitle}>Profile Badges</h6>
            <div className={s.badgesBlock}>
                <Badge image={badge1} count={1}/>
                <Badge image={badge2}/>
                <Badge image={badge3}/>
                <Badge image={badge4} count={2}/>
                <Badge image={badge5}/>
                <Badge image={badge6}/>
                <Badge image={badge7} count={5}/>
                <Badge image={badge8}/>
                <Badge image={badge9}/>
                <Badge image={badge10}/>
            </div>
        </div>
    );
};

export default ProfileBadges;
