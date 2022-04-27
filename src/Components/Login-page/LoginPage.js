import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import mainimage from '../../images/12362547.png';
import logo from '../../images/logo.png';
import './LoginPage.css';
import SignIn from '../Signin-comp/SignIn';
import SignUp from '../Signup-comp/SignUp';

export class LoginPage extends Component {
        constructor(props){
        super(props);
        this.state={
          isLogin : true
          }
  }

  changeLogin = () => {
    if(this.state.isLogin)
    this.setState({isLogin : false});
    else
    this.setState({isLogin : true});
  }





  render() {
    return (
      <div>
        <Grid container>
            <Grid item xs={2}>
              
            </Grid>
            <Grid item xs={8}>
            <div className='loginpage_main'>
                  <div>
                    <img src= {mainimage} width ="554px" />
                  </div>
                    <div className='loginpage_formcomponant'>
                      <div><img className='loginpage_logo' src= {logo}/></div>
                          <div className='loginpage_signin'>

                                {
                                  this.state.isLogin ? <SignIn/> : <SignUp/>
                                }

                            <div className='forget_pass'>Forgot password ?</div>
                          </div>
                          <div className='loginpage_signupbar'>

                                 {
                                  this.state.isLogin ? <div className='element1et2'>D'ont have an account ?? <span onClick={this.changeLogin} style={{"font-weight":"bold","color":"#0395f6"}}>Sign in</span></div> 
                                  : <div className='element1et2'>Have an account ?? <span onClick={this.changeLogin} style={{"font-weight":"bold","color":"#0395f6"}}>Log in</span></div>
                                 }



                              
                              
                            </div> 
                            
                    </div>

             </div>

            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default LoginPage
