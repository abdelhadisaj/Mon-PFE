import React, { useState } from 'react'
import Post from '../Post/Post'
import './Publication.css'
import upload from '../../images/upload.png';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import { Box, IconButton } from '@mui/material';
import styled from '@emotion/styled';

const data = [{
  "postId":"1",
  "userName":"user1",
  "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  "postTime":"04:47",
  "likes":"16552"
},
{
  "postId":"22",
  "userName":"user45",
  "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  "postTime":"12:47",
  "likes":"16552"
},
{
  "postId":"13",
  "userName":"user144",
  "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  "postTime":"14:47",
  "likes":"16552"
}
];

const Input = styled('input')({
  display: 'none',
});

function Publication(){
  const [posts, setPosts] = useState(data);

  return (
    <div>
      {/* <div style={{"textAlign":"center"}}>
        <img className='upload_icon' src={upload}/>
      </div> */}
      <Box sx={{display: 'grid', justifyItems: 'center', mt:3}}>
          <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span" >
                  <UploadRoundedIcon sx={{fontSize: 75}}/>
                </IconButton>
          </label>
      </Box>
      {
        posts.map((item, index) => {
          return (            
          <Post id={item.postId} 
            userName={item.userName} 
            postImage= {item.postImage} 
            likes={item.likes}
            timepubliction={item.postTime}
      />)
        })
      }
    </div>
  );
}

export default Publication
