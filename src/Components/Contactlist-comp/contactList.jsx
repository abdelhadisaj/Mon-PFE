import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function contactList() {
  return (
    <Box 
    component="div"
    sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary',
    }}
    >
        <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
            />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
            />
        </Stack>

      
    </Box>
  )
}

export default contactList;
