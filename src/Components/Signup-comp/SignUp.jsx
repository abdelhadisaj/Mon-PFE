import React from 'react'
import "./Signup.css";

function SignIn() {
  
    return (
      <div>
        <input className='loginpage_text' type="text" placeholder='Mobile Number Or Email'/>
        <input className='loginpage_text' type="text" placeholder='Full Name'/>
        <input className='loginpage_text' type="text" placeholder='Username'/>
        <input className='loginpage_text' type="password" placeholder='Password'/>
        <button className='loginpage_button'>Login</button>
      </div>
    )
}

export default SignIn;
