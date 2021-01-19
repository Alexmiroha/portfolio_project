import {combineReducers, createStore} from "redux";
import profileReduser from './Reducer-Profile';
import messagesReduser from './Reducer-Messages';

let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messagesReduser,
});





let store = createStore(redusers);

export default store;