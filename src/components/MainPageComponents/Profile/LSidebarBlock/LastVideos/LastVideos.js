import React from 'react';
import s from './LastVideos.module.css'
import Iframe from 'react-iframe'

const Video = (props) => {
    return (
        <div className={s.vid}>
            <Iframe width="260px" height="auto" src={props.link}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullScreen"
            >
            </Iframe>
        </div>
    )
}

const LastVideos = (props) => {
    return (
        <div className='ProfileSidebar'>
            <h6>Last Videos</h6>
            <div className={s.vidsContainer}>
                <Video link='https://www.youtube.com/embed/Z8Z51no1TD0'/>
                <Video link='https://www.youtube.com/embed/ia50r3fa67s'/>
                <Video link='https://www.youtube.com/embed/OF7bh0Y3vyo'/>
            </div>
        </div>
    );
};

export default LastVideos;
