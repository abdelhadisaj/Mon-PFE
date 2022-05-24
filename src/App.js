
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/Login-page/LoginPage';
import matchPage from './Components/Matchpage/matchPage';
import contactList from './Components/Contactlist-comp/contactList';
import Match from './Components/match-componant/Match';
import { useState } from 'react';



function App() {
  // const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {/* {loggedIn ? <HomePage/> : <LoginPage/>} */}
      {/* <matchPage/> */}
      <contactList/>
    </div>
  );
}

export default App;
