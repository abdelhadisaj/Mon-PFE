import { Avatar, Paper, Typography, Stack} from '@mui/material';
import profile from '../../images/profile.png';
import React from 'react';

function Profile() {
  return (
    <Paper sx={{ m:4, p:4, display: 'grid',justifyItems: 'center'}} >
        <Stack spacing={4}>
            <Avatar
            alt="photo de profile"
            src={profile}
            sx={{ width: 150, height: 150}}
            >
            </Avatar>
              <Typography variant='h4' >Username</Typography>
        </Stack>
            <Stack spacing={4} direction="row" mt={2}>
              <Typography variant='h6' >Publication </Typography>
              <Typography variant='h6' >Abonnès </Typography>
              <Typography variant='h6' >abonnements</Typography>
            </Stack>
            
            <Stack spacing={12} direction="row">
              <Typography variant='h6' >15 </Typography>
              <Typography variant='h6' >200 </Typography>
              <Typography variant='h6' >1500</Typography>
            </Stack>
    </Paper>
  )
}

export default Profile;
