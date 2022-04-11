import React from 'react';
import s from './LastPhotos.module.css'
import img1 from '../../../../../img/LastPhotos/last-phot11-large.webp'
import img2 from '../../../../../img/LastPhotos/last-phot12-large.webp'
import img3 from '../../../../../img/LastPhotos/last-phot13-large.webp'
import img4 from '../../../../../img/LastPhotos/last-phot14-large.webp'
import img5 from '../../../../../img/LastPhotos/last-phot15-large.webp'
import img6 from '../../../../../img/LastPhotos/last-phot16-large.webp'
import img7 from '../../../../../img/LastPhotos/last-phot17-large.webp'
import img8 from '../../../../../img/LastPhotos/last-phot18-large.webp'
import img9 from '../../../../../img/LastPhotos/last-photo10-large.webp'

const LastPhotos = () => {
    return (
        <div className={s.LastPhotosBlock}>
            <h6>Last Photos</h6>
            <div className={s.photos}>
                <img src={img1} className={s.image} alt=""/>
                <img src={img2} className={s.image} alt=""/>
                <img src={img3} className={s.image} alt=""/>
                <img src={img4} className={s.image} alt=""/>
                <img src={img5} className={s.image} alt=""/>
                <img src={img6} className={s.image} alt=""/>
                <img src={img7} className={s.image} alt=""/>
                <img src={img8} className={s.image} alt=""/>
                <img src={img9} className={s.image} alt=""/>

            </div>
        </div>
    );
};

export default LastPhotos;
