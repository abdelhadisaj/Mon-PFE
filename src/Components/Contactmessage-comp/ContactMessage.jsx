import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import profile from '../../images/profile.png';
import './contactmessage.css'



const data =[
    {
        "username":"username1",
        "profileimg":"../../images/profile.png"
    },
  
    {
        "username":"username2",
        "profileimg":"../../images/profile.png"
    },
    {
      "username":"username1",
      "profileimg":"../../images/profile.png"
    },
    {
      "username":"username1",
      "profileimg":"../../images/profile.png"
    },
    {
        "username":"username1",
        "profileimg":"../../images/profile.png"
    },
    {
        "username":"username1",
        "profileimg":"../../images/profile.png"
    },
  
    {
        "username":"username2",
        "profileimg":"../../images/profile.png"
    },
    {
      "username":"username1",
      "profileimg":"../../images/profile.png"
    },
    {
      "username":"username1",
      "profileimg":"../../images/profile.png"
    },
    {
        "username":"username1",
        "profileimg":"../../images/profile.png"
    },
    {
        "username":"username1",
        "profileimg":"../../images/profile.png"
    },
  
    {
        "username":"username2",
        "profileimg":"../../images/profile.png"
    },
    {
      "username":"username1",
      "profileimg":"../../images/profile.png"
    },
    {
      "username":"username1",
      "profileimg":"../../images/profile.png"
    },
    {
        "username":"username1",
        "profileimg":"../../images/profile.png"
    }

  ];



function ContactMessage() {

    const [contactList, setcontactList] = useState(data);

  return (
    <Box 
    component="div"
    sx={{
        width: 'auto',
        height: 669,
        backgroundColor: 'primary',
        display: 'Grid', 
    }}
    className="contact_container"
    >  
    
        {
            contactList.map((item)=>{
            return (
                <Stack direction="row" spacing={2} mt={2} ml={2} >
                    <Avatar
                        alt="Contact"
                        src={profile}
                        sx={{ width: 45, height: 45 }}
                    />
                    <Typography gutterBottom variant="h7" component="div">
                        {item.username}
                    </Typography>
                </Stack>
            )  
            })
        }
      
    </Box>
  )
}

export default ContactMessage;
