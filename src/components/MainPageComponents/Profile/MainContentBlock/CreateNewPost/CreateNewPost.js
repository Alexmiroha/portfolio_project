import React from 'react';
import s from "./CreateNewPost.module.css";
import avatar from '../../../../../img/UserAvatarSmall.jpg'
import {FiMusic} from "react-icons/fi";
import {MdAddAPhoto} from "react-icons/md";
import {FaPhotoVideo} from "react-icons/fa";
import {CgMore} from "react-icons/cg";
import {RiListSettingsLine} from "react-icons/ri";
import {IconContext} from "react-icons";
import {Field, reduxForm} from "redux-form";




let CreateNewPost = (props) => {

    let addPost = (values) => {
        props.addPost(values.addPostTexarea)
    }

    return (
        <div className={s.createNewPost}>
            <NewPostReduxForm onSubmit={addPost}/>
        </div>
    );
};

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>

            <div className={s.userImage}>
                <img src={props.photo?.small || avatar} alt="user avatar"/>
            </div>
            <div className={s.forMoveTop}>
                <div className={s.inputField}>
                    <Field name="addPostTexarea"
                           placeholder="Share what you are thinking here..."
                           component="textarea"
                    />
                </div>
                <div className={s.buttons}>
                    <IconContext.Provider value={{size: '22px', color: '#c2c5d9'}}>
                        <div className={s.leftIcons}>
                            <div className={`${s.photoAdd} ${s.icon}`}><MdAddAPhoto/></div>
                            <div className={`${s.vidAdd} ${s.icon}`}><FaPhotoVideo/></div>
                            <div className={`${s.musicAdd} ${s.icon}`}><FiMusic/></div>
                            <div className={`${s.more} ${s.icon}`}><CgMore/></div>
                        </div>
                        <div className={`${s.settings} ${s.icon}`}><RiListSettingsLine/></div>
                        <div className={s.confirm}>
                            <button className={s.button}>Post</button>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </form>
    );
}

const NewPostReduxForm = reduxForm({ form: "NewPostForm" }) (NewPostForm)

export default CreateNewPost;
