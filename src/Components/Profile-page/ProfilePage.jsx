import React from 'react'
import Profile from './components/profile'
import ProfilePub from './components/ProfilePub'
import { getUser } from '../../services/user'
import { getPersonalProfileTimeline, getCurrentUserTimeline } from '../../services/post'
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress';
import { useSearchParams } from 'react-router-dom'
import NavBar from '../Navbar/NavBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';

function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState("1");

  let uid = searchParams.get("userId")
  if(uid == null) uid = sessionStorage.getItem('currentUser');
  const { isLoading, data, error } = useQuery(['user',uid], ()=>getUser(uid));
  let user = data?.data?.user;

  const { currentUserData } = useQuery(['user', sessionStorage.getItem('currentUser')], ()=>getUser(sessionStorage.getItem('currentUser')));
  let currentUser = currentUserData?.data?.user;

  const profile_posts_data = useQuery(['userProfilePosts',user?.username], ()=>getPersonalProfileTimeline(user?.username,100,0),{
    enabled: !!user?.username,
  });
  let profile_posts = profile_posts_data?.data?.data?.posts;
  
  const timeline_posts_data = useQuery(['userTimelinePosts',user?.username], ()=>getCurrentUserTimeline(user?.username,100,0),{
    enabled: !!user?.username,
  });
  let timeline_posts = timeline_posts_data?.data?.data?.posts;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    {
      isLoading ? (
        <>
          <NavBar/>
          <Stack 
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', height: '100vh'}}
          >
            <CircularProgress size="15vh"/>
          </Stack>
        </>
      
      ) : (
        <>
          <NavBar/>
          <Profile user={user} currentUser={currentUser}/>
          <TabContext value={value}>
            <Box sx={{ ml:4, mr:4, bgcolor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label={<Typography variant="h6" >Profile Publications</Typography>} value="1" />
                <Tab label={<Typography variant="h6" >Profile Timeline</Typography>} value="2" />
              </TabList>
            </Box>
            <Box sx={{ ml:4, mr:4, bgcolor:'white'}}>
            <TabPanel value="1">
              <ProfilePub user={user} posts={profile_posts}/>
            </TabPanel>
            <TabPanel value="2">
              <ProfilePub user={user} posts={timeline_posts}/>
            </TabPanel>
            </Box>
          </TabContext>
        </>
      )
    }
    </>
  )
}

export default ProfilePage
