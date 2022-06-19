import React, {useState} from 'react'
import "./Signup.css";
import { register } from '../../services/auth'; 

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () =>{
    let data = await register(name, username, email, password);
    console.log(data)
  }
  
    return (
      <div>
        <input className='loginpage_text' type="text" placeholder='Mobile Number Or Email' onChange={(val)=>setEmail(val.target.value)}/>
        <input className='loginpage_text' type="text" placeholder='Full Name' onChange={(val)=>setName(val.target.value)}/>
        <input className='loginpage_text' type="text" placeholder='Username' onChange={(val)=>setUsername(val.target.value)}/>
        <input className='loginpage_text' type="password" placeholder='Password' onChange={(val)=>setPassword(val.target.value)}/>
        <button className='loginpage_button' onClick={handleRegister}>Register</button>
      </div>
    )
}

export default SignIn;
