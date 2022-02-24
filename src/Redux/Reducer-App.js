import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = 'SET_USER_AUTH'
const DELETE_USER_AUTH = 'DELETE_USER_AUTH'
const SET_INITIALIZED = 'SET_INITIALIZED'
const CHANGE_SIDEBAR = 'CHANGE_SIDEBAR'


let initialState = {
    initialized: null,
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isLogined: false,
    activeSidebar: null
}


const AppReduser = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_SIDEBAR:
            return {
                ...state,
                activeSidebar: action.value
            }
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
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

export const changeSidebar = (value) => ({
    type: 'CHANGE_SIDEBAR', value
});

export const setInitializationCompleted = () => ({
    type: 'SET_INITIALIZED'
});

export const setUserAuthData = (userId, email, login) => ({
    type: 'SET_USER_AUTH', data: {userId, email, login}
});

export const deleteUserAuthData = (userId, email, login) => ({
    type: 'DELETE_USER_AUTH', data: {userId, email, login}
});

// thunks thunks thunks
export const initializeApp = () => {
    return (dispatch) => {
        let getAuthDataDispatch = dispatch(getAuthData());
        // після діспатча getAuthData Апка проініціалізується
        getAuthDataDispatch.then( () => {
            dispatch(setInitializationCompleted())
            })
    }
}

export const getAuthData = () => (dispatch) => {
    // робим всередині ретурн, шоб проміс був ззовні, що дасть можливість значь чи закінчився проміс
    return authAPI.getProfileData().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserAuthData(id, email, login));
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthData());
                dispatch(changeSidebar(null))
            }
            else {
                let error = response.data.messages.length > 0 ? response.data.messages[0] : "Unknown error"
                dispatch(stopSubmit("login", {_error: error}))
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(deleteUserAuthData(null, null, null))
                dispatch(changeSidebar(null))
            }
        });
}

// thunks thunks thunks

export default AppReduser;