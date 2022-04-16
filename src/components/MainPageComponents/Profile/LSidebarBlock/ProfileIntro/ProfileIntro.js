import React from 'react';
import s from './ProfileIntro.module.css'

const ProfileIntro = () => {
    return (
        <div className={s.profileIntro}>
            <h6 className={s.mainTitle}>Profile Intro</h6>
            <div>
                <div className={s.title}>About Me</div>
                <div className={s.text}>Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.</div>
            </div>
            <div>
                <div className={s.title}>Favourite TV Shows:</div>
                <div className={s.text}>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</div>
            </div>
            <div>
                <div className={s.title}>Favourite Music Bands / Artists:</div>
                <div className={s.text}>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</div>
            </div>
            <h6 className={s.links}>Other Social Networks:</h6>
        </div>
    );
};

export default ProfileIntro;
