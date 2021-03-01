import React from 'react';
import {connect} from "react-redux";
import MainContentBlock from "./MainContentBlock";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}


const MainContentBlockContainer = connect(mapStateToProps, mapDispatchToProps) (MainContentBlock);






export default MainContentBlockContainer;
