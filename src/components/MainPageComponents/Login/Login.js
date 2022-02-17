import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
                <div className={s.inputs}>
                    <Field component={"input"} name={"login"} placeholder={"Login"}/>
                    <Field component={"input"} name={"password"} placeholder={"Password"}/>
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
