import React from 'react';
import st from './../buttons.module.css'
import s from './thisButton.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function CollapseM() {
    return (
        <li>
            <a href="" className={s.button}>
                <div className={st.iconSB}><AiOutlineCloseCircle /></div>
                <div className={st.name}>Collapse Menu</div>
            </a>
        </li>
    );
}






















export default CollapseM;