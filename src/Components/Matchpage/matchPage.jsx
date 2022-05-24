import React from 'react'
import Match from '../match-componant/Match'
import contactList from '../Contactlist-comp/contactList';
import Grid from '@mui/material/Grid';

function matchPage() {


  return (
      
      <Grid container>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={3}>
                <contactList/>
            </Grid>
            <Grid item xs={7}>
                <Match/>
            </Grid>
            <Grid item xs={1}>
            
            </Grid>

    </Grid>        

  )
}

export default matchPage;