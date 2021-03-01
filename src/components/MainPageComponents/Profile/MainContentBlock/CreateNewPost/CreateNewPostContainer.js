import React from 'react';
import {addPostActionCreator, changeTextareaActionCreator} from "../../../../../Redux/Reducer-Profile";
import CreateNewPost from "./CreateNewPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostTextarea: state.profilePage.newPostTextarea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeTextarea: (text) => {
            dispatch(changeTextareaActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const CreateNewPostContainer = connect(mapStateToProps, mapDispatchToProps) (CreateNewPost);






export default CreateNewPostContainer;
