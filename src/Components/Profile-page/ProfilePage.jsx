import React from 'react'
import Profile from './components/profile'
import ProfilePub from './components/ProfilePub'
import { getUser } from '../../services/user'
import { getPersonalProfileTimeline } from '../../services/post'
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress';
import { useSearchParams } from 'react-router-dom'
import NavBar from '../Navbar/NavBar';

function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let uid = searchParams.get("userId")
  if(uid == null) uid = sessionStorage.getItem('currentUser');
  const { isLoading, data, error } = useQuery(['user',uid], ()=>getUser(uid));
  let user = data?.data?.user;

  const posts_data = useQuery(['userPosts',user?.username], ()=>getPersonalProfileTimeline(user?.username,100,0),{
    enabled: !!user?.username,
  });
  let posts = posts_data?.data?.data?.posts;

  console.log(error)

  return (
    <>
    {
      isLoading ? (
        <>
          <NavBar/>
          <CircularProgress/>
        </>
      
      ) : (
        <>
          <NavBar/>
          <Profile user={user}/>
          <ProfilePub user={user} posts={posts}/>
        </>
      )
    }
    </>
  )
}

export default ProfilePage
