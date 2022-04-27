import React, { Component } from 'react'
import "../Login-page/LoginPage.css";

class SignIn extends Component {
  render() {
    return (
      <div>
        <input className='loginpage_text' type="text" placeholder='Phone number, username or email'/>
        <input className='loginpage_text' type="password" placeholder='Password'/>
        <button className='loginpage_button'>Login</button>
      </div>
    )
  }
}

export default SignIn
