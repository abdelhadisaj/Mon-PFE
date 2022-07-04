import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import ContactMessage from './components/Contacts/ContactMessage';
import MsgContainer from './components/messenger/MsgContainer';
import NavBar from '../Navbar/NavBar';
import { useSearchParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient, QueryObserver } from 'react-query'
import { getCurrentUserConversations, createConversation, getConversation } from '../../services/conversation';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


function ConversationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let uid = searchParams.get("receiverId");
  const [conversation, setConversation]= useState(undefined);
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery('allConversations', () => getCurrentUserConversations(sessionStorage.getItem('currentUser')));
  const mutation = useMutation((value) => createConversation(sessionStorage.getItem('currentUser'), value), {
    onSuccess: (data) => {
      queryClient.invalidateQueries('allConversations')
    },
    onError: (err) => {
      console.log(err)
    },
  });

  useEffect(()=>{
    const observer = new QueryObserver(queryClient, {
      queryKey: ['conversation', uid],
      queryFn: () => getConversation(sessionStorage.getItem('currentUser'),uid),
      onError: (err) => {
        console.log(err);
      },

    });

    const unsubscribe = observer.subscribe((result) => {
      if (result.isSuccess) {
        if(result.data.data.conversation === null){
          if(uid){
            mutation.mutate(uid);
          }
        }
      }
    });

    return () => {
      unsubscribe();
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
            ) : <ContactMessage convo={uid} conversations={conversations} setConversation={setConversation}/> 
          }
        </Grid>
        <Grid item xs={7} >
          {conversation ? (
              <MsgContainer conversation={conversation}/>
            ) : isLoading || uid ? (
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