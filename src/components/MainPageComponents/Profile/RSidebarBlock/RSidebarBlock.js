import React from 'react';
import s from './RSidebarBlocl.module.css'
import LastPhotos from "./LastPhotos/LastPhotos";
import Friends from "./Friends/Friends";

const RSidebarBlock = () => {
    return (
        <div>
            <LastPhotos/>
            <Friends/>
        </div>
    );
};

export default RSidebarBlock;
