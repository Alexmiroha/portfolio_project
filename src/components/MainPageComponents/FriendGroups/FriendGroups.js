import React from 'react';
import s from './FriendsGroup.module.css';
import * as axios from "axios";

class FriendGroups extends React.Component {


    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            this.props.setUsers(response.data.items);

        })
    }


    render() {
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
                            this.props.users.map(u =>
                                <div key={u.id}>
                                    <div>
                                        <img className={s.avatar} src={u.photos.small} alt=""/>
                                    </div>
                                    {u.followedStatus ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>unfollow</button> : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>follow</button>}
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
        );
    }


}

export default FriendGroups;