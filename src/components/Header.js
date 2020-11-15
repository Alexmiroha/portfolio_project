import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.headerc}>
            <img className={s.logo} src="./img/logo.png" alt="logo"/>
        </header>
    );
}

export default Header;