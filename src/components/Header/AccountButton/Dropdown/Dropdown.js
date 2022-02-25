import React from 'react';
import s from './Dropdown.module.css'

const Dropdown = (props) => {
    return (
        <div className={s.dropdown}>
            <div className={s.AccountButtons}>
                <h6 className={s.title}>YOUR ACCOUNT</h6>
                <ul>
                    <li>
                        <div>Profile Settings</div>
                    </li>
                    <li>
                        <div>Create Fav Page</div>
                    </li>
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
        </div>
    );
};

export default Dropdown;
