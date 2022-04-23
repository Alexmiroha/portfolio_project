import React from 'react';
import s from './LSidebarBlock.module.css'
import ProfileIntro from "./ProfileIntro/ProfileIntro";
import ProfileBadges from "./ProfileBadges/ProfileBadges";

const LSidebarBlock = () => {
    return (
        <div className={s.sidebar}>
            <ProfileIntro/>
            <ProfileBadges/>
        </div>
    );
};

export default LSidebarBlock;
