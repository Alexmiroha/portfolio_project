import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/MainPageComponents/Profile/Profile";
import MessagesSidebar from "./components/MessagesSidebar/MessagesSidebar";
import NewsFeed from "./components/MainPageComponents/NewsFeed/NewsFeed";
import {Route, Redirect} from "react-router-dom";
import FavPagesFeed from "./components/MainPageComponents/FavPagesFeed/FavPagesFeed";
import FriendGroups from "./components/MainPageComponents/FriendGroups/FriendGroups";
import Music from "./components/MainPageComponents/Music/Music";
import Weather from "./components/MainPageComponents/Weather/Weather";
import Calendar from "./components/MainPageComponents/Calendar/Calendar";
import Badges from "./components/MainPageComponents/Badges/Badges";
import AccStats from "./components/MainPageComponents/AccountStats/AccStats";
import Widgets from "./components/MainPageComponents/Widgets/Widgets";
import Messages from "./components/MainPageComponents/Messages/Messages";


function App(props) {

    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <div className="App-wrapper">
            <Header/>
            <Sidebar active={sidebarActive} setActive={setSidebarActive}/>
            <div className='App-wrapper-content'>
                <Route exact path="/">
                    <Redirect to="/profile"/>
                </Route>
                <Route path='/profile' render={() => <Profile  profileData={props.state.profilePage}/> }/>
                <Route path='/feed' render={() => <NewsFeed/>}/>
                <Route path='/fav' render={() => <FavPagesFeed/>}/>
                <Route path='/friends' render={() => <FriendGroups/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/weather' render={() => <Weather/>}/>
                <Route path='/calendar' render={() => <Calendar/>}/>
                <Route path='/badges' render={() => <Badges/>}/>
                <Route path='/stats' render={() => <AccStats/>}/>
                <Route path='/widgets' render={() => <Widgets/>}/>
                <Route path='/messages' render={() => <Messages messagesState={props.state.messagePage}/>}/>
            </div>
            <MessagesSidebar/>
        </div>
    );
}

export default App;
