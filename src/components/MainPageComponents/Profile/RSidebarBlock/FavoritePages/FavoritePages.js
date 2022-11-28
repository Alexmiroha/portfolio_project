import React from 'react';
import s from './FavoritePages.module.css'
import img1 from './img/avatar41-sm.webp'
import img6 from './img/avatar46-sm.webp'
import img2 from './img/avatar42-sm.webp'
import img3 from './img/avatar43-sm.webp'
import img4 from './img/avatar44-sm.webp'
import img5 from './img/avatar45-sm.webp'


const FavoritePages = () => {
    return (
        <div className="ProfileSidebar">
            <h6>Favorite Pages</h6>
            <div className={s.favPageBlock}>
                <div className={s.img}>
                    <img src={img1} alt=""/>
                </div>
                <div className={s.titleBlock}>
                    <p className={s.title}></p>
                    <p className={s.title}></p>
                </div>
                <div className={s.icon}>
{/*тут треба іконку з сайдбара*/}
                </div>
            </div>
        </div>
    );
};

export default FavoritePages;