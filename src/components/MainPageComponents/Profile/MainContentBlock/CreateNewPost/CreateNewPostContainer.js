import React from 'react';
import {addPostActionCreator, changeTextareaActionCreator} from "../../../../../Redux/Reducer-Profile";
import CreateNewPost from "./CreateNewPost";




let CreateNewPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let changeTextarea = (text) => {
        props.dispatch(changeTextareaActionCreator(text));
    }


    return <CreateNewPost changeTextarea={changeTextarea} addPost={addPost} newPostTextarea={props.newPostTextarea}/>;
};

export default CreateNewPostContainer;
