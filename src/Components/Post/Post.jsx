import { Avatar, Stack, Paper, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  }
];

function Post(props) {
    const [comments, setComments] = useState(data);
    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        setIsLike(!isLike);
    }

    return(
        <Stack sx={{mt: 4}} >
            <Paper  >
                <Stack 
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <Avatar className='post_header_photo' src={props.profileImage}/>
                    <div className='post_header_username'>{props.userName}</div>
                </Stack>
            </Paper>
            <Paper  >
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={props.postImage} />
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
                    {
                        comments.map((item, index) => {
                            return(<div style={{"marginLeft":"20px"}}><strong><u>{item.username} :</u></strong> {item.commentContent} </div>)
                        })
                    }
                    <input className='post_commentbox' type="text" placeholder='Comment...'/>
                </Stack>
            </Paper>
        </Stack>
    );
}

export default Post;
