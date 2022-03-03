import React from 'react';
import {FaCheck} from "react-icons/fa";
import s from './NicknameChanger.module.css'


const NicknameChanger = (props) => {
    return (
        <form className={s.form}>
            <input type="text" placeholder='Nickname'/>
            <button>
                <div className={s.icon}>
                    <FaCheck/>
                </div>
            </button>
        </form>
    );
};

export default NicknameChanger;
