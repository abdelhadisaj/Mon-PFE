import React from 'react'
import Match from '../match-componant/Match'
import ContactList from '../Contactlist-comp/ContactList';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import NavBar from '../Navbar/NavBar';

function matchPage() {


  return (
    <>
      <NavBar/>
      <Grid container mt={1}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2}>
                <Paper><ContactList/></Paper>
            </Grid>
            <Grid item xs={8} >
                <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pt:2, pb:2 }}>
                    <Match/>
                </Paper>
            </Grid>
            <Grid item xs={1}>
            </Grid>

       </Grid>        
    </>
  )
}

export default matchPage;