import React, { Component } from 'react'
import './MainContent.css'
import Grid from '@mui/material/Grid';
import StoryBar from '../StoryBar_component/StoryBar';
import Publication from '../Publication_component/Publication';

export class MainContent extends Component {
  render() {
    return (
      <div>
         <Grid container>

           <Grid item xs={2}></Grid>
           <Grid item xs={8}>
             <StoryBar/>
             <Publication/>
           </Grid>
           <Grid item xs={2}></Grid>
           
          </Grid>
      </div>
    )
  }
}

export default MainContent
