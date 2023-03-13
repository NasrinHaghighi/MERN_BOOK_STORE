import React ,{useEffect,useState}from 'react'
import {Box} from './styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {backtofalseAlert} from '../../../features/bookSlice'

import Modal from '@mui/material/Modal';


function AddCardAlert() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch=useAppDispatch()
    const alertState =useAppSelector((state=>state.books.alert))
    const messageState =useAppSelector((state=>state.books.message))

const modifyMes= messageState.split("+");

useEffect(()=>{
  if(alertState){
    setOpen(true)
  }
    setTimeout(() => {
        dispatch(backtofalseAlert())
       
    }, 4000);
    if(!alertState){
        setOpen(false)
      }
 
},[alertState])

  return (
    <>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box className={alertState ? 'active' : ''}>
        <h3>"{modifyMes[0]}" </h3>
        <h6>{modifyMes[1]}</h6>
    </Box>
    </Modal>
    </>
  )
}

export default AddCardAlert