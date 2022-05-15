import React, { Component } from 'react'
import './NavBar.css'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import logo from '../../images/logo.png';
import home from '../../images/home.png';
import notification from '../../images/notification.png';
import conversation from '../../images/conversation.png';
import match from '../../images/match.png';
import profile from '../../images/profile.png';




class NavBar extends Component {
  render() {
    return (
      <div>
        <div className='Nabvar'>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img className='navbar_logo' src={logo} width="130px"/>
            </Grid>
            <Grid item xs={3}>
              <input className='searchbar' type="text" placeholder='Search' />
            </Grid>
            <Grid item xs={3} style = {{"display":"flex"}}>
              <img className='menu' src={home} width="25px" height="25px"/>
              <img className='menu' src={notification} width="25px" height="25px"/>
              <img className='menu' src={conversation} width="25px" height="25px"/>
              <img className='menu' src={match} width="25px" height="25px"/>
              <Avatar className='menu' src={profile} style = {{"maxWidth":"25px","maxHeight":"25px"}}/>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>

        </div>
      </div>
    )
  }
}

export default NavBar
