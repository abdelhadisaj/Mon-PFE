import { Avatar, Stack, Paper, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';

const data = [
  {
      "username":"user1",
      "commentId":"12",
      "commentTime":"12:11",
      "commentContent":"comment1"
  },
  {
      "username":"user2",
      "commentId":"13",
      "commentTime":"12:11",
      "commentContent":"comment2"
  },
  {
      "username":"user3",
      "commentId":"14",
      "commentTime":"12:11",
      "commentContent":"comment3"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user3",
      "commentId":"14",
      "commentTime":"12:11",
      "commentContent":"comment3"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user3",
      "commentId":"14",
      "commentTime":"12:11",
      "commentContent":"comment3"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  },
  {
      "username":"user4",
      "commentId":"15",
      "commentTime":"12:11",
      "commentContent":"comment4"
  }
];

function Post(props) {
    const [comments, setComments] = useState(data);
    const [comment, setComment] = useState('');
    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        setIsLike(!isLike);
    }

    const handleComment = () => {
        console.log(comment)
        setComment('')
    }

    return(
        <Stack sx={{mt: 4, mb: 4}} >
            <Paper>
                <Stack 
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    sx={{p: 2, pl: 3}}
                >
                    <Avatar src={props.profileImage}/>
                    <span><strong>{props.userName}</strong></span>
                </Stack>
            </Paper>
            <Paper>
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={props.postImage} style={{maxWidth: '100%'}}/>
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
                        {isLike ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
                    </IconButton>
                    <div style={{"fontWeight":"bold","marginLeft":"5px"}}>
                        {props.likes} Likes.
                    </div>
                </Stack>
            </Paper>
            <Paper sx={{p: 2}} >
                <Stack 
                    direction="column"
                    justifyContent="center"
                    alignItems="space-around"
                    spacing={2}
                >
                    <Stack 
                        direction="column"
                        justifyContent="center"
                        alignItems="space-around"
                        spacing={2}
                        sx={{ overflowY: 'scroll', height: '20vh'}}
                    >
                        {
                        comments.map((item) => {
                            return(
                                <span style={{marginLeft: '20px'}}>
                                    <strong>{item.username} </strong> {item.commentContent} 
                                </span>
                            )
                        })
                        }
                    </Stack>
                    <Stack 
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
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
                </Stack>
            </Paper>
        </Stack>
    );
}

export default Post;
