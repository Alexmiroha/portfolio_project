import React from "react";
import s from './Profile.module.css';
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import MainContentBlockContainer from "./MainContentBlock/MainContentBlockContainer";
import RSidebarBlock from "./RSidebarBlock/RSidebarBlock";
import LSidebarBlock from "./LSidebarBlock/LSidebarBlock";

function Profile(props) {
    return (
        <main className={s.mainProfile}>
            <HeaderBlock fullName={props.profile?.fullName} contacts={props.profile?.contacts}
                         photos={props.profile?.photos} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <div className={s.contentWrapper}>

                <div className={s.LSidebarBlock}>
                    <LSidebarBlock/>
                </div>

                <MainContentBlockContainer />


                <div className={s.RSidebarBlock}>
                    <RSidebarBlock />
                </div>

            </div>
        </main>
    );
}

export default Profile;