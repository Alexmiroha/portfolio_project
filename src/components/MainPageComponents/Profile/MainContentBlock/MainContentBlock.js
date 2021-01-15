import React from 'react';
import s from "./MainContentBlock.module.css";
import CreateNewPost from "./CreateNewPost/CreateNewPost";
import Post from "./Post/Post";




const MainContentBlock = (props) => {


    let PostElement = props.profilePage.postsData.map((post, key) => <Post post={post} key={key}/>);


    return (
        <div className={s.mainContentBlock}>
            <CreateNewPost dispatch={props.dispatch} newPostTextarea={props.profilePage.newPostTextarea} />

            {PostElement}

        </div>
    );
};

export default MainContentBlock;
