import { Avatar, Stack, Paper, IconButton, TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import { commentPost, likePost } from '../../services/post'
import { getUser } from '../../services/user'
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery, useMutation, useQueryClient, useQueries } from 'react-query'
import { useNavigate } from 'react-router';

function Post(props) {
    let navigate = useNavigate();
    const queryClient = useQueryClient();
    const [comment, setComment] = useState('');
    const { isLoading, data } = useQuery(['postuser',props.id], () => getUser(props.user));
    const mutationL = useMutation(() => likePost(props.id), {
        onSuccess: (data) => {
          queryClient.refetchQueries('allPosts');
        },
        onError: (err) => {
          console.log(err)
        },
      });
    const mutationC = useMutation((values) => commentPost(props.id, values.comment), {
        onSuccess: (data) => {
            queryClient.refetchQueries('allPosts');
          },
          onError: (err) => {
            console.log(err)
          },
    });
    const C = useQueries(
        props.comments.map((user, index) => {
          return {
            queryKey: ['user', index],
            queryFn: () => getUser(user.userId),
          }
        })
    );
    
    let user = data?.data?.user;

    const handleLike = async () => {
        try{
            await mutationL.mutate();
        }catch(e){
            console.log(e)
        }
    }

    const handleComment = async () => {
        try{
            await mutationC.mutate({comment});
            setComment('')
        }catch(e){
            console.log(e)
        }
    }

    const handleProfile = (userId) => {
        navigate('/profile?userId='+userId);
    }

    return(
        <>
        { !isLoading ? (
                <Stack sx={{mt: 4, mb: 4}} >
                    <Paper>
                        <Button onClick={() => handleProfile(user?._id)} sx={{textTransform: 'none', color: 'black', bgcolor: 'transparent'}}>
                            <Stack 
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                                sx={{m: 2, ml: 3, width: '100%'}}
                            >
                                <Avatar src={user?.profileImage}/>
                                <Typography variant='h6'>{user?.username}</Typography>
                            </Stack>
                        </Button>
                    </Paper>
                    <Paper>
                        <Stack 
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <img src={props.img} style={{maxWidth: '100%'}}/>
                        </Stack>
                    </Paper>
                    <Paper sx={{p: 1}} >
                        <Stack 
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <IconButton onClick={handleLike}>
                                {props.likes.includes(user._id) ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
                            </IconButton>
                            <div style={{"fontWeight":"bold","marginLeft":"5px"}}>
                                {props.likes.length} Likes.
                            </div>
                        </Stack>
                    </Paper>
                    <Paper sx={{p: 2, height: '100%'}} >
                        <Stack 
                            direction="column"
                            justifyContent="center"
                            alignItems="space-around"
                            spacing={0}
                            sx={{ overflowY: 'scroll', maxHeight: '20vh', ml:1}}
                        >
                            {
                                C ? (
                                    C?.map((item, index) => {
                                        let u = item?.data?.data?.user;
                                        return(
                                            <Stack 
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="baseline"
                                                spacing={1}
                                                sx={{m:0}}
                                            >
                                                <Button onClick={() => handleProfile(u?._id)} sx={{textTransform: 'none', color: 'black'}}>
                                                    <strong>{u?.username}</strong>
                                                </Button>
                                                <span>{props.comments[index]?.comment}</span>
                                            </Stack>
                                            
                                        )
                                    })
                                ) : (
                                    <CircularProgress/>
                                )
                            }
                        </Stack>
                    </Paper>
                    <Paper>
                        <Stack 
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{m:2}}
                        >
                            <TextField 
                                id="outlined-comment" 
                                label="Comment" 
                                variant="outlined"
                                value={comment}
                                onChange={(val)=>setComment(val.target.value)} 
                                multiline 
                                fullWidth
                            />
                            <IconButton
                                aria-label="send comment"
                                onClick={handleComment}
                                edge="end"
                            >
                                <SendIcon fontSize='large'/>
                            </IconButton>
                        </Stack>
                    </Paper>
                </Stack>
            ) : (
                <CircularProgress />
        )}
        </>
    );
}

export default Post;
