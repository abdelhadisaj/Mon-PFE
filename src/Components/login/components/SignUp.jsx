import React, {useState} from 'react'
import { register } from '../../../services/auth';
import { Grid, Button, IconButton, Input, InputLabel, FormControl, Snackbar, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation } from 'react-query'

function SignIn({setAccount}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);
  const [openS, setOpenS] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [error, setError] = React.useState('');
  const mutation = useMutation((values) => register(values.name, values.username, values.email, values.password), {
    onSuccess: (data) => {
      console.log(data)
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('pwd', password);
      setOpenS(true);
      setAccount(true);
    },
    onError: (err) => {
      console.log(err)
      setOpenE(true);
    },
  });

  const handleRegister = async () =>{
    if(email != '' && password != '' && name != '' && username != ''){
      mutation.mutate({ name, username, email, password });
    }else {
      setError('Please Make Sure To Input Your Information Correctly !!!!')
      setOpenE(true);
    }
  }
  
  const handleClickShowPassword = () => {
    setVisible(!visible);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenS(false);
    setOpenE(false);
  };

  return (
    <>
      <Snackbar open={openS} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          User Registerd Successfully !!!
        </Alert>
      </Snackbar>
      <Snackbar open={openE} autoHideDuration={6000} onClose={handleClose}>
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
            <FormControl sx={{ m: 1, width: '32ch' }} variant="standard">
              <InputLabel htmlFor="standard-name">Full Name</InputLabel>
              <Input
                id="standard-name"
                type='text'
                value={name}
                onChange={(val)=>setName(val.target.value)}
                label="Full Name"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ m: 1, width: '32ch' }} variant="standard">
              <InputLabel htmlFor="standard-username">Username</InputLabel>
              <Input
                id="standard-username"
                type='text'
                value={username}
                onChange={(val)=>setUsername(val.target.value)}
                label="Username"
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
              onClick={handleRegister}
              size="medium"
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={8} >
            Have an account ?? 
            <Button variant="text" size="small" onClick={()=>setAccount(true)}>Sign In</Button>
          </Grid>
      </Grid>
    </>
  )
}

export default SignIn;
