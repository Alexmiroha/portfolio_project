import React from 'react';
import s from './LSidebarBlock.module.css'
import ProfileIntro from "./ProfileIntro/ProfileIntro";

const LSidebarBlock = () => {
    return (
        <div className={s.sidebar}>
            <ProfileIntro/>
        </div>
    );
};

export default LSidebarBlock;
