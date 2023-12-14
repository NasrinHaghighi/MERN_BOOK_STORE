import React ,{useEffect}from 'react'
import {Container, Title} from '../Address/styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {SubTit, Number, BooksContainer, AddressBox, NameUser,Morada,InfoAddress,ShippingMethod,Edit, ShippingMethodValue} from './styles'
import useFetchUserData from '../../../hooks/useFetchUserData'
import OrderdBookItem from './OrderdBookItem'
import { MdModeEditOutline } from "react-icons/md";
import Link from 'next/link'
import { useRouter } from 'next/router';



function Confermation({userInfo}:any) {
  const router = useRouter();
    const {  booksWithQuantity, fetchUserdata } = useFetchUserData();
   const userAddress=useAppSelector((state=>state.userAddress.address))
   //console.log(userAddress)
//    const userId =useAppSelector((stata)=>stata.user.userId)
//    const datatoSend={ userInfo: userInfo,  booksWithQuantity: booksWithQuantity, userId:userId }

//    console.log(datatoSend)
    useEffect(() => {
        fetchUserdata();
       }, []);
    
       const handleReloadPage = () => {
        router.push('/checkout');
        router.reload();
      };
  return (
    <Container>
    <Title>
    <h5>Final Confermation.... </h5>  
    <p> Please carefully review your order and provide any necessary additional details.</p> 
    <hr/>
  </Title>

   {/* list of books */}
<SubTit> <h6>Your shopping cart</h6> <Number>-{booksWithQuantity.length} product</Number></SubTit>

 <BooksContainer>
{booksWithQuantity?.map((item)=>{
return <OrderdBookItem key={item.book._id} item={item}/>
})}
</BooksContainer> 


<SubTit> <h6>Delivery Receiver Information</h6></SubTit>


{/* address Box */}
<AddressBox>
  <InfoAddress>
   <NameUser>{userAddress?.fullName} - {userAddress?.phone }</NameUser>
   <Morada>{userAddress.country} - {userAddress.state} - {userAddress.city} - {userAddress.address}</Morada>
   <NameUser>Postal Code - {userAddress?.postalcode}</NameUser>
   </InfoAddress>

   <ShippingMethod>Shipping method : 
    <ShippingMethodValue>{userAddress.shipMethod}</ShippingMethodValue>
   </ShippingMethod>
   <Edit onClick={handleReloadPage}>
   
    <MdModeEditOutline /><div>Edit</div>
   
    </Edit>
</AddressBox>



  </Container>
   
  )
}

export default Confermation