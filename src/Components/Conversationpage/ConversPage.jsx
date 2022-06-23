import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from '../Navbar/NavBar';
import ContactMessage from '../Contactmessage-comp/ContactMessage';
import MsgContainer from '../messagescontainer-comp/MsgContainer';

function ConversationPage() {
  let user = {
    id: 123,
    username: "Test"
  }

  let messages = [
    {
      senderId: 321,
      text: "test Message"
    },
    {
      senderId: 123,
      text: "Received Message"
    },
    {
      senderId: 321,
      text: "Sent Message"
    },
    {
      senderId: 123,
      text: "thanks Message"
    },
    {
      senderId: 321,
      text: "test Message"
    },
    {
      senderId: 123,
      text: "Received Message"
    },
    {
      senderId: 321,
      text: "Sent Message"
    },
    {
      senderId: 123,
      text: "thanks Message"
    },
    {
      senderId: 321,
      text: "test Message"
    },
    {
      senderId: 123,
      text: "Received Message"
    },
    {
      senderId: 321,
      text: "Sent Message"
    },
    {
      senderId: 123,
      text: "thanks Message"
    },
]

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={3}>
          <ContactMessage/>
      </Grid>
      <Grid item xs={7} >
          <MsgContainer messages={messages} user={user}/>
      </Grid>
    </Grid>        
  )
}

export default ConversationPage;