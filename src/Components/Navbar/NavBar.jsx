import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const pages = ['Home', 'Conversations'];
const settings = [
    { page:'Profile', icon:<PersonIcon/>},
    { page:'Logout', icon:<LogoutIcon/>}
];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavMenu = (page) => {
    console.log(page)
    if(page){
        if(page === 'Home')navigate('/');
        if(page === 'Conversations')navigate('/messages');
    }
  };

  const handleCloseUserMenu = (setting) => {
    if(setting){
        if(setting === 'Profile'){
            setAnchorElUser(null);
            navigate('/profile');
        }
        if(setting === 'Logout'){
            sessionStorage.clear();
            setAnchorElUser(null);
            navigate('/login')
        }
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className='navbar_logo' src={logo} width="20%"/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 6 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleNavMenu(page)}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <strong>{page}</strong>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, mr: 6 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <>
                    {setting.page === 'Logout' && <Divider />}
                    <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting.page)}>
                        <ListItemIcon>
                            {setting.icon}
                        </ListItemIcon>
                        <ListItemText><strong>{setting.page}</strong></ListItemText>
                    </MenuItem>
                </>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
