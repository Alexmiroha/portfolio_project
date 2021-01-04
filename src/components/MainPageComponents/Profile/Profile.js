import React from "react";
import s from './Profile.module.css';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import MainContentBlock from "./MainContentBlock/MainContentBlock";

function Profile(props) {
    return (
        <main className={s.mainProfile}>
            <HeaderBlock/>
            <div className={s.contentWrapper}>

                <div className={s.LSidebarBlock}></div>

                <MainContentBlock profileData={props.profileData}/>


                <div className={s.RSidebarBlock}></div>

            </div>
        </main>
    );
}

export default Profile;