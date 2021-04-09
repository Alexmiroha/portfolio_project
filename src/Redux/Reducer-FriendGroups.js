const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [],

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
            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state;


    }
}

export const FollowAC = (userId) => ({type: 'FOLLOW', userId});

export const UnfollowAC = (userId) => ({type: 'UNFOLLOW', userId});

export const SetUsersAC = (users) => ({type: 'SET_USERS', users});

export default FriendsReduser;