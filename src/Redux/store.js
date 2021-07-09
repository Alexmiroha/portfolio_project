import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from './Reducer-Profile';
import messagesReduser from './Reducer-Messages';
import FriendsReduser from "./Reducer-FriendGroups";
import HeaderReduser from "./Reducer-Header";
import thunk from "redux-thunk";
import loginReduser from "./Reduser-Login";

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    friendGroupPage: FriendsReduser,
    header: HeaderReduser,
    loginPage: loginReduser

});





let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;