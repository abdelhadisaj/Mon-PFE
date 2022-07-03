import './App.css';
import HomePage from './Components/Homepage/HomePage';
import LoginPage from './Components/login';
// import MatchPage from './Components/Matchpage/matchPage';
import ConversationPage from './Components/Conversationpage/ConversPage';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProfilePage from './Components/Profile-page/ProfilePage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={sessionStorage.getItem('token') ? <Navigate to="/home"/> : <Navigate to="/login"/> }
          />
          <Route 
            path='/login' 
            element={sessionStorage.getItem('token') ? <Navigate to="/home"/> : <LoginPage/> } 
          />
          <Route 
            path='/home' 
            element={sessionStorage.getItem('token') ? <HomePage/> : <Navigate to="/login"/> }
          />
          {/* <Route path='/match' element={<MatchPage/>}/> */}
          <Route
            path='/messages' 
            element={sessionStorage.getItem('token') ? <ConversationPage/> : <Navigate to="/login"/> }
          />
          <Route 
            path='/profile' 
            element={sessionStorage.getItem('token') ? <ProfilePage/> : <Navigate to="/login"/> }
          />
          <Route 
            path="*" 
            element={<Navigate to="/" replace/> } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
