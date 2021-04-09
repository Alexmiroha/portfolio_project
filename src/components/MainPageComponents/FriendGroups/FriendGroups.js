import React from 'react';
import s from './FriendsGroup.module.css';

function FriendGroups(props) {

    if (props.users.length === 0) {

        props.setUsers([
                {
                    id: 1,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Vas'an Galkin",
                    status: 'Im dog',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    onlineStatus: true,
                    lastSeen: "1 hour ago",
                    followedStatus: false,
                },

                {
                    id: 2,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Igor Popov",
                    status: 'Hello MOTO',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    online: true,
                    lastSeen: "1 hour ago",
                    followedStatus: true,
                },

                {
                    id: 3,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Masha Gus",
                    status: 'SASAI LALKA',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    online: true,
                    lastSeen: "1 hour ago",
                    followedStatus: true,
                },

                {
                    id: 4,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Sveta Chaika",
                    status: '1234',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    online: true,
                    lastSeen: "1 hour ago",
                    followedStatus: false,
                },

                {
                    id: 5,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Andrey Kozin",
                    status: 'Miracle',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    online: false,
                    lastSeen: "1 hour ago",
                    followedStatus: true,
                },

                {
                    id: 6,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Yuliya Mur",
                    status: '8-800',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    online: true,
                    lastSeen: "1 hour ago",
                    followedStatus: true,
                },

                {
                    id: 7,
                    avatar: 'https://img.lovepik.com/element/40033/4306.png_860.png',
                    name: "Katya Jonson",
                    status: 'AAAA:)',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    birth: '29.12.1995',
                    online: false,
                    lastSeen: "1 hour ago",
                    followedStatus: true,
                },

            ]
        )
    }


    return (
        <div className={s.FriendsGroup}>
            <div className={s.headerFG}>
                <h1>Manage your Friend Groups</h1>
                <p>Welcome to your friends groups!
                    Do you wanna know what your close friends have been up to?
                    Groups will let you easily manage your friends and put the
                    into categories so when you enter you’ll only see a newsfeed
                    of those friends that you placed inside the group.
                    Just click on the plus button below and start now!
                </p>
            </div>

            <div className={`${s.userFriends} ${s.FGBlock}`}>
                <h2>Friends</h2>
                <div className={s.friendsBlock}>
                    {
                        props.users.map(u =>
                            <div key={u.id}>
                                <div>
                                    <img className={s.avatar} src={u.avatar} alt=""/>
                                </div>
                                {u.followedStatus ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button> : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                                <div>{u.birth}</div>
                                <div>{u.online}</div>
                                <div>{u.lastSeen}</div>
                                <button>Send Message</button>
                            </div>
                        )
                    }
                </div>
                <div className={s.showMoreBtn}>Show More</div>
            </div>

            <div className={`${s.suggestedFriends} ${s.FGBlock}`}>
                <h2>Suggestions</h2>
                <div className={s.suggestionsBlock}>
                    <div className={s.userFriend}>
                        <img src="" alt="avatar"/>
                        <div className={s.name}>Ira Mur</div>
                        <div className={s.onlineTime}>1 hour ago</div>
                        <div className={s.sendMessageBTN}>Send Message</div>
                        <div className={s.flwUflwBtn}>unfollow</div>
                    </div>
                    <div className={s.userFriend}>
                        <img src="" alt="avatar"/>
                        <div className={s.name}>Ira Mur</div>
                        <div className={s.onlineTime}>1 hour ago</div>
                        <div className={s.sendMessageBTN}>Send Message</div>
                        <div className={s.flwUflwBtn}>unfollow</div>
                    </div>
                    <div className={s.userFriend}>
                        <img src="" alt="avatar"/>
                        <div className={s.name}>Ira Mur</div>
                        <div className={s.onlineTime}>1 hour ago</div>
                        <div className={s.sendMessageBTN}>Send Message</div>
                        <div className={s.flwUflwBtn}>unfollow</div>
                    </div>
                </div>
                <div className={s.showMoreBtn}>Show More</div>
            </div>

        </div>
    );
}


export default FriendGroups;