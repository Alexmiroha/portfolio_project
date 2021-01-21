import React from 'react';
import s from "./MainContentBlock.module.css";
import Post from "./Post/Post";
import CreateNewPostContainer from "./CreateNewPost/CreateNewPostContainer";




const MainContentBlock = (props) => {

    let PostElement = props.profilePage.postsData.map((post, key) => <Post post={post} key={key}/>);


    return (
        <div className={s.mainContentBlock}>
            <CreateNewPostContainer dispatch={props.dispatch} newPostTextarea={props.profilePage.newPostTextarea} />

            {PostElement}

        </div>
    );
};

export default MainContentBlock;
