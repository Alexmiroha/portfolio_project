import React from 'react';
import s from "./WhoLikeThis.module.css";
import {NavLink} from "react-router-dom";

const WhoLikeThis = (props) => {
    if (props.likeCount > 2) {
        return (
            <div className={s.whoLikeThis}>
                <NavLink to="">{props.liker1}</NavLink>
                &nbsp;,&nbsp;
                <NavLink to="">{props.liker2}</NavLink>
                &nbsp;and {props.likeCount - 2} <NavLink to="">more</NavLink> liked this
            </div>
        )
    }
    else if (props.likeCount === 2) {
        return (
            <div className={s.whoLikeThis}>
                <NavLink to="">{props.liker1}</NavLink>
                &nbsp;and&nbsp;
                <NavLink to="">{props.liker2}</NavLink>
                &nbsp;liked this
            </div>
        )
    }
    else if (props.likeCount === 1) {
        return (
            <div className={s.whoLikeThis}>
                <NavLink to="">{props.liker1}</NavLink>
                &nbsp;liked this
            </div>
        )
    }
    else return (
            <div className={s.whoLikeThis}>
                no one liked this yet
            </div>
        )
};


export default WhoLikeThis;
