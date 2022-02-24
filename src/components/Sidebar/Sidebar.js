import React from 'react';
import s from './Sidebar.module.css';
import {IconContext} from "react-icons";
import {RiNewspaperLine} from "react-icons/ri";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {TiStarOutline, TiWeatherPartlySunny} from "react-icons/ti";
import {HiOutlineUserGroup} from "react-icons/hi";
import {BsColumns, BsMusicPlayer} from "react-icons/bs";
import {GoCalendar} from "react-icons/go";
import {BiBadgeCheck, BiStats} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import logo from "./logo.png";
import {connect} from "react-redux";


const SidebarButton = (props) => {
    return (
        <li>
            <NavLink to={props.path} className={s.button}>
                <div className={s.iconSB}>{props.icon}</div>
                <div className={s.buttonName}>{props.name}</div>
            </NavLink>
        </li>
    );
}

class Sidebar extends React.Component {

    state = {
        activeSidebar: null,
    }

    changeSidebar = () => {
        this.setState({
            activeSidebar: !this.state.activeSidebar
        })
    }

    render() {
        return (
            <nav
                className={`${s.sidebar} ${this.state.activeSidebar === true ? s.move2 : ""} ${this.state.activeSidebar === false ? s.move1 : ""}`}>
                <ul className={s.sidebarList}>
                    <li>
                        <NavLink to={'/profile/' + this.props.loginedUserId} className={s.logo}>
                            <img src={logo} className={s.imgLogo} alt="Logo Olympus"/>
                            <h6 className={s.logoName}>Olympus</h6>
                        </NavLink>
                    </li>
                    {/*!!!!!!!!!!styles 4 icons!!!!!!!!!!!!*/}
                    <IconContext.Provider value={{className: 'react-icons', size: '1.5em'}}>
                        <li className={`${s.button} ${s.collapseMenu}`} onClick={this.changeSidebar}>
                            <div className={s.iconSB}><AiOutlineCloseCircle/></div>
                            <div className={s.buttonName}>Collapse Menu</div>
                        </li>
                        {this.props.isLogined ?
                            <div>
                            <SidebarButton path='/feed' icon=<RiNewspaperLine/> name='Newsfeed'/>
                            <SidebarButton path='/fav' icon=<TiStarOutline/> name='Fav Pages Feed'/>
                            <SidebarButton path='/friends' icon=<HiOutlineUserGroup/> name='Friend Groups'/>
                            <SidebarButton path='/music' icon=<BsMusicPlayer/> name='Music & Playlists'/>
                            <SidebarButton path='/weather' icon=<TiWeatherPartlySunny/> name='Weather'/>
                            <SidebarButton path='/calendar' icon=<GoCalendar/> name='Calendar and Events'/>
                            <SidebarButton path='/badges' icon=<BiBadgeCheck/> name='Community Badges'/>
                            <SidebarButton path='/stats' icon=<BiStats/> name='Account Stats'/>
                            <SidebarButton path='/widgets' icon=<BsColumns/> name='Manage Widgets'/>
                        </div>
                            :
                            <div>
                            <SidebarButton path='/weather' icon=<TiWeatherPartlySunny/> name='Weather'/>
                            <SidebarButton path='/calendar' icon=<GoCalendar/> name='Calendar and Events'/>
                        </div>
                            }
                    </IconContext.Provider>
                </ul>
                {this.props.isLogined ?
                    <div className={s.profileCompletitionBlock}>
                    <div className={s.compSkillsItem}>
                        <div className={s.infoCompl}>
                            <div className={s.tittleCompl}>Profile Completition</div>
                            <div className={s.unitsCompl}>82%</div>
                        </div>
                        <div className={s.meterCompl}>
                            <span className={s.progress}></span>
                        </div>
                    </div>
                    <div className={s.textCompl}>
                        Complete
                        <NavLink to="/profile" className={s.rText}> your profile </NavLink>
                        so people can know more about you!
                    </div>
                </div>
                : ''}
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    loginedUserId: state.app.userId,
    isLogined: state.app.isLogined
});

export default connect(mapStateToProps, {})(Sidebar);