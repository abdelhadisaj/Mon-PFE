import React, {useState} from 'react'
import { login } from '../../../services/auth'; 
import { useNavigate } from 'react-router-dom';
import { Grid, Button, IconButton, Input, InputLabel, FormControl, Divider, Snackbar, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation } from 'react-query'
import { useEffect } from 'react';

function SignIn({ setAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [openS, setOpenS] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const mutation = useMutation((values) => login(values.email, values.password), {
    onSuccess: (data) => {
      setOpenS(true);
      sessionStorage.setItem('token',data.data.token);
      sessionStorage.setItem('currentUser',data.data.user._id);
      sessionStorage.setItem('currentUserName',data.data.user.username);
      navigate('/home');
    },
    onError: (err) => {
      setError(err.response.data.message)
      setOpenE(true);
    },
  });

  useEffect(()=>{
    let e = sessionStorage.getItem('email');
    let p = sessionStorage.getItem('pwd');
    if(p && e){
      setEmail(e)
      setPassword(p)
      sessionStorage.clear();
    }
  },[])

  const handleLogin = async () => {
    if(email != '' && password != ''){
      mutation.mutate({email, password});
    }else {
      setError('Please Make Sure To Input Your Email Address And Password Correctly !!!!')
      setOpenE(true);
    }
  }

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenS(false);
    setOpenE(false);
  };

  return (
    <>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openS} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          User Logged In Successfully !!!
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openE} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
      >
        <Grid item xs={12} >
          <FormControl sx={{ m: 1, width: '32ch' }} variant="standard">
            <InputLabel htmlFor="standard-email">Email</InputLabel>
            <Input
              id="standard-email"
              type='email'
              value={email}
              onChange={(val)=>setEmail(val.target.value)}
              label="Email"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} >
          <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={visible ? 'text' : 'password'}
              value={password}
              onChange={(val)=>setPassword(val.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {visible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            size="medium"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12} >
          <Button
            variant="text"
            disabled
            size="small"
          >
            Forgot password ?
          </Button>
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={8} >
          Don't have an account ?? 
          <Button variant="text" size="small" onClick={()=>setAccount(false)}>Sign Up</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default SignIn
