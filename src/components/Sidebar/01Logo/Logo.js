import React from 'react';
import s from './Logo.module.css';
import logo from './logo.png';

function Logo() {
    return (
        <li>
            <a href="" className={s.logo}>
                <img src={logo}  className={s.imgL} alt=""/>
                <h6 className={s.name}>Olympus</h6>
            </a>
        </li>
    );
}






















export default Logo;