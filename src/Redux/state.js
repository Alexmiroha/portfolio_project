import u1 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic7.jpg";
import u2 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic8.jpg";
import u3 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic9.jpg";
import u4 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic10.jpg";
import u5 from "../components/MainPageComponents/Profile/MainContentBlock/img/friend-harmonic11.jpg";
import avatar from "../img/UserAvatarSmall.jpg";
import postImage from "../components/MainPageComponents/Profile/MainContentBlock/img/post-photo6.jpg"


let store = {
    _state: {
        messagePage: {
            dialogsData: [
                {id: 1, name: "Vas'an", path: "/messages/1"},
                {id: 2, name: "Igor", path: "/messages/2"},
                {id: 3, name: "Masha", path: "/messages/3"},
                {id: 4, name: "Sveta", path: "/messages/4"},
                {id: 5, name: "Andrey", path: "/messages/5"},
                {id: 6, name: "Yuliya", path: "/messages/6"},
                {id: 7, name: "Katya", path: "/messages/7"},
            ],
            messagesData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "I'm Vas'an"},
                {id: 3, message: "And today I will show U"},
                {id: 4, message: "How to play in this game"},
                {id: 5, message: "Let's Start!!!"},
                {id: 6, message: "Are U ready???"},
            ],

        },

        profilePage: {
            postsData: [
                {
                    id: 4, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
                    postImage: {postImage}, authorName: "Jack Sparrow",
                    postTime: "4 hours ago", postMessage: "I'm SuperAwsome",
                    likeCount: 10, liker1: "Dima", liker2: "Katya", commentCount: "3", repostCount: "1"
                },
                {
                    id: 3, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
                    postImage: {postImage}, authorName: "Jack Sparrow",
                    postTime: "7 hours ago", postMessage: "Hello World",
                    likeCount: 15, liker1: "Roma", liker2: "Igor", commentCount: "1", repostCount: "0"
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
                    likeCount: 53, liker1: "Dasha", liker2: "Yuliya", commentCount: "4", repostCount: "2"
                },
                {
                    id: 1, uImgs: {u1, u2, u3, u4, u5}, authorAvatar: {avatar},
                    postImage: {postImage}, authorName: "Kateryna Buha",
                    postTime: "1minute ago", postMessage: "Hello I'm Katya",
                    likeCount: 100, liker1: "Vladilav", liker2: "Oleksii", commentCount: "10", repostCount: "5"
                },

            ],
            newPostTextarea: ""

        },


    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    addPost() {
        let newPost = {
            id: 5, uImgs: {}, authorAvatar: {avatar},
            postImage: {postImage}, authorName: "Jack Sparrow",
            postTime: "1 minute ago", postMessage: this._state.profilePage.newPostTextarea,
            likeCount: 0, liker1: "", liker2: "", commentCount: "0", repostCount: "0"
        }
        this._state.profilePage.postsData.unshift(newPost);
        this._state.profilePage.newPostTextarea = '';
        this._callSubscriber(this._state);
    },
    updateNewPostTextarea(newText) {
        this._state.profilePage.newPostTextarea = newText;
        this._callSubscriber(this._state);

    },

    callback(observer) {
        this._callSubscriber = observer;
    }


}


export default store;
window.store = store;