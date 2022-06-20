import React, { useState } from 'react'
import './NavBar.css'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import logo from '../../images/logo.png';
import profile from '../../images/profile.png';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { grey } from '@mui/material/colors';

function NavBar({setLoggedIn}){
  const [anchorEl, setAnchorEl] = useState(undefined);
  const open = Boolean(anchorEl);
  const history = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const homePage = () =>{
    history('/')
  }
  const conversationPage = () =>{
    history('/messages')
  }
  const matchPage = () =>{
    history('/match')
  }
  const profilePage = () =>{
    history('/profile')
    setAnchorEl(null);
  }
  const loginPage = () =>{
    sessionStorage.clear();
    setLoggedIn(true);
    setAnchorEl(null);
    history('/login')
  }
  
  return (
      <div className='Nabvar'>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={3} mt={2} pb={1}>
            <img className='navbar_logo' src={logo} width="130px"/>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={4} style = {{ display:"flex",flexDirection:'row', alignItems: 'center'}} sx={{ml:9}}>
                <BottomNavigation>
                      <BottomNavigationAction icon={<HomeIcon sx={{ color: grey[900], fontSize: 29 }}/> } onClick={homePage} />
                      <BottomNavigationAction icon={<Badge color="error" badgeContent={99} ><QuestionAnswerIcon sx={{ color: grey[900], fontSize: 29 }} /> </Badge>} onClick={conversationPage}/>
                      <BottomNavigationAction icon={<Badge color="error" badgeContent={14} ><FavoriteIcon sx={{ color: grey[900], fontSize: 29 }} /> </Badge>} onClick={matchPage}/>
              </BottomNavigation>
            <IconButton 
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} src={profile} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={profilePage}>Profile</MenuItem>
              <MenuItem onClick={loginPage}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
  )
}

export default NavBar
