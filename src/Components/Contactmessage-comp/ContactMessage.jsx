import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import { Avatar, Stack, Button, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import profile from '../../images/profile.png';
import './contactmessage.css'

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

function ContactMessage() {
    const [contactList, setcontactList] = useState(data);

  return (
    <Card
      sx={{
          width: 'auto',
          height: '100%',
          maxHeight: '80vh',
          mt: 3,
          mb: 3,
          p: 1, 
          overflowY: "auto",
      }}
    >
      <Stack 
        direction="column"
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{ width: '100%', height: '100%'}}
        >
        <Typography gutterBottom variant="h4" component="div" sx={{ m: 2}}>
          Conversations
        </Typography>
        <CardContent sx={{ width: '100%', height: '100%', p: 0}}>
          <Stack 
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ width: '100%', height: '100%'}}
          >
          {contactList.map((item)=>{
            return (
              <>
                <Button variant="text" sx={{ height: '100%', pt: 2, pb: 2, pl: 3, textTransform: 'none', fontSize: 16, color: 'black'}}>
                  <Stack 
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    sx={{width: '100vw'}}
                  >
                    <Avatar
                      alt="Contact"
                      src={profile}
                    />
                    <Typography variant="h6" component="div">
                        {item.username}
                    </Typography>
                  </Stack>
                </Button>
                <Divider orientation="horizontal" flexItem />
              </>
            )})
          }
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default ContactMessage;
