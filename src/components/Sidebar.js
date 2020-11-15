import React from 'react';
import s from './Sidebar.module.css';

function Sidebar() {
    return (
        <nav className={s.sidebar}>
            <ul className={s.sidebarList}>
                <li><a href="">Profile</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Sidebar;