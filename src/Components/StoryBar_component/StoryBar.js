import React, { Component } from 'react'
import './StoryBar.css'
import Avatar from '@mui/material/Avatar';
import profile from '../../images/profile.png';

class StoryBar extends Component {

    
    constructor(props){
        super(props);
        this.state={
          storyList : []
          }
  }
    componentDidMount(){
        this.getStoryData();
    }

  getStoryData = () => {
    let data =[
        {
            "username":"username1",
            "storyimg":"../../images/profile.png"
        },

        {
            "username":"username2",
            "storyimg":"../../images/profile.png"
        },

        {
            "username":"username3",
            "storyimg":"../../images/profile.png"
        }

    ];

    this.setState({storyList: data});

  };
         
  render() {
    return (
      <div>
        <div className='storybar_container'>
            {
                this.state.storyList.map((item,index)=>{

                        <div className='story'>
                            <Avatar className='story_photo' src={profile}/>
                            <div className='story_username'>{item.username}</div>
                        </div>

                })
            }

        </div>
      </div>
    )
  }
}

export default StoryBar;