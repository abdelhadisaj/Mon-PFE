import { Avatar, Paper, Typography, Stack, IconButton} from '@mui/material';
import React from 'react';
import { Box, Modal, Button, TextField, Grid, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { getProfilPostNo } from '../../../services/post'
import { useQuery } from 'react-query'

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

function Profile({ user }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(user?.username);
  const [city, setCity] = useState('');
  const [img, setImg] = useState(null);
  const { data, error } = useQuery(['userPostNo',user.username], ()=>getProfilPostNo(user.username));

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
        <Stack spacing={2} direction="column" justifyContent='center' alignItems='center'>
            <Avatar
            alt="photo de profile"
            src={user?.profilePicture}
            sx={{ width: 150, height: 150}}
            >
            </Avatar>
              <Typography variant='h4'>
                { user?.username }
                <IconButton onClick={handleOpen}>
                  <EditIcon sx={{ mr: 1 }} />
                </IconButton>
              </Typography>
        </Stack>
            <Stack spacing={4} direction="row" mt={2} justifyContent='center' alignItems='center'>
              <Stack spacing={1} direction="column" justifyContent='center' alignItems='center'>
                <Typography variant='h6' ><u>Publications</u></Typography>
                <Typography variant='h6' ><strong>{data?.data?.posts}</strong></Typography>
              </Stack>
              <Stack spacing={1} direction="column" justifyContent='center' alignItems='center'>
                <Typography variant='h6' ><u>Followers</u></Typography>
                <Typography variant='h6' ><strong>{user?.followers?.length}</strong></Typography>
              </Stack>
              <Stack spacing={1} direction="column" justifyContent='center' alignItems='center'>
                <Typography variant='h6' ><u>Followings</u></Typography>
                <Typography variant='h6' ><strong>{user?.followings?.length}</strong></Typography>
              </Stack>
            </Stack>
    </Paper>
  )
}

export default Profile;
