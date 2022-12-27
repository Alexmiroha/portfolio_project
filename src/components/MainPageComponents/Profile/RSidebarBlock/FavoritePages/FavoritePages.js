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
                <img className={s.img} src={props.image} alt=""/>
            </div>
            <div className={s.titleBlock}>
                <p className={s.title}>{props.title.length<21? props.title : props.title.substr(0, 15) + '...'}</p>
                <p className={s.titleDescription}>{props.titleDescription}</p>
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
            <FavPageBlock title='The Marina Bar' titleDescription='Restaurant / Bar' image={img1} />
            <FavPageBlock title='Tapronus Rock' titleDescription='Rock Band' image={img2} />
            <FavPageBlock title='Pixel Digital Design' titleDescription='Company' image={img3} />
            <FavPageBlock title='Thompson’s Custom Clothing Boutique' titleDescription='Clothing Store' image={img4} />
            <FavPageBlock title='Crimson Agency' titleDescription='Company' image={img5} />
            <FavPageBlock title='The Marina Bar' titleDescription='Clothing Store' image={img6} />
        </div>
    );
};

export default FavoritePages;