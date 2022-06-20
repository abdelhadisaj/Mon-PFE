import React, { useState } from 'react'
import {Grid, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from '../../images/logo.png';
import './LoginPage.css';
import SignIn from '../Signin-comp/SignIn';
import SignUp from '../Signup-comp/SignUp';

function LoginPage ({ setLoggedIn }) {
  const [isAccount, setAccount] = useState(true);
  

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
          <Grid item xs={6} sx={{mt: 12}}>
            <img src={logo} />
            <Typography variant="h5" gutterBottom component="div" align="center">
              Avec JustShare, partagez et restez en contact avec votre entourage
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Card sx={isAccount ? {mt: 18}:{mt: 14}}>
              <CardContent>
                  {
                    isAccount ? 
                    <SignIn setLoggedIn={setLoggedIn} setAccount={setAccount}/> 
                    : <SignUp setAccount={setAccount}/>
                  }
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage
