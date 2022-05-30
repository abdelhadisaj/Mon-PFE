import React, { useState } from 'react'
import './StoryBar.css'
import Avatar from '@mui/material/Avatar';
import profile from '../../images/profile.png';
import { IconButton } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';


const data =[
  {
      "username":"username1",
      "storyimg":"../../images/profile.png"
  },

  {
      "username":"username2",
      "storyimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "storyimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "storyimg":"../../images/profile.png"
  },
  {
      "username":"username1",
      "storyimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "storyimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "storyimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "storyimg":"../../images/profile.png"
  },
  {
    "username":"username1",
    "storyimg":"../../images/profile.png"
  },
  {
      "username":"username3",
      "storyimg":"../../images/profile.png"
  }

];

const Input = styled('input')({
  display: 'none',
});

function StoryBar() {
  const [storyList, setStoryList] = useState(data);

  return (
    <div className='storybar_container'>
        <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span" >
              <AddCircleOutlineOutlined sx={{fontSize: 75}}/>
            </IconButton>
        </label>
        {
          storyList.map((item,index)=>{
            return (
              <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>{item.username}</div>
              </div>
            )  
          })
        }
    </div>
  )
}

export default StoryBar;