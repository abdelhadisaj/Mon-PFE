import { useQuery } from 'react-query'
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/login';
// import MatchPage from './Components/Matchpage/matchPage';
import ConversationPage from './Components/Conversationpage/ConversPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import ProfilePage from './Components/Profile-page/ProfilePage';
import { getCurrentUser } from './services/user'; 


function App() {
  const { isSuccess } = useQuery('currentUser', getCurrentUser, {
    enabled: false,
    retry: false,
    cacheTime: Infinity,
  });

  return (
    <>
      <BrowserRouter>
      {isSuccess ? <NavBar />:null}
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
