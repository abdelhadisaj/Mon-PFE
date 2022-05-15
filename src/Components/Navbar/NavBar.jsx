import React, { useState } from 'react'
import './NavBar.css'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import logo from '../../images/logo.png';
import home from '../../images/home.png';
import notification from '../../images/notification.png';
import conversation from '../../images/conversation.png';
import match from '../../images/match.png';
import profile from '../../images/profile.png';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function NavBar(){
  const [anchorEl, setAnchorEl] = useState(undefined);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
      <div className='Nabvar'>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <img className='navbar_logo' src={logo} width="130px"/>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3} style = {{ display:"flex",flexDirection:'row', alignItems: 'center'}}>
            <img className='menu' src={home} width="25px" height="25px"/>
            <img className='menu' src={notification} width="25px" height="25px"/>
            <img className='menu' src={conversation} width="25px" height="25px"/>
            <img className='menu' src={match} width="25px" height="25px"/>
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
  )
}

export default NavBar
