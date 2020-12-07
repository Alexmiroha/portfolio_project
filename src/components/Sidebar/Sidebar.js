import React from 'react';
import s from './Sidebar.module.css';
import Logo from './01Logo/Logo';
import { IconContext } from "react-icons";
import SidebarButton from "./02SButtons/Button/SidebarButton";
import ProfileCompletition from "./03ProfileStatusField/ProfileCompletition";
import {RiNewspaperLine} from "react-icons/ri";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {TiStarOutline, TiWeatherPartlySunny} from "react-icons/ti";
import {HiOutlineUserGroup} from "react-icons/hi";
import {BsColumns, BsMusicPlayer} from "react-icons/bs";
import {GoCalendar} from "react-icons/go";
import {BiBadgeCheck, BiStats} from "react-icons/bi";


function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <ul className={s.sidebarList}>
                <Logo />
                {/*!!!!!!!!!!styles 4 icons!!!!!!!!!!!!*/}
                <IconContext.Provider value={{ className: 'react-icons', size: '1.5em' }}>
                    <SidebarButton icon=<AiOutlineCloseCircle /> name='Collapse Menu' link='' type='checkbox'/>
                    <SidebarButton icon=<RiNewspaperLine /> name='News Feed' link='/feed'/>
                    <SidebarButton icon=<TiStarOutline /> name='Fav Pages Feed' link='/fav'/>
                    <SidebarButton icon=<HiOutlineUserGroup /> name='Friend Groups' link='/friends'/>
                    <SidebarButton icon=<BsMusicPlayer /> name='Music & Playlists' link='/music'/>
                    <SidebarButton icon=<TiWeatherPartlySunny /> name='Weather App' link='weather'/>
                    <SidebarButton icon=<GoCalendar /> name='Calendar and Events' link='calendar' />
                    <SidebarButton icon=<BiBadgeCheck /> name='Community Badges' link='badges'/>
                    <SidebarButton icon=<BiStats /> name='Account Stats' link='stats'/>
                    <SidebarButton icon=<BsColumns /> name='Manage Widgets' link='widgets'/>
                </IconContext.Provider>
            </ul>
            <ProfileCompletition />
        </nav>
    );
}

export default Sidebar;