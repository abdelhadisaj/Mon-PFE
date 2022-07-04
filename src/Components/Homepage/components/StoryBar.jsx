import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';

const Input = styled('input')({
  display: 'none',
});

function StoryBar() {
  const [storyList, setStoryList] = useState([]);

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
                <Avatar className='story_photo'/>
                <div className='story_username'>{item.username}</div>
              </div>
            )  
          })
        }
    </div>
  )
}

export default StoryBar;