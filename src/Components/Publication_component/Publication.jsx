import React, { useState } from 'react'
import Post from '../Post/Post'
import './Publication.css'
import upload from '../../images/upload.png';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import { Box, IconButton, Modal, Typography, FormControl, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';

const data = [{
  "postId":"1",
  "userName":"user1",
  "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  "postTime":"04:47",
  "likes":"16552"
},
{
  "postId":"22",
  "userName":"user45",
  "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  "postTime":"12:47",
  "likes":"16552"
},
{
  "postId":"13",
  "userName":"user144",
  "postImage":"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  "postTime":"14:47",
  "likes":"16552"
}
];

const Input = styled('input')({
  display: 'none',
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Publication(){
  const [posts, setPosts] = useState(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{display: 'grid', justifyItems: 'center', mt:3}}>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOpen}>
                  <UploadRoundedIcon sx={{fontSize: 75}}/>
                </IconButton>
      </Box>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            share your Publication
          </Typography>
          <FormControl>
            <TextField id="outlined-basic" label="Description" variant="outlined" />
            <label htmlFor="contained-button-file">
               <Input accept="image/*" id="contained-button-file" multiple type="file" />
               <Button variant="contained" component="span">
                 Upload
               </Button>
             </label>
          </FormControl>
      </Box>
    </Modal>
      {
        posts.map((item, index) => {
          return (            
          <Post id={item.postId} 
            userName={item.userName} 
            postImage= {item.postImage} 
            likes={item.likes}
            timepubliction={item.postTime}
      />)
        })
      }
    </div>
  );
}

export default Publication
