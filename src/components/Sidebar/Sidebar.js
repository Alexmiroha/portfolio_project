import React from 'react';
import s from './Sidebar.module.css';
import Logo from './01Logo/Logo';
import { IconContext } from "react-icons";
import CollapseM from "./02SButtons/01Colapse/thisButton";
import NewsFeed from "./02SButtons/02NewsFeed/thisButton";
import FavPagesFeed from "./02SButtons/03Fav/thisButton";
import FriendGroups from "./02SButtons/04FriendGr/thisButton";
import Music from "./02SButtons/05Music/thisButton";
import Weather from "./02SButtons/06Weather/thisButton";
import Planner from "./02SButtons/07Planer/thisButton";
import ComunityBadges from "./02SButtons/08Comun/thisButton";
import AccStats from "./02SButtons/09Stats/thisButton";
import WidgetsManager from "./02SButtons/10WidgetsManager/thisButton";
import ProfileCompletition from "./03ProfileStatusField/ProfileCompletition";


function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <ul className={s.sidebarList}>
                <Logo />
                {/*!!!!!!!!!!styles 4 icons!!!!!!!!!!!!*/}
                <IconContext.Provider value={{ color: '#9a9fbf', size: '1.5em'}}>
                    <CollapseM />
                    <NewsFeed />
                    <FavPagesFeed />
                    <FriendGroups />
                    <Music />
                    <Weather />
                    <Planner />
                    <ComunityBadges />
                    <AccStats />
                    <WidgetsManager />
                </IconContext.Provider>
            </ul>
            <ProfileCompletition />
        </nav>
    );
}

export default Sidebar;