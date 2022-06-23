import { Grid } from '@mui/material';
import React, {useState} from 'react'
import Post from '../Post/Post'

const data = [{
    "postId":"1",
    "userName":"user1",
    "postImage":"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    "postTime":"04:47",
    "likes":"16552"
  },
  {
    "postId":"22",
    "userName":"user45",
    "postImage":"https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    "postTime":"12:47",
    "likes":"16552"
  },
  {
    "postId":"13",
    "userName":"user144",
    "postImage":"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    "postTime":"14:47",
    "likes":"16552"
  }
];

function ProfilePub() {
  const [myPosts,setMyPosts] = useState(data);

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        {
          myPosts.map((item) => {
            return (            
              <Post id={item.postId} 
                userName={item.userName} 
                postImage= {item.postImage} 
                likes={item.likes}
                timepubliction={item.postTime}
              />)
          })
        }
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default ProfilePub;
