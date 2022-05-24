
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/Login-page/LoginPage';
import MatchPage from './Components/Matchpage/matchPage';
import { useState } from 'react';



function App() {
  // const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {/* {loggedIn ? <HomePage/> : <LoginPage/>} */}
      <MatchPage/>
    </div>
  );
}

export default App;
