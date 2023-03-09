import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { limitNumberBy } from '../../../features/limitNumberSlice';

function LimitNumber() {
    const dispatch=useAppDispatch()
    const [num, setNum] = React.useState<any>();
    const handleChange = (event: SelectChangeEvent) => {
        setNum(event.target.value);
        dispatch(limitNumberBy(Number(event.target.value)))
      };
      
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Show</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={num}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}

export default LimitNumber