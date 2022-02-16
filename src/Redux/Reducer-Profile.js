import avatar from "../img/UserAvatarSmall.jpg";
import postImage from "../components/MainPageComponents/Profile/MainContentBlock/img/post-photo6.jpg";
import u1 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic7.jpg";
import u2 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic8.jpg";
import u3 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic9.jpg";
import u4 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic10.jpg";
import u5 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic11.jpg";
import {profileAPI} from "../API/API";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    postsData: [
        {
            id: 4, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Jack Sparrow",
            postTime: "4 hours ago", postMessage: "I'm SuperAwsome",
            likeCount: 10, liker1: "Dima", liker2: "Katya", commentCount: 3, repostCount: 1
        },

    ],
    profile: null,
    status: "",

}

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1, uImgs: {}, authorAvatar: {avatar},
                postImage: {postImage}, authorName: "Jack Sparrow",
                postTime: "1 minute ago", postMessage: action.addPostTexarea,
                likeCount: 0, liker1: "", liker2: "", commentCount: 0, repostCount: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            };
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        };
        case SET_USER_STATUS: {
            return {
                ...state, status: action.status
            }
        }

        default:
            return state;

    }
}


export const addPost = (addPostTexarea) => ({type: 'ADD-POST', addPostTexarea});
export const SetUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const SetUserStatus = (status) => ({type: 'SET_USER_STATUS', status});


// thunks thunks thunks
export const getProfile = (userID) => {
    return (dispatch) => {
        profileAPI.getUsersProfile(userID).then(data => {
            dispatch(SetUserProfile(data));
        })
    }
}

export const getUserStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userID).then(response => {
            dispatch(SetUserStatus(response.data));
            if (response.data === null || response.data === '') {
                dispatch(SetUserStatus('...'));
            }
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUserStatus(status));
            }
        })
    }
}
// thunks thunks thunks

export default profileReduser;