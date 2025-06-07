import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  return (
     <Box
     align='center'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="id" variant="outlined"  /><br/>
      <TextField id="outlined-basic" label="ToDo" variant="outlined"  /><br/>
      <TextField id="outlined-basic" label="completion status" variant="outlined"  /><br/>
      <TextField id="outlined-basic" label="userId" variant="outlined"  /><br/>
     <Button variant="contained" color='success'>enter item</Button>
    </Box>
  )
}

export default Add