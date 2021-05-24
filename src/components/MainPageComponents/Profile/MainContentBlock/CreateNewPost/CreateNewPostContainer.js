import React from 'react';
import {addPost, changeTextarea} from "../../../../../Redux/Reducer-Profile";
import CreateNewPost from "./CreateNewPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostTextarea: state.profilePage.newPostTextarea,
        photo: state.profilePage.profile?.photos
    }
}


const CreateNewPostContainer = connect(mapStateToProps, {changeTextarea, addPost}) (CreateNewPost);






export default CreateNewPostContainer;
