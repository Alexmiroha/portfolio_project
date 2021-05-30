import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MessagesSidebar from "./components/MessagesSidebar/MessagesSidebar";
import NewsFeed from "./components/MainPageComponents/NewsFeed/NewsFeed";
import {Route, Redirect} from "react-router-dom";
import FavPagesFeed from "./components/MainPageComponents/FavPagesFeed/FavPagesFeed";
import Music from "./components/MainPageComponents/Music/Music";
import Weather from "./components/MainPageComponents/Weather/Weather";
import Calendar from "./components/MainPageComponents/Calendar/Calendar";
import Badges from "./components/MainPageComponents/Badges/Badges";
import AccStats from "./components/MainPageComponents/AccountStats/AccStats";
import Widgets from "./components/MainPageComponents/Widgets/Widgets";
import MessagesContainer from "./components/MainPageComponents/Messages/MessagesContainer";
import FriendGroupsContainer from "./components/MainPageComponents/FriendGroups/FriendGroupsContainer";
import ProfileContainer from "./components/MainPageComponents/Profile/ProfileContainer";


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
                <Route path='/profile/:userID' render={() => <ProfileContainer /> }/>
                <Route path='/feed' render={() => <NewsFeed/>}/>
                <Route path='/fav' render={() => <FavPagesFeed/>}/>
                <Route path='/friends' render={() => <FriendGroupsContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/weather' render={() => <Weather/>}/>
                <Route path='/calendar' render={() => <Calendar/>}/>
                <Route path='/badges' render={() => <Badges/>}/>
                <Route path='/stats' render={() => <AccStats/>}/>
                <Route path='/widgets' render={() => <Widgets/>}/>
                <Route path='/messages' render={() => <MessagesContainer />}/>
            </div>
            <MessagesSidebar/>
        </div>
    );
}

export default App;
