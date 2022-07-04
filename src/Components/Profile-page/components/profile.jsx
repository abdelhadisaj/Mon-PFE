import { Avatar, Paper, Typography, Stack, IconButton, Alert } from '@mui/material';
import React from 'react';
import { Box, Modal, Button, TextField, Grid, Divider, Snackbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { getProfilPostNo } from '../../../services/post';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { modifyUser } from '../../../services/user';
import { followUser, unfollowUser } from '../../../services/user';
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
  const [username, setUsername] = useState(user?.username ? user?.username : '');
  const [desc, setDescription] = useState(user?.desc ? user?.desc : '');
  const [name, setName] = useState(user?.name ? user?.name : '');
  const [city, setCity] = useState(user?.city ? user?.city : '');
  const [isFollowed, setIsFollowed] = useState(user?.followers?.includes(sessionStorage.getItem("currentUser")))
  const [openS, setOpenS] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [img, setImg] = useState(null);
  let navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, error } = useQuery(['userPostNo',user.username], ()=>getProfilPostNo(user.username));
  const mutation = useMutation((values) => modifyUser(user._id, values), {
    onSuccess: (data) => {
      console.log(data)
      setOpenS(true);
      queryClient.invalidateQueries(['user', user._id])
    },
    onError: (err) => {
      console.log(err)
      setOpenE(true);
    },
  });
  const mutationF = useMutation(() => followUser(user._id), {
    onSuccess: (data) => {
      setIsFollowed(true)
      queryClient.invalidateQueries(['user', user._id])
    },
    onError: (err) => {
      console.log(err)
    },
  });
  const mutationU = useMutation(() => unfollowUser(user._id), {
    onSuccess: (data) => {
      setIsFollowed(false)
      queryClient.invalidateQueries(['user', user._id])
    },
    onError: (err) => {
      console.log(err)
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseS = () => {setOpenE(false);setOpenS(false);};
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

  const handleFollow = async () => {
    try{
      if(isFollowed){
        mutationU.mutate();
      }else{
        mutationF.mutate();
      }
    }catch(e){
        console.log(e)
    }
}

  const handleEdit = () => {
    let data = {
      username,
      city,
      desc,
      name
    };
    let formData = new FormData();
    if (img) formData.append('profile', img, img.name);
    formData.append('data', JSON.stringify(data));

    mutation.mutate(formData);

    setOpen(false);
    setImg(null);
  }

  return (
    <>
      <Snackbar onClose={handleCloseS} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openS} autoHideDuration={4000}>
        <Alert onClose={handleCloseS} severity="success" sx={{ width: '100%' }}>
          User Information Updated Successfully !!!
        </Alert>
      </Snackbar>
      <Snackbar onClose={handleCloseS} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openE} autoHideDuration={4000}>
        <Alert onClose={handleCloseS} severity="error" sx={{ width: '100%' }}>
          Error! Please Retry Again Later !!!
        </Alert>
      </Snackbar>
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
                id="outlined-desc" 
                label="User Description" 
                variant="outlined"
                value={desc}
                onChange={(value) => setDescription(value.target.value)} 
                fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{width: '100%'}}>
                <TextField 
                id="outlined-name" 
                label="Name" 
                variant="outlined"
                value={name}
                onChange={(value) => setName(value.target.value)} 
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
            { user?._id == sessionStorage.getItem('currentUser') &&
                <IconButton onClick={handleOpen}>
                  <EditIcon sx={{ mr: 1 }} />
                </IconButton>
            }
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
        { user._id != sessionStorage.getItem('currentUser') && 
          <Stack spacing={4} direction="row" mt={2} justifyContent='center' alignItems='center'>
            <Button variant="contained" onClick={handleFollow} sx={{textTransform: 'none'}}>{isFollowed ? "Unfollow" : "Follow"}</Button>
            <Button variant="outlined" onClick={()=> navigate('/messages?receiverId='+user._id)} sx={{textTransform: 'none'}}>Send Message</Button>
          </Stack>
        }
      </Paper>
    </>
  )
}

export default Profile;
