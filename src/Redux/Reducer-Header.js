import {headerAPI} from "../API/API";

const SET_USER_AUTH = 'SET_USER_AUTH'
const DELETE_USER_AUTH = 'DELETE_USER_AUTH'


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
            }
        case DELETE_USER_AUTH:
            return {
                ...state,
                ...action.data,
                isLogined: false
            }
        default:
            return state;


    }
}

export const setUserAuthData = (userId, email, login) => ({
    type: 'SET_USER_AUTH', data: {userId, email, login}
});

export const deleteUserAuthData = (userId, email, login) => ({
    type: 'DELETE_USER_AUTH', data: {userId, email, login}
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

export const login = (email, password, rememberMe) => (dispatch) => {
    headerAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getProfileHeader())
            }
        });
}

export const logout = () => (dispatch) => {
    headerAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(deleteUserAuthData(null, null, null))
            }
        });
}


// thunks thunks thunks

export default HeaderReduser;