import React ,{useEffect}from 'react'
import {Box}  from './styles'

import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {selectedPage} from '../../../features/PageSlice'

function PaginationCo() {
  const dispatch=useAppDispatch()
  const reduxPage=useAppSelector((state=> state.page.page))

  const [page, setPage] = React.useState(reduxPage);
 

  useEffect(() => {
    setPage(reduxPage)
    }, [reduxPage])
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(selectedPage(value))
  };
console.log(`redux:${reduxPage}page${page}`)
  return (
    <Box>
          <Pagination count={5} variant="outlined" shape="rounded" size="large" page={page} onChange={handleChange}/>
    </Box>
  )
}

export default PaginationCo