import {usersAPI} from "../API/API";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    UersPageSize: 5,
    UsersTotalCount: 5,
    SelectedPage: 1,
    isLoading: true,
    followingInProgress: [],
}


const FriendsReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_SELECTED_PAGE: {
            return {...state, SelectedPage: action.SelectedPage}
        }

        case SET_USERS_TOTAL_COUNT: {
            return {...state, UsersTotalCount: action.UsersTotalCount}
        }

        case TOGGLE_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }

        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;


    }
}

export const SetFollow = (userId) => ({type: 'FOLLOW', userId});

export const SetUnfollow = (userId) => ({type: 'UNFOLLOW', userId});

export const SetUsers = (users) => ({type: 'SET_USERS', users});

export const SetSelectedPage = (SelectedPage) => ({type: 'SET_SELECTED_PAGE', SelectedPage})

export const setUsersTotalCount = (UsersTotalCount) => ({type: 'SET_USERS_TOTAL_COUNT', UsersTotalCount})

export const toggleIsLoading = (isLoading) => ({type: 'TOGGLE_IS_LOADING', isLoading})

export const toggleFollowingInProgress = (followingInProgress, userId) => ({
    type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
    followingInProgress,
    userId
})
// thunks thunks thunks
export const getUsers = (SelectedPage, PageSize) => {
    return (dispatch) => {
        dispatch(SetSelectedPage(SelectedPage));
        dispatch(toggleIsLoading(true));
        usersAPI.getUsers(SelectedPage, PageSize).then(data => {
            dispatch(toggleIsLoading(false));
            dispatch(SetUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(SetFollow(id));
            }
            dispatch(toggleFollowingInProgress(false, id));
        })

    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(SetUnfollow(id));
            }
            dispatch(toggleFollowingInProgress(false, id));
        })

    }
}
// thunks thunks thunks

export default FriendsReduser;