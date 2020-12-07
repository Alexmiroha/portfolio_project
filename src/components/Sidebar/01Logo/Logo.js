import React from 'react';
import s from './Logo.module.css';
import logo from './logo.png';
import {NavLink} from "react-router-dom";

function Logo() {
    return (
        <li>
            <NavLink to="/profile" className={s.logo}>
                <img src={logo}  className={s.imgL} alt=""/>
                <h6 className={s.name}>Olympus</h6>
            </NavLink>
        </li>
    );
}






















export default Logo;