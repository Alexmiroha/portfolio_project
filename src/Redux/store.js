import {combineReducers, createStore} from "redux";
import profileReduser from './Reducer-Profile';
import messagesReduser from './Reducer-Messages';
import FriendsReduser from "./Reducer-FriendGroups";

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    friendGroupPage: FriendsReduser,

});





let store = createStore(redusers);

window.store = store;

export default store;