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

const ProfileBadges = () => {
    return (
        <div className={s.ProfileBadges}>
            <h6 className={s.mainTitle}>Profile Badges</h6>
            <div className={s.badgesBlock}>
                <div className={s.badge}>
                    <img src={badge1} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge2} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge3} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge4} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge5} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge6} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge7} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge8} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge9} alt=""/>
                </div>
                <div className={s.badge}>
                    <img src={badge10} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ProfileBadges;
