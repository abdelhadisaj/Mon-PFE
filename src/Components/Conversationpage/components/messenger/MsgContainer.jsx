import { Paper, IconButton, TextField, Avatar, Stack, Divider } from '@mui/material';
import Typography  from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import profile from '../../../../images/profile.png';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import './msgcontainer.css';

const Send = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'cyan',
  padding: '1%',
  marginRight: '2%',
  marginBottom: '1%',
}));

const Receive = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'lightgray',
  padding: '1%',
  marginLeft: '2%',
  marginBottom: '1%',
}));

function MsgContainer({messages, user}) {
  const [message, setMessage] = useState('');
  const handleMessage = () => {
    console.log(message);
  }

  return (
    <Card
      sx={{
          width: '100%',
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
        sx={{ width: '100%', height: '100%'}}
      >
        <Stack 
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          sx={{width: '100%', m: 2, mt: 1, pl: 5}}
        >
          <Avatar
            alt="Contact"
            src={profile}
          />
          <Typography variant="h6" component="div">
              {user.username}
          </Typography>
        </Stack>
        <Divider orientation="horizontal" flexItem />
        <CardContent sx={{ width: '100%', height: '100%'}}>
          <Stack 
            direction="column"
            justifyContent="flex-end"
            alignItems="stretch"
            sx={{
              width: '100%',
              height: '80%',
          }}
          >
            {messages.map((item)=>{
              let send = true;
              console.log(1)
              if(item.senderId === user.id)send = false;
              return (
                <>
                {
                  send ? (
                    <Stack 
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Send elevation={6}>
                        <Typography variant="h6" component="div">
                            {item.text}
                        </Typography>
                      </Send>
                    </Stack>
                  ) : (
                    <Stack 
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Receive elevation={6}>
                        <Typography variant="h6" component="div">
                            {item.text}
                        </Typography>
                      </Receive>
                    </Stack>
                  )
                }
                </>
              )})
            }
          </Stack>
          <Divider orientation="horizontal" flexItem sx={{mt:1}}/>
          <Stack 
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{mt:2, ml:2}}
          >
            <TextField 
              id="outlined-message" 
              variant="outlined"
              value={message}
              onChange={(val)=>setMessage(val.target.value)} 
              multiline 
              fullWidth
            />
            <IconButton
              aria-label="send Message"
              onClick={handleMessage}
              edge="end"
              color='primary'
            >
              <SendIcon fontSize='large'/>
            </IconButton>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default MsgContainer
