import React from 'react';
import { Redirect } from "react-router-dom"
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isLogined: state.app.isLogined
});


export const withLoginRedirect = (Component) => {

    let LoginRedirect = (props) => {
        if (!props.isLogined) return <Redirect to='/Login'/>
        return <Component {...props}/>
    }

    let ConnectedLoginRedirect = connect(mapStateToProps) (LoginRedirect)

    return ConnectedLoginRedirect;
}