import React from 'react';
import s from "./MainContentBlock.module.css";
import Post from "./Post/Post";
import CreateNewPostContainer from "./CreateNewPost/CreateNewPostContainer";




const MainContentBlock = (props) => {

    let PostElement = props.postsData.map((post, key) => <Post post={post} key={post.id}/>);


    return (
        <div className={s.mainContentBlock}>
            <CreateNewPostContainer />

            {PostElement}

        </div>
    );
};

export default MainContentBlock;
