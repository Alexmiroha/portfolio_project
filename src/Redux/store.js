import {combineReducers, createStore} from "redux";
import profileReduser from './Reducer-Profile';
import messagesReduser from './Reducer-Messages';
import FriendsReduser from "./Reducer-FriendGroups";
import HeaderReduser from "./Reducer-Header";

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    friendGroupPage: FriendsReduser,
    header: HeaderReduser,

});





let store = createStore(redusers);

window.store = store;

export default store;