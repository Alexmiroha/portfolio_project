import React from 'react';
import {FaCheck} from "react-icons/fa";
import s from './NicknameChanger.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators";
import Input from "../../../reusableComponents/Inputs/Input";

const maxLength15 = maxLengthCreator(15);

const NicknameChanger = (props) => {

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field
                validate={[maxLength15]}
                component={Input}
                name={"NicknameField"}
                padding="8px 8px 4px 10px"
                inputMargin="30px"
            />
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
