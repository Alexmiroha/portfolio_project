import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isLogined: state.header.isLogined
});


export const withLoginRedirect = (Component) => {

    let LoginRedirect = (props) => {
        if (!props.isLogined) return <Redirect to='/Login'/>
        return <Component {...props}/>
    }

    let ConnectedLoginRedirect = connect(mapStateToProps) (LoginRedirect)

    return ConnectedLoginRedirect;
}