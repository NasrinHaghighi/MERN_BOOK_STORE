import React from 'react'
import {Box, Form} from './styles'
import Typography from '@mui/material/Typography';
import { TextField,Button  } from '@mui/material';

function Signin() {
  return (
    <Box>
   <Typography mt={2} variant="h5">Signin</Typography>
   <Form>
    <TextField  variant="outlined" label="Email"  sx={{ mb: 3}}/>
    <TextField variant="outlined" label="Password" sx={{ mb:7}}/>
    <Button   variant="contained" sx={{width:200, height:50 ,color:'#000', backgroundColor:'green'}}>Signin</Button>
   </Form>
    </Box>
  )
}

export default Signin