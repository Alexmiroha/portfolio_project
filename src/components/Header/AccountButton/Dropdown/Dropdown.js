import React from 'react';
import s from './Dropdown.module.css'
import {IconContext} from "react-icons";
import {RiLogoutCircleLine} from "react-icons/ri";
import {GoSettings} from "react-icons/go";
import {TiStarOutline} from "react-icons/ti";
import DropdownButton from "./DropdownButton";
import StatusChanger from "./StatusChanger";
import NicknameChanger from "./NicknameChanger";


const Dropdown = (props) => {
    return (
        <div className={s.dropdown}>
            <IconContext.Provider value={{className: 'react-icons', size: '1.5em'}}>
            <div className={s.AccountButtons}>
                <h6 className={s.title}>YOUR ACCOUNT</h6>
                <ul>
                    <DropdownButton path='/stats' onClick={''} icon=<GoSettings/>  name='Profile Settings'/>
                    <DropdownButton path='/stats' onClick={''} icon=<TiStarOutline/>  name='Create Fav Page'/>
                    <DropdownButton path='' onClick={props.logout} icon=<RiLogoutCircleLine/>  name='Logout'/>
                </ul>
            </div>
            <div className={s.statusSettings}>
                <h6 className={s.title}>ONLINE STATUS</h6>
                <ul className={s.statutsWrapper}>
                    <StatusChanger BGColor={"#32E2CC"} title={'Online'}/>
                    <StatusChanger BGColor={"#ffd52f"} title={'Away'}/>
                    <StatusChanger BGColor={"#ff4f60"} title={'Disconnected'}/>
                    <StatusChanger BGColor={"#cbdfee"} title={'Invisible'}/>
                </ul>
            </div>
            <div className={s.changeNickname}>
                <h6 className={s.title}>CUSTOM NICKNAME</h6>
                <NicknameChanger/>
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
