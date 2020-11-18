import logo from './img/logo.png';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import MessagesSidebar from "./components/MessagesSidebar/MessagesSidebar";

function App() {
  return (
    <div className="App-wrapper">
        <Header />
        <Sidebar />
        <Profile />
        <MessagesSidebar />
    </div>
  );
}

export default App;
