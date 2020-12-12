import React from 'react';
import s from './Sidebar.module.css';
import { IconContext } from "react-icons";
import {RiNewspaperLine} from "react-icons/ri";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {TiStarOutline, TiWeatherPartlySunny} from "react-icons/ti";
import {HiOutlineUserGroup} from "react-icons/hi";
import {BsColumns, BsMusicPlayer} from "react-icons/bs";
import {GoCalendar} from "react-icons/go";
import {BiBadgeCheck, BiStats} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import logo from "./logo.png";


let activeClasses = `${s.activeCompl} ${s.textCompl} ${s.animate}`;


function Sidebar({ active, setActive} ) {
    return (
        <nav className={active ? `${s.sidebar} ${s.active} ${s.move2}` : `${s.sidebar} ${s.move1}`}>
            <ul className={s.sidebarList}>
                <li>
                    <NavLink to="/profile" className={s.logo}>
                        <img src={logo}  className={s.imgLogo} alt=""/>
                        <h6 className={s.logoName}>Olympus</h6>
                    </NavLink>
                </li>
                {/*!!!!!!!!!!styles 4 icons!!!!!!!!!!!!*/}
                <IconContext.Provider value={{ className: 'react-icons', size: '1.5em' }}>
                    <li  className={`${s.button} ${s.collapseMenu}`} onClick={() => setActive(!active)}>
                            <div className={s.iconSB}><AiOutlineCloseCircle /></div>
                            <div className={s.buttonName}>Collapse Menu</div>
                    </li>
                    <li>
                        <NavLink to='/feed' className={s.button}>
                            <div className={s.iconSB}><RiNewspaperLine /></div>
                            <div className={s.buttonName}>News Feed</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/fav' className={s.button}>
                            <div className={s.iconSB}><TiStarOutline /></div>
                            <div className={s.buttonName}>Fav Pages Feed</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/friends' className={s.button}>
                            <div className={s.iconSB}><HiOutlineUserGroup /></div>
                            <div className={s.buttonName}>Friend Groups</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/music' className={s.button}>
                            <div className={s.iconSB}><BsMusicPlayer /></div>
                            <div className={s.buttonName}>Music & Playlists</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/weather' className={s.button}>
                            <div className={s.iconSB}><TiWeatherPartlySunny /></div>
                            <div className={s.buttonName}>News Feed</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/calendar' className={s.button}>
                            <div className={s.iconSB}><GoCalendar /></div>
                            <div className={s.buttonName}>Calendar and Events</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/badges' className={s.button}>
                            <div className={s.iconSB}><BiBadgeCheck /></div>
                            <div className={s.buttonName}>Community Badges</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/stats' className={s.button}>
                            <div className={s.iconSB}><BiStats /></div>
                            <div className={s.buttonName}>Account Stats</div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/widgets' className={s.button}>
                            <div className={s.iconSB}><BsColumns /></div>
                            <div className={s.buttonName}>Manage Widgets</div>
                        </NavLink>
                    </li>
                </IconContext.Provider>
            </ul>
            <div className={active ? `${s.profileCompletitionBlock} ${s.hideCompl}` : `${s.profileCompletitionBlock} ${s.showCompl}`}>
                <div className={s.compSkillsItem}>
                    <div className={s.infoCompl}>
                        <div className={s.tittleCompl}>Profile Completition</div>
                        <div className={s.unitsCompl}>82%</div>
                    </div>
                    <div className={s.meterCompl}>
                        <span className={s.progress}></span>
                    </div>
                </div>
                <div className={s.textCompl}>
                    Complete
                    <NavLink to="/profile" className={s.rText}> your profile </NavLink>
                    your profile so people can know more about you!
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;