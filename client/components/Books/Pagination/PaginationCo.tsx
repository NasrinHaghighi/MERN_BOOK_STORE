import React from 'react'
import {Box}  from './styles'

import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {selectedPage} from '../../../features/PageSlice'

function PaginationCo() {
  const dispatch=useAppDispatch()
  const reduxPage=useAppSelector((state=> state.page.page))
  console.log(reduxPage)
  const [page, setPage] = React.useState(reduxPage);
  console.log(reduxPage, page)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(selectedPage(value))
  };

  return (
    <Box>
          <Pagination count={5} variant="outlined" shape="rounded" size="large" page={page} onChange={handleChange}/>
    </Box>
  )
}

export default PaginationCo