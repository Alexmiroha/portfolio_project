import React from 'react';
import s from './LSidebarBlock.module.css'
import ProfileIntro from "./ProfileIntro/ProfileIntro";
import ProfileBadges from "./ProfileBadges/ProfileBadges";
import Playlist from "./Playlist/Playlist";

const LSidebarBlock = () => {
    return (
        <div className={s.sidebar}>
            <ProfileIntro/>
            <ProfileBadges/>
            <Playlist/>
        </div>
    );
};

export default LSidebarBlock;
