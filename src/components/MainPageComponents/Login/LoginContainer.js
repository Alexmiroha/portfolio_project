import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        loginState: state.loginPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps) (Login);

export default LoginContainer;
