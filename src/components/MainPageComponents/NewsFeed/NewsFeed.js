import React from 'react';
import s from './NewsFeed.module.css';
import LSidebarNews from "./LSidebarNews/LSidebarNews";
import MainContentNews from "./MainContentNews/MainContentNews";
import RSidebarNews from "./RSidebarNews/RSidebarNews";

function NewsFeed(props) {
    return (
        <div className={s.contentWrapper}>
            <LSidebarNews/>
            <MainContentNews/>
            <RSidebarNews/>
        </div>
    );
}






















export default NewsFeed;