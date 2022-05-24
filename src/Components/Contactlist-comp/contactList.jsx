import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';

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
        <Stack direction="Colum" spacing={2}>
            <Avatar
                alt="Contact"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
            />
            <Typography gutterBottom variant="h5" component="div">
                Username
            </Typography>

        </Stack>

      
    </Box>
  )
}

export default contactList;
