import React from 'react';
import s from "./MainContentBlock.module.css";
import CreateNewPost from "./CreateNewPost/CreateNewPost";
import Post from "./Post/Post";

const MainContentBlock = (props) => {
console.log(props)

    let PostElement = props.profileData.postsData.map(post => <Post authorName={post.authorName}
                                                                    postTime={post.postTime}
                                                                    postMessage={post.postMessage}
                                                                    likeCount={post.likeCount}
                                                                    liker1={post.liker1} liker2={post.liker2}
                                                                    commentCount={post.commentCount}
                                                                    repostCount={post.repostCount}
                                                                    uImgs={post.uImgs}
                                                                    authorAvatar={post.authorAvatar}
                                                                    postImage={post.postImage.postImage}/>);


    return (
        <div className={s.mainContentBlock}>
            <CreateNewPost/>

            {PostElement}

        </div>
    );
};

export default MainContentBlock;
