import React from 'react';
import s from "./Post.module.css";
import {RiHeart3Line} from "react-icons/ri";
import {IconContext} from "react-icons";
import {BiCommentDetail} from "react-icons/bi";
import {CgArrowsExchangeAlt} from "react-icons/cg";
import {NavLink} from "react-router-dom";
import WhoLikeThis from "./WhoLikeThis";






const Post = (props) => {


    return (
        <div className={s.postBlock}>
            <div className={s.controlBlock}>
                <IconContext.Provider value={{size: '22px', color: '#FFF'}}>
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
            <IconContext.Provider value={{size: '22px'}}>
                <article className={s.post}>
                    <div className={s.postHeader}>
                        <div className={s.authorImg}>
                            <img src={props.profile?.photos.small || props.post.authorAvatar.avatar} alt="post author image"/>
                        </div>
                        <div className={s.authorIn}>
                            <NavLink to="" className={s.authorName}>
                                <h6>{props.profile?.fullName || props.post.authorName}</h6>
                            </NavLink>
                            <div className={s.time}>{props.post.postTime}</div>
                        </div>
                        <NavLink to="" className={s.more}>...</NavLink>
                    </div>
                    <div className={s.message}>
                        <p className={s.paragraph}>
                            {props.profile?.aboutMe || props.post.postMessage}
                        </p>
                    </div>
                    <div className={s.postThumb}>
                        <img src={props.post.postImage.postImage} alt="post image"/>
                    </div>
                    <div className={s.postInfo}>
                        <div className={s.likesBlock}>
                            <div className={`${s.countersBlocks} ${s.likes}`}>
                                <span className={s.likeIcon}>
                                    &#9825;
                                </span>
                                <div className={s.likesCount}>{props.post.likeCount}</div>
                            </div>
                            <div className={s.userLikedBlock}>
                                <div className={s.likersImages}>
                                    <NavLink to=""><img src={props.post.uImgs.u1}
                                                        alt=""/></NavLink>
                                    <NavLink to=""><img src={props.post.uImgs.u2}
                                                        alt=""/></NavLink>
                                    <NavLink to=""> <img src={props.post.uImgs.u3}
                                                         alt=""/></NavLink>
                                    <NavLink to=""> <img src={props.post.uImgs.u4}
                                                         alt=""/></NavLink>
                                    <NavLink to=""><img src={props.post.uImgs.u5}
                                                        alt=""/></NavLink>
                                </div>

                                <WhoLikeThis liker1={props.post.liker1} liker2={props.post.liker2} likeCount={props.post.likeCount} />

                            </div>
                        </div>
                        <div className={s.commentsReposts}>
                            <div className={`${s.commentsInfo} ${s.countersBlocks}`}>
                                <div className={s.commentsIcon}><BiCommentDetail/></div>
                                <div className={s.count}>{props.post.commentCount}</div>
                            </div>
                            <div className={`${s.repostsInfo} ${s.countersBlocks}`}>
                                <div className={s.repostIcon}><CgArrowsExchangeAlt/></div>
                                <div className={s.count}>{props.post.repostCount}</div>
                            </div>
                        </div>
                    </div>
                </article>
            </IconContext.Provider>
        </div>
    );
};

export default Post;
