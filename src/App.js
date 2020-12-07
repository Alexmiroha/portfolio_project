import logo from './img/logo.png';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/MainPageComponents/Profile/Profile";
import MessagesSidebar from "./components/MessagesSidebar/MessagesSidebar";
import NewsFeed from "./components/MainPageComponents/NewsFeed/NewsFeed";
import {BrowserRouter, Route} from "react-router-dom";
import FavPagesFeed from "./components/MainPageComponents/FavPagesFeed/FavPagesFeed";
import FriendGroups from "./components/MainPageComponents/FriendGroups/FriendGroups";
import Music from "./components/MainPageComponents/Music/Music";
import Weather from "./components/MainPageComponents/Weather/Weather";
import Calendar from "./components/MainPageComponents/Calendar/Calendar";
import Badges from "./components/MainPageComponents/Badges/Badges";
import AccStats from "./components/MainPageComponents/AccountStats/AccStats";
import Widgets from "./components/MainPageComponents/Widgets/Widgets";

function App() {
  return (
      <BrowserRouter>
    <div className="App-wrapper">
        <Header />
        <Sidebar />
        <div className='App-wrapper-content'>
            <Route path='/profile' component={Profile} />
            <Route path='/feed' component={NewsFeed} />
            <Route path='/fav' component={FavPagesFeed} />
            <Route path='/friends' component={FriendGroups} />
            <Route path='/music' component={Music} />
            <Route path='/weather' component={Weather} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/badges' component={Badges} />
            <Route path='/stats' component={AccStats} />
            <Route path='/widgets' component={Widgets} />
        </div>
        <MessagesSidebar />
    </div>
      </BrowserRouter>
  );
}

export default App;
