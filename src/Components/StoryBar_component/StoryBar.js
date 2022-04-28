import React, { Component } from 'react'
import './StoryBar.css'
import Avatar from '@mui/material/Avatar';
import profile from '../../images/profile.png';

export class StoryBar extends Component {
  render() {
    return (
      <div>
        <div className='storybar_container'>
            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

            <div className='story'>
                <Avatar className='story_photo' src={profile}/>
                <div className='story_username'>usernameusername</div>
            </div>

        </div>
      </div>
    )
  }
}

export default StoryBar