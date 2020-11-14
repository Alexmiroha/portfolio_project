import logo from './img/logo.png';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import MessagesSidebar from "./components/MessagesSidebar";

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
