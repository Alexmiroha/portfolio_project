import avatar from "../img/UserAvatarSmall.jpg";
import postImage from "../components/MainPageComponents/Profile/MainContentBlock/img/post-photo6.jpg";
import u1 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic7.jpg";
import u2 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic8.jpg";
import u3 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic9.jpg";
import u4 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic10.jpg";
import u5 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic11.jpg";


const ADD_POST = 'ADD-POST';
const UPDT_NEWPOST_TEXTAREA = 'UPDT-NEWPOST-TEXTAREA';


let initialState = {
    postsData: [
        {
            id: 4, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Jack Sparrow",
            postTime: "4 hours ago", postMessage: "I'm SuperAwsome",
            likeCount: 10, liker1: "Dima", liker2: "Katya", commentCount: 3, repostCount: 1
        },
        {
            id: 3, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Jack Sparrow",
            postTime: "7 hours ago", postMessage: "Hello World",
            likeCount: 15, liker1: "Roma", liker2: "Igor", commentCount: 1, repostCount: 0
        },
        {
            id: 2, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Jack Sparrow",
            postTime: "4 days ago", postMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            likeCount: 53, liker1: "Dasha", liker2: "Yuliya", commentCount: 4, repostCount: 2
        },
        {
            id: 1, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Kateryna Buha",
            postTime: "1minute ago", postMessage: "Hello I'm Katya",
            likeCount: 100, liker1: "Vladilav", liker2: "Oleksii", commentCount: 10, repostCount: 5
        },

    ],
    newPostTextarea: ""

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
        default:
            return state;

    }
}


export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const changeTextareaActionCreator = (text) => ({
    type: 'UPDT-NEWPOST-TEXTAREA', newText: text
});


export default profileReduser;