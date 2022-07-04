import React from 'react'
import './Homepage.css'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import StoryBar from './components/StoryBar';
import Publication from './components/Publication';
import { getAllPosts } from '../../services/post';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query'
import NavBar from '../Navbar/NavBar';

function HomePage(){
  const { isLoading, data } = useQuery('allPosts', () => getAllPosts(100,0));

  return (
    <>
    <NavBar />
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        { isLoading ? 
            <Stack 
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%', height: '100vh'}}
            >
              <CircularProgress size="15vh"/>
            </Stack>
        : (
          <>
            {/* <StoryBar/> */}
            <Publication posts={data?.data?.posts}/>
          </>
        )}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
    </>
  )
}

export default HomePage
