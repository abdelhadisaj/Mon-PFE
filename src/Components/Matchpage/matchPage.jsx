import React from 'react'
import Match from '../match-componant/Match'
import ContactList from '../Contactlistmatch-comp/ContactList';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from '../Navbar/NavBar';

function MatchPage() {


  return (
    <>
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

export default MatchPage;