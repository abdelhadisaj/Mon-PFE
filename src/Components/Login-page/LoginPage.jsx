import React, { useState } from 'react'
import {Grid,Button} from '@mui/material';
import mainimage from '../../images/12362547.png';
import logo from '../../images/logo.png';
import './LoginPage.css';
import SignIn from '../Signin-comp/SignIn';
import SignUp from '../Signup-comp/SignUp';

function LoginPage ({ setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);
  

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
          <Grid item xs={8}>
              <img src= {mainimage} width ="554px" />
          </Grid>
          <Grid item xs={4}>
            <div className='loginpage_formcomponant'>
              <div><img className='loginpage_logo' src= {logo}/></div>
                  <div className='loginpage_signin'>
                    {
                      isLogin ? <SignIn setLoggedIn={setLoggedIn}/> : <SignUp/>
                    }
                    <div className='forget_pass'>Forgot password ?</div>
                  </div>
                  <div className='loginpage_signupbar'>
                    {
                    isLogin ? 
                    <div className='element1et2'>
                      Don't have an account ?? 
                      <Button variant="text" onClick={()=>setIsLogin(false)}>Sign Up</Button>
                    </div> 
                    : <div className='element1et2'>
                      Have an account ?? 
                      <Button variant="text" onClick={()=>setIsLogin(true)}>Login</Button>
                      </div>
                    }
                  </div> 
            </div>
          </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage
