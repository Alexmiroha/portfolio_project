import React from "react";
import s from './HeaderBlock.module.css';
import header from '../img/top-header.jpg';
import avatar from '../img/author-main.jpg';
import {NavLink} from "react-router-dom";
import {BiSmile} from "react-icons/bi";
import {TiMessages} from "react-icons/ti";
import {VscSettings} from "react-icons/vsc"
import {IconContext} from "react-icons";
import {CgMore} from "react-icons/cg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const HeaderBlock = (props) => {

    return (
        <div className={s.headerBlock}>
            <div className={s.container}>
                <div className={s.topThumb}>
                    <div className={s.wrapperImg}>
                        <img src={header} alt="background profile image"/>
                    </div>
                </div>
                <div className={s.profileSection}>
                    <div className={s.row}>
                        <ul className={s.LBlock}>
                            <li>
                                <NavLink to="/profile">Timeline</NavLink>
                            </li>
                            <li>
                                <NavLink to="">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Friends</NavLink>
                            </li>
                            <li className={s.authorInfo}>
                                <NavLink to="">
                                    <h4>{props.fullName}</h4>
                                </NavLink>
                                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                            </li>
                            <li>
                                <NavLink to="">Photos</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Videos</NavLink>
                            </li>
                            <li>
                                <NavLink to=""><CgMore/></NavLink>
                            </li>
                        </ul>
                        <div className={s.authorHeader}>
                            <NavLink to="">
                                <img src={props.photos?.large || avatar} className={s.avatarImg} alt="Avatar image"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.buttonsBlock}>
                        <IconContext.Provider value={{size: '22px', color: '#fff'}}>
                            <NavLink to="" className={s.icon}><BiSmile className={s.icon1}/></NavLink>
                            <NavLink to="/messages" className={s.icon}><TiMessages className={s.icon2}/></NavLink>
                            <NavLink to="" className={s.icon}><VscSettings className={s.icon3}/></NavLink>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBlock;