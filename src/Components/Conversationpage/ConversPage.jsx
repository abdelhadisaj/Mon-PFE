import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import ContactMessage from './components/Contacts/ContactMessage';
import MsgContainer from './components/messenger/MsgContainer';
import NavBar from '../Navbar/NavBar';
import { useSearchParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getCurrentUserConversations, createConversation } from '../../services/conversation';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


function ConversationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [conversation, setConversation]= useState(undefined);
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery('allConversations', () => getCurrentUserConversations(sessionStorage.getItem('currentUser')));
  const mutation = useMutation((value) => createConversation(sessionStorage.getItem('currentUser'), value), {
    onSuccess: (data) => {
      console.log(data)
      //setConversation(true)
      queryClient.invalidateQueries('allConversations')
    },
    onError: (err) => {
      console.log(err)
    },
  });

  useEffect(()=>{
    let uid = searchParams.get("receiverId");
    if(uid){
      mutation.mutate(uid);
    }
  },[])

  let conversations = data?.data?.conversation;

  return (
    <>
      <NavBar/>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={3}>
          {
            isLoading ? (
            <Stack 
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', height: '80vh'}}
            >
              <CircularProgress/>
            </Stack>
            ) : <ContactMessage conversations={conversations} setConversation={setConversation}/> 
          }
        </Grid>
        <Grid item xs={7} >
          {conversation ? (
              <MsgContainer conversation={conversation}/>
            ) : isLoading ? (
              <Stack 
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%', height: '80vh'}}
              >
                <CircularProgress/>
              </Stack>
              ) : (
              <Stack 
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: '100%', height: '100%'}}
              >
                <Alert severity="info">
                  <AlertTitle><strong>Info</strong></AlertTitle>
                  Please Select A Conversation To Continue!
                </Alert>
              </Stack>
            )
          }
        </Grid>
      </Grid> 
    </>       
  )
}

export default ConversationPage;