import React from 'react'
import './Homepage.css'
import Grid from '@mui/material/Grid';
import StoryBar from './components/StoryBar';
import Publication from './components/Publication';
import { getAllPosts } from '../../services/post';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query'


function HomePage(){
  const { isLoading, data } = useQuery('allPosts', () => getAllPosts(100,0));

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        { isLoading ? <CircularProgress />
        : (
          <>
            {/* <StoryBar/> */}
            <Publication posts={data.data.posts}/>
          </>
        )}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default HomePage
