import { Avatar, Paper, Typography, Stack, IconButton} from '@mui/material';
import profile from '../../../images/profile.png';
import React from 'react';
import { Box, Modal, Button, TextField, Grid, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

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

function Profile() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [img, setImg] = useState(null);

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

  const handleCancel = () =>{
    setOpen(false);
    setImg(null);
    setUsername('');
    setCity('');
  }

  const handleEdit = () => {
    let data = {
      username,
      city,
    };
    let formData = new FormData();
    if (img) formData.append('post', img, img.name);
    formData.append('data', JSON.stringify(data));

    setOpen(false);
    setImg(null);
    setUsername('');
    setCity('');
  }

  return (
    <Paper sx={{ m:4, p:4, display: 'grid',justifyItems: 'center'}} >
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
              Edit your Profile
            </Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid item xs={12} sx={{width: '100%'}}>
            <TextField 
            id="outlined-username" 
            label="Username" 
            variant="outlined"
            value={username}
            onChange={(value) => setUsername(value.target.value)} 
            fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{width: '100%'}}>
            <TextField 
            id="outlined-city" 
            label="City" 
            variant="outlined"
            value={city}
            onChange={(value) => setCity(value.target.value)} 
            fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{mb: 3}}>
            <span><strong><u>Upload your Profile Picture :</u></strong></span>
            <label htmlFor="icon-button-file" style={{marginLeft: 12}}>
              <input accept="image/*" id="icon-button-file" type="file" onChange={handleUpload}/>
            </label>
          </Grid>
          <Divider variant="middle" />
          <Grid item xs={12}>
            <Stack 
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}  
            >
              <Button variant="outlined" onClick={handleCancel} sx={{textTransform: 'none'}}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleEdit} sx={{textTransform: 'none'}}>
                Confirm Modifications
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Modal>
        <Stack spacing={4}>
            <Avatar
            alt="photo de profile"
            src={profile}
            sx={{ width: 150, height: 150}}
            >
            </Avatar>
              <Typography variant='h4' >
                Username 
                <IconButton onClick={handleOpen}>
                  <EditIcon sx={{ mr: 1 }} />
                </IconButton>
              </Typography>
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
