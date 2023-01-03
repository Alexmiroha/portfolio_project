import React from 'react';
import s from './LastVideos.module.css'
import Iframe from 'react-iframe'

const LastVideos = (props) => {
    return (
        <div className='ProfileSidebar'>
            <h6>Last Videos</h6>
            <div className={s.vidsContainer}>
                <div className={s.vid}>
                    <Iframe width="260px" height="auto" src="https://www.youtube.com/embed/Z8Z51no1TD0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullScreen"
                            >
                    </Iframe>
                </div>
            </div>
        </div>
    );
};

export default LastVideos;
