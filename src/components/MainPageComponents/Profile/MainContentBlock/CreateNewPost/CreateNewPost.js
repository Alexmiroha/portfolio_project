import React from 'react';
import s from "./CreateNewPost.module.css";
import avatar from '../../../../../img/UserAvatarSmall.jpg'
import {FiSmile, FiMusic} from "react-icons/fi";
import {MdAddAPhoto} from "react-icons/md";
import {AiOutlineVideoCameraAdd} from "react-icons/ai";
import {CgMore} from "react-icons/cg";
import {RiListSettingsLine} from "react-icons/ri";
import {IconContext} from "react-icons";

const CreateNewPost = () => {
    return (
        <div className={s.createNewPost}>
            <form className={s.form}>

                    <div className={s.userImage}>
                        <img src={avatar} alt="user avatar"/>
                    </div>
                    <div className={s.emojiButton}><FiSmile/></div>
                    <div className={s.forMoveTop}>
                    <div className={s.inputField}>
                        <textarea name="text" id="NewPost" cols="30" rows="10"
                                  placeholder="Share what you are thinking here..."></textarea>
                    </div>
                    <div className={s.buttons}>
                        <IconContext.Provider value={{size: '22px', color: '#c2c5d9'}}>
                            <div className={s.leftIcons}>
                                <div className={`${s.photoAdd} ${s.icon}`}><MdAddAPhoto/></div>
                                <div className={`${s.vidAdd} ${s.icon}`}><AiOutlineVideoCameraAdd/></div>
                                <div className={`${s.musicAdd} ${s.icon}`}><FiMusic/></div>
                                <div className={`${s.more} ${s.icon}`}><CgMore/></div>
                            </div>
                            <div className={`${s.settings} ${s.icon}`}><RiListSettingsLine/></div>
                            <div className={s.confirm}>
                                <input type="submit"/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CreateNewPost;
