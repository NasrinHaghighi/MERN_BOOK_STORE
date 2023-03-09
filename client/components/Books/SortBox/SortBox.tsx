import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {sortby} from '../../../features/sortSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
    {name:'Low price first',value:'-price'},
    {name:'High price first',value:'price'},
    {name:'a-z',value:'name'},
    {name:'z-a',value:'-name'},
     ];


function SortBox() {
    const [sort, setSort] = React.useState<string>('');
const dispatch=useAppDispatch()
  const handleChange = (event: SelectChangeEvent<typeof sort>) => {
  setSort(event.target.value)
   dispatch(sortby(event.target.value))
   
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Sort </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={sort}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected}
          MenuProps={MenuProps}
        >
          {names.map((item:any) => (
            <MenuItem key={item.value} value={item.name}>
              <Checkbox checked={sort.indexOf(item) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SortBox