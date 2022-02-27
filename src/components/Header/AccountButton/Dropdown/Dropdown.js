import React from 'react';
import s from './Dropdown.module.css'
import {IconContext} from "react-icons";
import {NavLink} from "react-router-dom";
import {RiLogoutCircleLine} from "react-icons/ri";
import ReusableSidebarDropdownButton from "../../../reusableComponents/Buttons/ReusableSidebarDropdownButton";

const Dropdown = (props) => {
    return (
        <div className={s.dropdown}>
            <IconContext.Provider value={{className: 'react-icons', size: '1.5em'}}>
            <div className={s.AccountButtons}>
                <h6 className={s.title}>YOUR ACCOUNT</h6>
                <ul>
                    <li>
                        <div>Profile Settings</div>
                    </li>
                    <li>
                        <div>Create Fav Page</div>
                    </li>
                    <ReusableSidebarDropdownButton path='' onClick={props.logout} icon=<RiLogoutCircleLine/>  name='Newsfeed'/>
                    <li>
                        <button className={s.logout} onClick={props.logout}>Log Out</button>
                    </li>
                </ul>
            </div>
            <div className={s.statusSetting}>
                <h6 className={s.title}>ONLINE STATUS</h6>
                <ul>
                    <li>
                        <span className={`${s.status_icon} ${s.onlone}`}/>
                        <div>Online</div>
                    </li>
                    <li>
                        <span className={`${s.status_icon} ${s.away}`}/>
                        <div>Away</div>
                    </li>
                    <li>
                        <span className={`${s.status_icon} ${s.disconnected}`}></span>
                        <div>Disconnected</div>
                    </li>
                    <li>
                        <span className={`${s.status_icon} ${s.invisible}`}/>
                        <div>Invisible</div>
                    </li>
                </ul>
            </div>
            <div className={s.changeNickname}>
                <h6 className={s.title}>CUSTOM NICKNAME</h6>
                <input type="text" placeholder={"CAPTAIN"}/>
                <button>change</button>
            </div>
            <div className={s.about}>
                <h6 className={s.title}>ABOUT OLYMPUS</h6>
                <ul>
                    <li>
                        <div>Terms And Conditions</div>
                    </li>
                    <li>
                        <div>FAQs</div>
                    </li>
                    <li>
                        <div>Careers</div>
                    </li>
                    <li>
                        <div>Contact</div>
                    </li>
                </ul>
            </div>
            </IconContext.Provider>
        </div>
    );
};

export default Dropdown;
