import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/Reducer-App";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isLogined: state.app.isLogined,
    login: state.app.login
});

export default connect(mapStateToProps, {logout}) (HeaderContainer);