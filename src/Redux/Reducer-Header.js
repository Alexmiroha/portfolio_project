import {headerAPI, usersAPI} from "../API/API";
import {SetUnfollow, toggleFollowingInProgress} from "./Reducer-FriendGroups";

const SET_USER_AUTH = 'SET_USER_AUTH'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isLogined: false
}


const HeaderReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.data,
                isLogined: true
            };
        default:
            return state;


    }
}

export const setUserAuthData = (userId, email, login) => ({
    type: 'SET_USER_AUTH', data: {userId, email, login}
});

// thunks thunks thunks
export const getProfileHeader = () => {
    return (dispatch) => {
        headerAPI.getProfileData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserAuthData(id, email, login));
            }
        })

    }
}
// thunks thunks thunks

export default HeaderReduser;