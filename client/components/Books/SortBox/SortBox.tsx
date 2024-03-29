import React ,{useEffect}from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {sortby} from '../../../features/sortSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {FormControlS} from './styles'
import { Container } from './styles';

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
  const reduxSortBy =useAppSelector((state)=>state.sort.sort)
    const [sort, setSort] = React.useState<string>(reduxSortBy);
const dispatch=useAppDispatch()


useEffect(() => {
  setSort(reduxSortBy)
  }, [reduxSortBy])
  const handleChange = (event: SelectChangeEvent<typeof sort>) => {
  setSort(event.target.value)
   dispatch(sortby(event.target.value))
   
  };

  return (
    <Container>
      <FormControlS sx={{ m: 1, width: 280 }}>
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
      </FormControlS>
    </Container>
  );
}

export default SortBox