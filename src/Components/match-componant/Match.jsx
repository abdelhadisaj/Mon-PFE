import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import portrait from '../../images/portrait.jpg';


function Match() {

  return (
 
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="auto"
                image={portrait}
                alt="profile photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Username
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", pl: 1, pb: 1 }}>
                <IconButton aria-label="notmatch" color="success">
                    <CancelOutlinedIcon sx={{ height: 50, width: 50 }}/>
                </IconButton>
                 <IconButton aria-label="match" color="error">
                    <FavoriteIcon sx={{ height: 50, width: 50}}/>
                </IconButton>
                </Box>
            </CardContent>
            </CardActionArea>
        </Card>     
           
  )
}

export default Match;
