import React, { useState } from 'react'
import './StoryBar.css'
import Avatar from '@mui/material/Avatar';
import profile from '../../images/profile.png';
import plus from '../../images/plus.png'

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

function StoryBar() {
  const [storyList, setStoryList] = useState(data);

  return (
    <div className='storybar_container'>
      <img src={plus} className="add_story"/>
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