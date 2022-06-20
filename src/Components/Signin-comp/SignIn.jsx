import React, {useState} from 'react'
import "../Login-page/LoginPage.css";
import { login } from '../../services/auth'; 
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

function SignIn({setLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const handleLogin = async () =>{
    let data = await login(email, password);
    sessionStorage.setItem('token',data.data.token);
    setLoggedIn(false);
    history('/')
  }

  return (
    <div>
      <TextField
        // html input attribute
        name="email"
        type="email"
        placeholder="adresse@email.com"
        // pass down to FormLabel as children
        label="Email"
      />
      <TextField
        name="password"
        type="password"
        placeholder="password"
        label="Password"
      />
      <input className='loginpage_text' type="text" placeholder='Phone number, username or email' onChange={(val)=>setEmail(val.target.value)}/>
      <input className='loginpage_text' type="password" placeholder='Password' onChange={(val)=>setPassword(val.target.value)}/>
      <button className='loginpage_button' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default SignIn
