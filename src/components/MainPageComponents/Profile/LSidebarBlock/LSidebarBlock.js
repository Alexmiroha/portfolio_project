import React from 'react';
import s from './LSidebarBlock.module.css'
import ProfileIntro from "./ProfileIntro/ProfileIntro";
import ProfileBadges from "./ProfileBadges/ProfileBadges";
import Playlist from "./Playlist/Playlist";
import LastVideos from "./LastVideos/LastVideos";

const LSidebarBlock = () => {
    return (
        <div className={s.sidebar}>
            <ProfileIntro/>
            <ProfileBadges/>
            <Playlist/>
            <LastVideos/>
        </div>
    );
};

export default LSidebarBlock;
