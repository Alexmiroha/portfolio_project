import React from 'react';
import s from './FavoritePages.module.css'
import img1 from './img/avatar41-sm.webp'
import img6 from './img/avatar46-sm.webp'
import img2 from './img/avatar42-sm.webp'
import img3 from './img/avatar43-sm.webp'
import img4 from './img/avatar44-sm.webp'
import img5 from './img/avatar45-sm.webp'
import {TiStarOutline} from "react-icons/ti";

const FavPageBlock = (props) => {
    return (
        <div className={s.favPageBlock}>
            <div className={s.imgBlock}>
                <img className={s.img} src={img1} alt=""/>
            </div>
            <div className={s.titleBlock}>
                <p className={s.title}>The Marina Bar</p>
                <p className={s.titleDiscription}>Restaurant / Bar</p>
            </div>
            <div className={s.icon}>
                <TiStarOutline/>
            </div>
        </div>
    )
}

const FavoritePages = () => {
    return (
        <div className="ProfileSidebar">
            <h6>Favorite Pages</h6>
            <FavPageBlock/>
            <FavPageBlock/>
        </div>
    );
};

export default FavoritePages;