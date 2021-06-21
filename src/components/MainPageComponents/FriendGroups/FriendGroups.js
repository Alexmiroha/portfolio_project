import React from 'react';
import s from './FriendsGroup.module.css';
import preloader from '../../../img/294.svg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../../API/API";

let FriendGroups = (props) => {
    let pagesCount = Math.ceil(props.UsersTotalCount / props.UersPageSize);

    let pages = [1];

    for (let i = props.SelectedPage - 5; i <= props.SelectedPage + 5; i++) {
        if (i > 1 && i < pagesCount) {
            pages.push(i);
        }
    }
    pages.push(pagesCount);

    return <div className={s.FriendsGroup}>
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

            <div>Registered Users - {props.UsersTotalCount}</div>

            <div className={s.pages}>

                {pages.map(p => {
                        return <span className={props.SelectedPage === p && s.selected}
                                     onClick={(e) => {
                                         props.onPageChanged(p);
                                     }}>{p}</span>
                    }
                )}

            </div>
            <h2>Friends</h2>
            <div className={s.friendsBlock}>
                {props.isLoading ? <img src={preloader}/> : null}
                {
                    props.users?.map(u =>
                        <div key={u.id}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.avatar} src={u.photos.small} alt=""/>
                                </NavLink>
                            </div>

                            {u.followedStatus ?

                                <button onClick={() => {
                                    usersAPI.unfollowUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.Unfollow(u.id);
                                        }
                                    })
                                }}>unfollow
                                </button>

                                :

                                <button onClick={() => {
                                    usersAPI.followUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.Follow(u.id);
                                        }
                                    })
                                }}>follow
                                </button>

                            }


                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
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
}

export default FriendGroups;