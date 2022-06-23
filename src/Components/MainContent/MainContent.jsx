import React from 'react'
import './MainContent.css'
import Grid from '@mui/material/Grid';
import StoryBar from '../StoryBar_component/StoryBar';
import Publication from '../Publication_component/Publication';

function MainContent(){
  
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <StoryBar/>
        <Publication/>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default MainContent
