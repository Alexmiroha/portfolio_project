import React from 'react';
import s from './PreloaderMain.module.css'
import preloader from '../../../img/294.svg'

const PreloaderMain = (props) => {
    return (
        <div className={s.preloaderWrapper}>
            <img src={preloader}/>
        </div>
    );
};

export default PreloaderMain;
