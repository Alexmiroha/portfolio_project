import React, {useState} from 'react';
import s from './Friends.module.css';
import img1 from './img/avatar24-sm.webp';
import img2 from './img/avatar25-sm.webp';
import img3 from './img/avatar26-sm.webp';
import img4 from './img/avatar27-sm.webp';
import img5 from './img/avatar28-sm.webp';
import img6 from './img/avatar29-sm.webp';
import img7 from './img/avatar30-sm.webp';
import img8 from './img/avatar31-sm.webp';
import img9 from './img/avatar32-sm.webp';
import img10 from './img/avatar33-sm.webp';
import img11 from './img/avatar34-sm.webp';
import img12 from './img/avatar35-sm.webp';
import img13 from './img/avatar36-sm.webp';
import img14 from './img/avatar38-sm.webp';
import {Link} from "react-router-dom";

const Friends = () => {

    const [friends] = useState(75);

    return (
        <div className={s.friendsBlock}>
            <h6>Friends ({friends})</h6>
            <div className={s.friendsList}>
                <div className={s.friend}>
                    <img src={img1} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img2} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img3} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img4} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img5} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img6} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img7} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img8} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img9} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img10} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img11} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img12} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img13} alt="friend"/>
                </div>
                <div className={s.friend}>
                    <img src={img14} alt="friend"/>
                </div>
                <Link className={s.more}>
                    +{friends - 14}
                </Link>

            </div>
        </div>
    );
};

export default Friends;