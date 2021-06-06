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

export default HeaderReduser;