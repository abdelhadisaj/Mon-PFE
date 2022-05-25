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
              <Button variant="contained" endIcon={<SendIcon />} sx={{ mt: 78, mb: 1, mr: 1   }}>
                          Send
              </Button>

        </Box>
    </Paper>
  )
}

export default MsgContainer
