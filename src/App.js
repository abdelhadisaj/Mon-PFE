import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/login';
// import MatchPage from './Components/Matchpage/matchPage';
import ConversationPage from './Components/Conversationpage/ConversPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProfilePage from './Components/Profile-page/ProfilePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          {/* <Route path='/match' element={<MatchPage/>}/> */}
          <Route path='/messages' element={<ConversationPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
