import React ,{useEffect,useState}from 'react'
import {Box} from './styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {backtofalseAlert} from '../../../features/bookSlice'
import {backtofalseFavoraiteAlert} from '../../../features/favoraiteListSlice'
import Modal from '@mui/material/Modal';


function AddCardAlert() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch=useAppDispatch()
    const alertState =useAppSelector((state=>state.books.alert))
    const messageState =useAppSelector((state=>state.books.message))
    const favoraiteAlertState =useAppSelector((state=>state.favoriteList.favoraiteAlert))
    const favoraiteMessageState =useAppSelector((state=>state.favoriteList.favoraiteMessage))
    //const messageState =useAppSelector((state=>state.books.message))
const modifyMes= messageState.split("+");
const modifFavoraiteMessageState=favoraiteMessageState.split('+')

console.log(alertState)
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

useEffect(()=>{
    if(favoraiteAlertState){
      setOpen(true)
    }
      setTimeout(() => {
          dispatch(backtofalseFavoraiteAlert())
         
      }, 4000);
      if(!favoraiteAlertState){
          setOpen(false)
        }
   
  },[favoraiteAlertState])

  return (
    <>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
      {alertState && 
     <Box className={alertState ? 'active' : ''}>
        <h3 className='add'>"{modifyMes[0]}" </h3>
        <h6>{modifyMes[1]}</h6>
    </Box> }



    {favoraiteAlertState && 
     <Box className={favoraiteAlertState ? 'active' : ''}>
        <h4 className='favo'>"{modifFavoraiteMessageState[0]}" </h4>
        <h6>{modifFavoraiteMessageState[1]}</h6>
    </Box> }




    </div>
    </Modal>
    </>
  )
}

export default AddCardAlert