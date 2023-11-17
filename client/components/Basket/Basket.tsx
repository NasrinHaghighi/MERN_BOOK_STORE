import React,{ useEffect, useState} from 'react'

import {BasketbBox,BasketContainer, ShopIcon,ShopItems,DropDownToggle,DropDownMenu, ItemContainer,Title, Trash, Right, Bottom,  Card} from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../helpers/Image";
import {MdFavorite} from 'react-icons/md'
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import {closeModald} from '../../features/homeModalSlice'



  function Basket({wish,res}:any) {
    let userBooks=useAppSelector(state=>state.books.books)
    let userWishBooks=useAppSelector(state=>state.favoriteList
      .favoraitelist
      )
    const dispatch=useAppDispatch()
    const [show, setShow] = useState(false);
 const handelCloseModald=()=>{
      setShow(false)
      dispatch(closeModald()) 
 }   
 
 


     
  return (
    <>
    <BasketbBox>

    <BasketContainer>
    
   <Dropdown
    onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
   >
      <DropDownToggle variant="success" id="dropdown-basic">
      
      <ShopIcon>{wish ? <MdFavorite/> : <FaShoppingCart />}</ShopIcon>
      <ShopItems wish={wish}>{userBooks.length}</ShopItems>
      </DropDownToggle>

      <DropDownMenu show={show} res={res}>
         {wish 
         ? 
        (userWishBooks.map((item)=>{
         return <ItemContainer>
        <Right>
        <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
         </Right>
          <Title> {item.name.length>30 ? item.name.substring(0, 30): item.name}</Title>
         </ItemContainer>
         
      })): (userBooks.map((item)=>{
        return <ItemContainer>
       <Right>
       <Images src={item.imageUrl} width={70} height={80}   alt="book"/>
        </Right>
         <Title> {item.name.length>30 ? item.name.substring(0, 30): item.name} {wish ? '': <span>({item.amount})</span>}</Title>
        </ItemContainer>
        
     }))}  

        
        <Bottom>
          
      <Card onClick={handelCloseModald}><Link href={wish ? '/wish' :'/card'}>{wish ? 'Show wish list' : 'Show Card'}</Link></Card>
        </Bottom>
      </DropDownMenu> 
    </Dropdown>
  </BasketContainer>
  
  </BasketbBox>
  </>
  )
}

export default Basket





   //const [userData, setUserData] = useState<any>(null);
  
    //const userId =useAppSelector((state)=>state.user.userId)
    
    /*local strorage*/
    //let books=useAppSelector(state=>state.books.books)
 
    //const wishBooks=useAppSelector(state=>state.favoriteList.favoraitelist)

 /*get one user....*/
//  const fetchUserData = async () => {
// try{
// let res =await fetch(`http://localhost:4000/api/v1/auth/${userId}`)
// if (res.ok) {
//   const userData = await res.json(); // Await the Promise
//       setUserData(userData.user)
// }else{
//   console.log('user');
// }
// }catch(err){
//   console.log(err)
// }
// };

// useEffect(() => {
//   fetchUserData();
//   const intervalId = setInterval(fetchUserData, 5000); // Poll every 5 seconds
//   return () => clearInterval(intervalId); // Cleanup when component unmounts
// }, []);

// useEffect(() => {
//   fetchUserData()
// }, [userId])