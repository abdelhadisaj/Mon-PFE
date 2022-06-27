import React, { useState } from 'react'
import Post from '../../Post/Post'
import Fab from '@mui/material/Fab';
import { Box, Modal, Typography, Button, TextField, Grid, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import UploadIcon from '@mui/icons-material/Upload';
import { useQuery, useMutation } from 'react-query'

const fabStyle = {
  position: 'fixed',
  width: '10%',
  bottom: 30,
  right: 20,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Publication({ posts }){
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = useState(null);
  const [desc, setDesc] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUpload = (file) => {
    let files = file.target.files;
    if (files.length === 0) {
      setImg(null);
    } else {
      setImg(files[0]);
    }
  }
  const handleShare = () => {
    let data = {
      desc: desc,
    };
    let formData = new FormData();
    if (img) formData.append('post', img, img.name);
    formData.append('data', JSON.stringify(data));

    setOpen(false);
    setImg(null);
    setDesc('');
  }

  return (
    <div>
      <Fab variant="extended" color="primary" aria-label="Share" sx={fabStyle} onClick={handleOpen}>
        <UploadIcon sx={{ mr: 1 }} />
        Share
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          rowSpacing={3}
        >
          <Grid item xs={12} sx={{mb: 3}}>
            <Typography id="modal-modal-title" variant="h3" >
              Share your Publication
            </Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid item xs={12} sx={{width: '100%'}}>
            <TextField 
            id="outlined-basic" 
            label="Description" 
            variant="outlined" 
            onChange={(value) => setDesc(value.target.value)}
            multiline 
            fullWidth/>
          </Grid>
          <Grid item xs={12} sx={{mb: 3}}>
            <span><strong><u>Upload your Image/Video :</u></strong></span>
            <label htmlFor="icon-button-file" style={{marginLeft: 12}}>
              <input accept="image/*,video/*" id="icon-button-file" type="file" onChange={handleUpload}/>
            </label>
          </Grid>
          <Divider variant="middle" />
          <Grid item xs={12}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleShare}>
              Publish Post
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
      {
        posts.map((item, index) => {
          return (            
            <Post id={item._id} 
              postImage= {item.img} 
              likes={item.likes}
              timepubliction={item.createdAt}
              desc={item.desc}
              comments={item.comments}
              user={item.userId}
            />
          )
        })
      }
    </div>
  );
}

export default Publication
