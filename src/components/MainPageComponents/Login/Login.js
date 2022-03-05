import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredCreator} from "../../../utils/validators";
import Input from "../../reusableComponents/Inputs/Input";
import {connect} from "react-redux";
import {login, logout} from "../../../Redux/Reducer-App";
import {Redirect} from "react-router-dom";

const maxLength25 = maxLengthCreator(25);
const requiredLogin = requiredCreator('login');
const requiredPassword = requiredCreator('password');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.inputs}>
                <Field component={Input} name={"email"} type={"text"} placeholder={"Login"}
                       placeholder={"Login or email"} validate={[requiredLogin, maxLength25]}/>
                <Field component={Input} name={"password"} type={"password"} placeholder={"Password"}
                       validate={[requiredPassword, maxLength25]}/>
            </div>
            {props.error && <div>{props.error}</div>}
            <div className={s.options}>
                <label>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                    Remember Me
                </label>
                <div className={s.forgot}>Forgot my Password</div>
            </div>
            <button className={s.button}>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isLogined) {
        return <Redirect to={"/profile"}/>
    } else return (
        <div className={s.loginComponent}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
};

// редакс форм устарела, сейчас актуальны редакс файнл форм, формик, реакт хук форм


const mapStateToProps = (state) => ({
    isLogined: state.app.isLogined
})

export default connect(mapStateToProps, {login, logout})(Login);
