const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

let initialState = {
    users: [],
    UersPageSize: 5,
    UsersTotalCount: 5,
    SelectedPage: 1,
    isLoading: true,

}


const FriendsReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followedStatus: true}
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followedStatus: false}
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

        default:
            return state;


    }
}

export const FollowAC = (userId) => ({type: 'FOLLOW', userId});

export const UnfollowAC = (userId) => ({type: 'UNFOLLOW', userId});

export const SetUsersAC = (users) => ({type: 'SET_USERS', users});

export const SetSelectedPageAC = (SelectedPage) => ({type: 'SET_SELECTED_PAGE', SelectedPage})

export const setUsersTotalCountAC = (UsersTotalCount) => ({type: 'SET_USERS_TOTAL_COUNT', UsersTotalCount})

export const toggleIsLoadingAC = (isLoading) => ({type: 'TOGGLE_IS_LOADING', isLoading})

export default FriendsReduser;