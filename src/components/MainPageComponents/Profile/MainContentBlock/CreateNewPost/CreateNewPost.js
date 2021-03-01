import React from 'react';
import s from "./CreateNewPost.module.css";
import avatar from '../../../../../img/UserAvatarSmall.jpg'
import {FiSmile, FiMusic} from "react-icons/fi";
import {MdAddAPhoto} from "react-icons/md";
import {FaPhotoVideo} from "react-icons/fa";
import {CgMore} from "react-icons/cg";
import {RiListSettingsLine} from "react-icons/ri";
import {IconContext} from "react-icons";




let CreateNewPost = (props) => {
console.log(props)

    let addPost = () => {
        props.addPost();
    }

    let changeTextarea = (event) => {
    let text = event.target.value;
    props.changeTextarea(text);
    }


    return (
        <div className={s.createNewPost}>
            <form className={s.form}>

                <div className={s.userImage}>
                    <img src={avatar} alt="user avatar"/>
                </div>
                <div className={s.emojiButton}><FiSmile/></div>
                <div className={s.forMoveTop}>
                    <div className={s.inputField}>
                        <textarea name="text"
                                  placeholder="Share what you are thinking here..." value={props.newPostTextarea} onChange={changeTextarea}/>
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
                                <input type="button" value="Post" onClick={addPost}/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CreateNewPost;
