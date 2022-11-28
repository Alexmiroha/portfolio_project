import React from 'react';
import s from './RSidebarBlocl.module.css'
import LastPhotos from "./LastPhotos/LastPhotos";
import Friends from "./Friends/Friends";
import FavoritePages from "./FavoritePages/FavoritePages";

const RSidebarBlock = () => {
    return (
        <div className={s.RSidebarBlock}>
            <LastPhotos/>
            <Friends/>
            <FavoritePages/>
        </div>
    );
};

export default RSidebarBlock;
