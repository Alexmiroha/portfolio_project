import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_SOMETHING = 'SET_SOMETHING'


let initialState = {
    // userId: null,
    // email: null,
    // login: null,
    // isLoading: false,
    // isLogined: false
}


const HeaderReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_SOMETHING:
            return {
                ...state,
                ...action.data,
                isLogined: true
            }
        default:
            return state;


    }
}

// export const setUserAuthData = (userId, email, login) => ({
//     type: 'SET_SOMETHING', data: {userId, email, login}
// });

// thunks thunks thunks
// export const getAuthData = () => (dispatch) => {
//     // робим всередині ретурн, шоб проміс був ззовні, що дасть можливість значь чи закінчився проміс
//        return authAPI.getProfileData().then(data => {
//             if (data.resultCode === 0) {
//                 let {id, email, login} = data.data;
//                 dispatch(setUserAuthData(id, email, login));
//             }
//         })
//     }
// thunks thunks thunks

export default HeaderReduser;