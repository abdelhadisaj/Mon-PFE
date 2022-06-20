import React, {useState} from 'react'
import "./Signup.css";
import { register } from '../../services/auth';
import { Grid, Button, IconButton, Input, InputLabel, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

function SignIn({setAccount}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [visible, setVisible] = useState(false);

  const handleRegister = async () =>{
    let data = await register(name, username, email, password);
    console.log(data)
  }
  
  const handleClickShowPassword = () => {
    setVisible(!visible);
  }

    return (
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
    )
}

export default SignIn;
