import React from 'react';
import {connect} from "react-redux";
import MainContentBlock from "./MainContentBlock";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile
    }
}


const MainContentBlockContainer = connect(mapStateToProps, {}) (MainContentBlock);






export default MainContentBlockContainer;
