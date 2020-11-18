import React from "react";
import s from './Profile.module.css';

function Profile() {
    return (
        <main className={s.mainProfile}>
            <div className="s.name">
                <img className='s.bgImage' src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768" alt=""/>
                <h1>My Name Is</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKfNuudEVu37dR_gy70a3ARxhSM7yap6L5og&usqp=CAU" alt="" className="profile-img"/>
            </div>
        </main>
    );
}

export default Profile;