
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/Login-page/LoginPage';
import MatchPage from './Components/Matchpage/matchPage';
import { useState } from 'react';
import ConversationPage from './Components/Conversationpage/ConversPage';



function App() {
  // const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {/* {loggedIn ? <HomePage/> : <LoginPage/>} */}
      {/* <MatchPage/> */}
      <ConversationPage/>
    </div>
  );
}

export default App;
