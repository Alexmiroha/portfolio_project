import React from 'react';
import s from "./Post.module.css";
import {RiHeart3Line} from "react-icons/ri";
import {IconContext} from "react-icons";
import {BiCommentDetail} from "react-icons/bi";
import {CgArrowsExchangeAlt} from "react-icons/cg";
import {NavLink} from "react-router-dom";


const Post = (props) => {
    console.log(props)

    return (
        <div className={s.postBlock}>
            <div className={s.controlBlock}>
                <IconContext.Provider value={{size: '22px', color: '#fff',}}>
                    <div className={s.icon}>
                        <RiHeart3Line/>
                    </div>
                    <div className={s.icon}>
                        <BiCommentDetail/>
                    </div>
                    <div className={s.icon}>
                        <CgArrowsExchangeAlt/>
                    </div>
                </IconContext.Provider>
            </div>
            <IconContext.Provider value={{size: '22px', color: '#c2c5d9'}}>
                <article className={s.post}>
                    <div className={s.postHeader}>
                        <div className={s.authorImg}>
                            <img src={props.authorAvatar.avatar} alt="post author image"/>
                        </div>
                        <div className={s.authorIn}>
                            <NavLink to="" className={s.authorName}>
                                <h6>{props.authorName}</h6>
                            </NavLink>
                            <div className={s.time}>{props.postTime}</div>
                        </div>
                        <NavLink to="" className={s.more}>...</NavLink>
                    </div>
                    <div className={s.message}>
                        <p className={s.paragraph}>
                            {props.postMessage}
                        </p>
                    </div>
                    <div className={s.postThumb}>
                        <img src={props.postImage} alt="post image"/>
                    </div>
                    <div className={s.postInfo}>
                        <div className={s.likesBlock}>
                            <NavLink to="" className={s.likeIcon}>
                                &#9825;
                            </NavLink>
                            <div className={s.likesCount}>{props.likeCount}</div>
                            <div className={s.userLikedBlock}>
                                <div className={s.likersImages}>
                                    <NavLink to=""><img src={props.uImgs.u1}
                                                        alt="user image(liked)"/></NavLink>
                                    <NavLink to=""><img src={props.uImgs.u2}
                                                        alt="user image(liked)"/></NavLink>
                                    <NavLink to=""> <img src={props.uImgs.u3}
                                                         alt="user image(liked)"/></NavLink>
                                    <NavLink to=""> <img src={props.uImgs.u4}
                                                         alt="user image(liked)"/></NavLink>
                                    <NavLink to=""><img src={props.uImgs.u5}
                                                        alt="user image(liked)"/></NavLink>
                                </div>
                                <div className={s.whoLikeThis}>
                                    <NavLink to="">{props.liker1}</NavLink>
                                    &nbsp;,&nbsp;
                                    <NavLink to="">{props.liker2}</NavLink>
                                    &nbsp;and {props.likeCount - 2} <NavLink to="">more</NavLink> liked this
                                </div>
                            </div>
                        </div>
                        <div className={s.commentsReposts}>
                            <div className={s.commentsInfo}>
                                <div className={s.commentsIcon}><BiCommentDetail/></div>
                                <div className={s.commentsCount}>{props.commentCount}</div>
                            </div>
                            <div className={s.repostsInfo}>
                                <div className={s.repostIcon}><CgArrowsExchangeAlt/></div>
                                <div className={s.repostsCount}>{props.repostCount}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </IconContext.Provider>
        </div>
    );
};

export default Post;
