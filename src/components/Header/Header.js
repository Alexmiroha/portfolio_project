import React from 'react';
import s from './Header.module.css';
import {NavLink, Route} from "react-router-dom";
import {BiSmile} from "react-icons/bi";
import {TiMessages} from "react-icons/ti";
import {RiFlashlightLine} from "react-icons/ri";
import {IconContext} from "react-icons";
import AccountButton from "./AccountButton/AccountButton";

const Header = (props) => {

    return (
        <header className={s.header}>
            <HeaderCurrentPage/>


            <div className={s.headerItems}>
                <IconContext.Provider value={{size: '1.6em', color: '#fff'}}>

                        { props.isLogined ?

                            <HeaderUserButtons login={props.login} logout={props.logout} updateUserNickname={props.updateUserNickname} nickname={props.nickname}/>

                            :

                            <div className={s.loginButtonCont}>
                                <NavLink className={s.loginButton} to="/login">Login</NavLink>
                            </div>
                        }

                </IconContext.Provider>
            </div>
        </header>
    );
}


const HeaderUserButtons = (props) => {
    return (
        <div className={s.controlBlock}>
            <div className={s.searchField}>
                <form action="">
                    <input type="text" placeholder='Search people or pages...'/>
                    <div className={s.findFriends}>Find Friends</div>
                </form>
            </div>
            <div className={s.headerIcons}>
                <div className={s.icon}><BiSmile/></div>
                <div className={s.label} style={{backgroundColor: '#38A9FF'}}>1</div>
                <div className={s.dropdown}></div>
            </div>
            <div className={s.headerIcons}>
                <NavLink to="/messages" className={s.icon}><TiMessages/></NavLink>
                <div className={s.label} style={{backgroundColor: '#7C5AC2'}}>4</div>
                <div className={s.dropdown}></div>
            </div>
            <div className={s.headerIcons}>
                <div className={s.icon}><RiFlashlightLine/></div>
                <div className={s.label} style={{backgroundColor: '#FF5E3A'}}>2</div>
                <div className={s.dropdown}></div>
            </div>
            <AccountButton login={props.login} logout={props.logout} updateUserNickname={props.updateUserNickname} nickname={props.nickname} />
        </div>
    )
}
const HeaderCurrentPage = (props) => {
    return (
        <div>
            <Route path='/profile' render={() => {
                return (<h6 className={s.pageTitle}>Profile Page</h6>)
            }}/>
            <Route path='/feed' render={() => {
                return (<h6 className={s.pageTitle}>Newsfeed</h6>)
            }}/>
            <Route path='/fav' render={() => {
                return (<h6 className={s.pageTitle}>Fav Pages Feed</h6>)
            }}/>
            <Route path='/friends' render={() => {
                return (<h6 className={s.pageTitle}>Friend Groups</h6>)
            }}/>
            <Route path='/music' render={() => {
                return (<h6 className={s.pageTitle}>Music & Playlists</h6>)
            }}/>
            <Route path='/weather' render={() => {
                return (<h6 className={s.pageTitle}>Weather</h6>)
            }}/>
            <Route path='/calendar' render={() => {
                return (<h6 className={s.pageTitle}>Calendar and Events</h6>)
            }}/>
            <Route path='/badges' render={() => {
                return (<h6 className={s.pageTitle}>Community Badges</h6>)
            }}/>
            <Route path='/stats' render={() => {
                return (<h6 className={s.pageTitle}>Account Stats</h6>)
            }}/>
            <Route path='/widgets' render={() => {
                return (<h6 className={s.pageTitle}>Manage Widgets</h6>)
            }}/>
            <Route path='/messages' render={() => {
                return (<h6 className={s.pageTitle}>Messages</h6>)
            }}/>
            <Route path='/login' render={() => {
                return (<h6 className={s.pageTitle}>Login Page</h6>)
            }}/>
        </div>
    )
}

export default Header;