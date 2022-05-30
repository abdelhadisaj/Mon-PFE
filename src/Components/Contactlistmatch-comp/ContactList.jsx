import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import profile from '../../images/profile.png';
import './contactlist.css'
import Paper from '@mui/material/Paper';
import { ClickAwayListener } from '@mui/material';


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



function ContactList() {

    const [contactList, setcontactList] = useState(data);

    const getContact = () => {

    }

  return (
    <Box 
    component="div"
    sx={{
        width: 'auto',
        height: 691,
        backgroundColor: 'primary',
        display: 'Grid', 
    }}
    className="contact_container"
    >  
    
        {
            contactList.map((item)=>{
            return (
              <ClickAwayListener onClickAway={getContact}>
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
              </ClickAwayListener>
            )  
            })
        }
      
    </Box>
  )
}

export default ContactList;
