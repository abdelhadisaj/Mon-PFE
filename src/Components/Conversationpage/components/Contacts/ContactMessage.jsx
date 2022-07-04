import React from 'react'
import Typography  from '@mui/material/Typography';
import { Avatar, Stack, Button, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './contactmessage.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useQueryClient, QueriesObserver } from 'react-query'
import { getUser } from '../../../../services/user';
import CircularProgress from '@mui/material/CircularProgress';

function ContactMessage({ convo, conversations, setConversation }) {
  const [convos, setConvos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = useQueryClient();

  const handleConversation = (con) => {
    setConversation(con)
  }

  useEffect(() => {
    let users = conversations.map((item) => {
      let receiver = item.members.filter((item) => item != sessionStorage.getItem('currentUser')).pop();
      return { receiver, ...item }
    })

    let c = users.map((elt) => {
      return { queryKey: ['user',elt.receiver], queryFn: () => getUser(elt.receiver) };
    });

    const observer = new QueriesObserver(queryClient, c);
    const unsubscribe = observer.subscribe((result) => {
      let c = result.map(item => {
        if(item.isSuccess){
          let r = users.find(x => x.receiver === item.data.data.user._id);
          if(convo === item.data.data.user._id) setConversation({ ...r , receiver: item.data.data.user })
          return { ...r , receiver: item.data.data.user };
        }
        return null;
      })
      setConvos(c)
      setIsLoading(false)
    });

    return () => {
      unsubscribe();
    };

  },[])

  return (
    <Card
      sx={{
          width: 'auto',
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
          { isLoading ? (
            <Stack 
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%', height: '100%'}}
            >
              <CircularProgress/>
            </Stack>
            ) : ( convos?.map((item)=>{
              if(item === null)return null;
                return (
                  <>
                    <Button 
                      variant="text" 
                      onClick={()=>handleConversation(item)}
                      sx={{ 
                        height: '100%', 
                        pt: 2, 
                        pb: 2, 
                        pl: 3, 
                        textTransform: 'none', 
                        fontSize: 16, 
                        color: 'black'
                      }}
                    >
                      <Stack 
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                        sx={{width: '100vw'}}
                      >
                        <Avatar
                          alt="Contact"
                          src={item.receiver.profilePicture}
                        />
                        <Typography variant="h6" component="div">
                            {item.receiver.username}
                        </Typography>
                      </Stack>
                    </Button>
                    <Divider orientation="horizontal" flexItem />
                  </>
                )
            })
          )}
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default ContactMessage;
