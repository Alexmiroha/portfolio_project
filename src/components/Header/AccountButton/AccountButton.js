import React, {useState} from 'react';
import s from "./AccountButton.module.css";
import avatar from "../../../img/UserAvatarSmall.jpg";
import Dropdown from "./Dropdown/Dropdown";

const AccountButton = (props) => {

    const [activeDropdown, setActivedropdown] = useState(false);

    return (
        <div className={s.yourAccountButton}>
            <div className={s.accButtonBlock} onMouseEnter={() => {setActivedropdown(!activeDropdown)}}>
                <div className={s.avatar}>
                    <img src={avatar} className={s.imgAvatar} alt="avatar"/>
                    <div className={s.status}></div>
                </div>
                <div className={s.nameBlock}>
                    <div className={s.name}>
                        <div>{props.login}</div>
                    </div>
                    <div className={s.pseudoName}>Captain</div>
                </div>
                <span className={s.arrow}>ˇ</span>
            </div>
            {activeDropdown
            &&
            <div className={s.dropdownWrapper} onMouseLeave={() => {setActivedropdown(!activeDropdown)}}>
                <Dropdown logout={props.logout}/>
            </div>
            }
        </div>
    );
};

export default AccountButton;
