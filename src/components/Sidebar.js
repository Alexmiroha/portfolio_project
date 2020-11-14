import React from 'react';

function Sidebar() {
    return (
        <nav className='sidebar'>
            <ul className='sidebar-list'>
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