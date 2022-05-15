import React from 'react'
import "../Login-page/LoginPage.css";

function SignIn() {
  
  return (
    <div>
      <input className='loginpage_text' type="text" placeholder='Phone number, username or email'/>
      <input className='loginpage_text' type="password" placeholder='Password'/>
      <button className='loginpage_button'>Login</button>
    </div>
  )
}

export default SignIn
