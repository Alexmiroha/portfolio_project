import React from 'react';
import s from './thisButton.module.css';
import {HiOutlineUserGroup} from "react-icons/hi";
import st from "../buttons.module.css";

function FriendGroups() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><HiOutlineUserGroup /></div>
                <div className={st.name}>Friend Groups</div>
            </a>
        </li>
    );
}






















export default FriendGroups;