import React from 'react';
import s from './Header.module.css';
import {NavLink, Route} from "react-router-dom";
import {BiSmile} from "react-icons/bi";
import {TiMessages} from "react-icons/ti";
import { RiFlashlightLine } from "react-icons/ri";
import {IconContext} from "react-icons";
import avatar from "../../img/UserAvatarSmall.jpg";

function Header() {
    return (
        <header className={s.header}>
                <Route path='/profile' render={ () => {return (<h6 className={s.pageTitle}>Profile Page</h6>)}}/>
                <Route path='/feed' render={ () => {return (<h6 className={s.pageTitle}>Newsfeed</h6>)}}/>
                <Route path='/fav' render={ () => {return (<h6 className={s.pageTitle}>Fav Pages Feed</h6>)}}/>
                <Route path='/friends' render={ () => {return (<h6 className={s.pageTitle}>Friend Groups</h6>)}}/>
                <Route path='/music' render={ () => {return (<h6 className={s.pageTitle}>Music & Playlists</h6>)}}/>
                <Route path='/weather' render={ () => {return (<h6 className={s.pageTitle}>Weather</h6>)}}/>
                <Route path='/calendar' render={ () => {return (<h6 className={s.pageTitle}>Calendar and Events</h6>)}}/>
                <Route path='/badges' render={ () => {return (<h6 className={s.pageTitle}>Community Badges</h6>)}}/>
                <Route path='/stats' render={ () => {return (<h6 className={s.pageTitle}>Account Stats</h6>)}}/>
                <Route path='/widgets' render={ () => {return (<h6 className={s.pageTitle}>Manage Widgets</h6>)}}/>
                <Route path='/messages' render={ () => {return (<h6 className={s.pageTitle}>Messages</h6>)}}/>
            <div className={s.headerItems}>
                <div className={s.searchField}>
                <form action="">
                    <input type="text" placeholder='Search people or pages...'/>
                </form>
            </div>
            <div className={s.findFriends}>Find Friends</div>
              <IconContext.Provider value={{ size: '1.6em', color: '#fff' }}>
              <div className={s.controlBlock}>
                <div className={s.headerIcons}>
                    <div className={s.icon}><BiSmile /></div>
                    <div className={s.label} style={{backgroundColor: '#38A9FF'}}>1</div>
                    <div className={s.dropdown}></div>
                </div>
                <div className={s.headerIcons}>
                    <NavLink to="/messages" className={s.icon}><TiMessages /></NavLink>
                    <div className={s.label} style={{backgroundColor: '#7C5AC2'}}>4</div>
                    <div className={s.dropdown}></div>
                </div>
                <div className={s.headerIcons}>
                    <div className={s.icon}><RiFlashlightLine /></div>
                    <div className={s.label} style={{backgroundColor: '#FF5E3A'}}>2</div>
                    <div className={s.dropdown}></div>
                </div>
                <div className={s.yourAccountButton}>
                    <div className={s.accButtonBlock}>
                        <div  className={s.avatar}>
                            <img src={avatar}  className={s.imgAvatar} alt="avatar"/>
                            <div  className={s.status}></div>
                        </div>
                        <div className={s.nameBlock}>
                            <div  className={s.name}>
                                <div>Jack Sparrow</div>
                            </div>
                            <div  className={s.pseudoName}>Captain</div>
                        </div>
                        <span className={s.arrow}>ˇ</span>
                    </div>
                    <div  className={s.dropdown}></div>
                </div>
            </div>
                  </IconContext.Provider>
          </div>
        </header>
    );
}

export default Header;