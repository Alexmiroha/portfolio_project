import React from 'react';
import s from './MainContentNews.module.css';
import CreateNewPostContainer from "../../Profile/MainContentBlock/CreateNewPost/CreateNewPostContainer";

const MainContentNews = (props) => {
    return (
        <div className={s.mainContent}>
            <CreateNewPostContainer />
        </div>
    );
};

export default MainContentNews;