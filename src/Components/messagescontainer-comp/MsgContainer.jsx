import { Box, Paper, FormControl, FilledInput, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

function MsgContainer() {
  return (
    <Paper>
        <Box
        component="div"
        sx={{
            width: 'auto',
            height: 691,
            backgroundColor: 'primary',
            display: 'flex', 
        }}
        className="msg_container"
        >
            <FormControl fullWidth sx={{ m: 1 , display:'flex', justifyContent: 'end' }} variant="filled">
                    <FilledInput
                        placeholder = 'Message'
                    />
             </FormControl>
             <Button variant="contained" endIcon={<SendIcon />} style={{display:'flex', justifyContent: 'end' }}>
                        Send
             </Button>

        </Box>
    </Paper>
  )
}

export default MsgContainer
