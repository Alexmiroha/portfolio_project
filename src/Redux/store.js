import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from './Reducer-Profile';
import messagesReduser from './Reducer-Messages';
import FriendsReduser from "./Reducer-FriendGroups";
import HeaderReduser from "./Reducer-Header";
import thunk from "redux-thunk";
import loginReduser from "./Reduser-Login";
import { reducer as formReduser } from "redux-form";

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
    friendGroupPage: FriendsReduser,
    header: HeaderReduser,
    loginPage: loginReduser,
    form: formReduser,

});





let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;