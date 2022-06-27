import { Grid } from '@mui/material';
import React, {useState} from 'react'
import Post from '../../Post/Post'

function ProfilePub({posts}) {

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        {
          posts?.map((item, index) => {
            return (            
              <Post id={item._id} 
                postImage= {item.img} 
                likes={item.likes}
                timepubliction={item.createdAt}
                desc={item.desc}
                comments={item.comments}
                user={item.userId}
              />
            )
          })
        }
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default ProfilePub;
