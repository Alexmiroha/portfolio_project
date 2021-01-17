import avatar from "../img/UserAvatarSmall.jpg";
import postImage from "../components/MainPageComponents/Profile/MainContentBlock/img/post-photo6.jpg";


const ADD_POST = 'ADD-POST';
const UPDT_NEWPOST_TEXTAREA = 'UPDT-NEWPOST-TEXTAREA';


const profileReduser = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1, uImgs: {}, authorAvatar: {avatar},
                postImage: {postImage}, authorName: "Jack Sparrow",
                postTime: "1 minute ago", postMessage: state.newPostTextarea,
                likeCount: 0, liker1: "", liker2: "", commentCount: "0", repostCount: "0"
            }
            state.postsData.unshift(newPost);
            state.newPostTextarea = '';
            return state;
        case UPDT_NEWPOST_TEXTAREA:
            state.newPostTextarea = action.newText;
            return state;
        default:
            return state;

    }
}


export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const changeTextareaActionCreator = (text) => ({
    type: 'UPDT-NEWPOST-TEXTAREA', newText: text
});


export default profileReduser;