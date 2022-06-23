import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ContactMessage from '../Contactmessage-comp/ContactMessage';
import MsgContainer from '../messagescontainer-comp/MsgContainer';

const data =[
  {
      "username":"username1",
      "profileimg":"../../images/profile.png"
  },

  {
      "username":"username2",
      "profileimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "profileimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "profileimg":"../../images/profile.png"
  },
  {
      "username":"username1",
      "profileimg":"../../images/profile.png"
  },
  {
      "username":"username1",
      "profileimg":"../../images/profile.png"
  },

  {
      "username":"username2",
      "profileimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "profileimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "profileimg":"../../images/profile.png"
  },
  {
      "username":"username1",
      "profileimg":"../../images/profile.png"
  },
  {
      "username":"username1",
      "profileimg":"../../images/profile.png"
  },

  {
      "username":"username2",
      "profileimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "profileimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "profileimg":"../../images/profile.png"
  },
  {
      "username":"username1",
      "profileimg":"../../images/profile.png"
  }

];

function ConversationPage() {
  const [conversations, setConversations]= useState([]);
  const [conversation, setConversation]= useState(undefined);

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
          <ContactMessage conversations={data} setConversation={setConversation}/>
      </Grid>
      <Grid item xs={7} >
        {conversation ? (
            <MsgContainer messages={messages} user={user}/>
          ) : (
            <Container maxWidth="sm">
              <Box sx={{ bgcolor: 'white', width: 'auto', height: '80vh' }} >
              <Alert severity="info">
                <AlertTitle><strong>Info</strong></AlertTitle>
                Please Select A Conversation To Continue!
              </Alert>
              </Box>
            </Container>
          )
        }
      </Grid>
    </Grid>        
  )
}

export default ConversationPage;