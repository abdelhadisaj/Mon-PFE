import React, {useState} from 'react'
import { login } from '../../../services/auth'; 
import { getCurrentUser } from '../../../services/user'; 
import { useNavigate } from 'react-router-dom';
import { Grid, Button, IconButton, Input, InputLabel, FormControl, Divider } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation, useQueryClient, useQuery } from 'react-query'
import { useEffect } from 'react';

function SignIn({ setAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const history = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation((values) => login(values.email, values.password), {
    onSuccess: (data) => {
      sessionStorage.setItem('token',data.data.token);
      sessionStorage.setItem('currentUser',data.data.user._id);
      queryClient.refetchQueries('currentUser');
    },
    onError: (err) => {
      console.log(err)
    },
  });

  const { isSuccess } = useQuery('currentUser', getCurrentUser, {
    enabled: false,
    retry: false,
    cacheTime: Infinity,
  });

  useEffect(()=>{
    if(isSuccess)history('/');
  },[isSuccess])

  const handleLogin = async () =>{
      try{
        console.log(email, password)
      await mutation.mutate({email, password});
    } catch(e) {
      console.log(e)
    }
  }

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

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
  )
}

export default SignIn
