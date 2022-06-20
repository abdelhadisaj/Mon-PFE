
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/Login-page/LoginPage';
import MatchPage from './Components/Matchpage/MatchPage';
import { useState } from 'react';
import ConversationPage from './Components/Conversationpage/ConversPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import ProfilePage from './Components/Profile-page/ProfilePage';



function App() {
   const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
      {!loggedIn ? <NavBar setLoggedIn={setLoggedIn}/>:null}
        <Routes>
          <Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn}/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/match' element={<MatchPage/>}/>
          <Route path='/messages' element={<ConversationPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
