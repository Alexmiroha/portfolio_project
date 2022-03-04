import React from 'react';
import {FaCheck} from "react-icons/fa";
import s from './NicknameChanger.module.css'
import {Field, reduxForm} from "redux-form";


const NicknameChanger = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component="textarea" name="NicknameField" placeholder='Nickname' className={s.formField}/>
            <button>
                <div className={s.icon}>
                    <FaCheck/>
                </div>
            </button>
        </form>
    );
};

const NicknameChangerForm = reduxForm({form: "NicknameForm"}) (NicknameChanger);


export default NicknameChangerForm;
