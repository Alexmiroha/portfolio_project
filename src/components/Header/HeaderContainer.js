import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getProfileHeader} from "../../Redux/Reducer-Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileHeader()
    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isLogined: state.header.isLogined,
    login: state.header.login
});

export default connect(mapStateToProps, {getProfileHeader}) (HeaderContainer);