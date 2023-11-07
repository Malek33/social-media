import Home from './components/Home';
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Search from './components/Search';
import Add from './components/Add';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import LikedPosts from './components/LikedPosts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/search"} element={<Search />}/>
          <Route path={"/add"} element={<Add />}/>
          <Route path={"/liked"} element={<LikedPosts />}/>
          <Route path={"/profile"} element={<Profile />}/>
          <Route path={"/notifications"} element={<Notifications />}/>
          <Route path={"/messages"} element={<Notifications />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
