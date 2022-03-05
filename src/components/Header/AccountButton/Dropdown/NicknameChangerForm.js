import React from 'react';
import {FaCheck} from "react-icons/fa";
import s from './NicknameChanger.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators";

const maxLength25 = maxLengthCreator(25);

const NicknameChanger = (props) => {

    console.log(props)

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field validate={maxLength25} component={"textarea"} name={"NicknameField"} placeholder='Nickname' className={s.formField}/>
            <button>
                <div className={s.icon}>
                    <FaCheck/>
                </div>
            </button>
        </form>
    );
};

const NicknameChangerForm = reduxForm({form: "nickname"}) (NicknameChanger);


export default NicknameChangerForm;
