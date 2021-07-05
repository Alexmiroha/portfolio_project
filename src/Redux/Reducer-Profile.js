import avatar from "../img/UserAvatarSmall.jpg";
import postImage from "../components/MainPageComponents/Profile/MainContentBlock/img/post-photo6.jpg";
import u1 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic7.jpg";
import u2 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic8.jpg";
import u3 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic9.jpg";
import u4 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic10.jpg";
import u5 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic11.jpg";
import {profileAPI} from "../API/API";


const ADD_POST = 'ADD-POST';
const UPDT_NEWPOST_TEXTAREA = 'UPDT-NEWPOST-TEXTAREA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postsData: [
        {
            id: 4, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Jack Sparrow",
            postTime: "4 hours ago", postMessage: "I'm SuperAwsome",
            likeCount: 10, liker1: "Dima", liker2: "Katya", commentCount: 3, repostCount: 1
        },

    ],
    newPostTextarea: "",
    profile: null,


}

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDT_NEWPOST_TEXTAREA:
            return {
                ...state,
                newPostTextarea: action.newText
            };
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1, uImgs: {}, authorAvatar: {avatar},
                postImage: {postImage}, authorName: "Jack Sparrow",
                postTime: "1 minute ago", postMessage: state.newPostTextarea,
                likeCount: 0, liker1: "", liker2: "", commentCount: 0, repostCount: 0
            }
            return {
                ...state,
                newPostTextarea: '',
                postsData: [newPost, ...state.postsData]
            };
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }

        default:
            return state;

    }
}


export const addPost = () => ({type: 'ADD-POST'});
export const changeTextarea = (text) => ({
    type: 'UPDT-NEWPOST-TEXTAREA', newText: text
});
export const SetUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});


// thunks thunks thunks
export const getProfile = (userID) => {
    return (dispatch) => {
        profileAPI.getUsersProfile(userID).then(data => {
            dispatch(SetUserProfile(data));
        })
    }
}
// thunks thunks thunks

export default profileReduser;