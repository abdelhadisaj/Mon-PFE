import { Paper, IconButton, TextField, Avatar, Stack, Divider } from '@mui/material';
import Typography  from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import './msgcontainer.css';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createMessage, getConversationMessages } from '../../../../services/message';

const Send = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  backgroundColor: '#ffffff',
  padding: '1%',
  marginRight: '2%',
  marginBottom: '1%',
}));

const Receive = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  backgroundColor: '#47555c',
  padding: '1%',
  marginLeft: '2%',
  marginBottom: '1%',
}));

function MsgContainer({ conversation }) {
  const [message, setMessage] = useState('');
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery(['allMessages',conversation._id], () => getConversationMessages(conversation._id));
  const mutation = useMutation((value) => createMessage(sessionStorage.getItem('currentUser'), conversation._id, value), {
    onSuccess: (data) => {
      setMessage('');
      queryClient.invalidateQueries(['allMessages',conversation._id])
    },
    onError: (err) => {
      console.log(err)
    },
  });

  const handleMessage = () => {
    mutation.mutate(message)
  }

  let messages = data?.data?.Message;

  return (
    <Card
      sx={{
          width: '100%',
          height: '100%',
          maxHeight: '80vh',
          minHeight: '80vh',
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
            src={conversation.receiver.profilePicture}
          />
          <Typography variant="h6" component="div">
              {conversation.receiver.username}
          </Typography>
        </Stack>
        <Divider orientation="horizontal" flexItem />
        <CardContent sx={{ width: '100%', height: '100%', minHeight: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Stack 
            direction="column"
            justifyContent="flex-end"
            alignItems="stretch"
            sx={{
              width: '100%',
              height: '80%',
            }}
          >
            { isLoading ? (
              <Stack 
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%', height: '80vh'}}
              >
                <CircularProgress/>
              </Stack>
            ) : messages?.map((item)=>{
              let send = true;
              if(item.sender !== sessionStorage.getItem('currentUser'))send = false;
              return (
                <>
                { send ? (
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
