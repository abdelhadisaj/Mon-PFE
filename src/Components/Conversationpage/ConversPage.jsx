import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from '../Navbar/NavBar';
import ContactMessage from '../Contactmessage-comp/ContactMessage';
import MsgContainer from '../messagescontainer-comp/MsgContainer';

function ConversationPage() {


  return (
    <>
      <Grid container mt={1}>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2}>
                <Paper><ContactMessage/></Paper>
            </Grid>
            <Grid item xs={8} >
                <MsgContainer/>
            </Grid>
            <Grid item xs={1}>
            </Grid>

       </Grid>        
    </>
  )
}

export default ConversationPage;