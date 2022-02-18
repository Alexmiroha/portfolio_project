import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLenthCreator, requiredCreator} from "../../../utils/validators";
import Input from "../../reusableComponents/Inputs/Input";

const maxLength25 = maxLenthCreator(25);
const requiredLogin = requiredCreator('login');
const requiredPassword = requiredCreator('password');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
                <div className={s.inputs}>
                    <Field component={Input} name={"login"} placeholder={"Login"} placeholder={"Login or email"} validate={[requiredLogin, maxLength25]}/>
                    <Field component={Input} name={"password"} placeholder={"Password"} validate={[requiredPassword, maxLength25]}/>
                </div>
                <div className={s.options}>
                    <label>
                        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
                        Remember Me
                    </label>
                    <div className={s.forgot}>Forgot my Password</div>
                </div>

                <button className={s.button}>Login</button>

        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"}) (LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={s.loginComponent}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

// редакс форм устарела, сейчас актуальны редакс фвйнл форм, формик, реакт хук форм

export default Login;
