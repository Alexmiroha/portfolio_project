import React from "react";
import s from './Profile.module.css';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import MainContentBlockContainer from "./MainContentBlock/MainContentBlockContainer";

function Profile(props) {
    return (
        <main className={s.mainProfile}>
            <HeaderBlock/>
            <div className={s.contentWrapper}>

                <div className={s.LSidebarBlock}></div>

                <MainContentBlockContainer />


                <div className={s.RSidebarBlock}></div>

            </div>
        </main>
    );
}

export default Profile;