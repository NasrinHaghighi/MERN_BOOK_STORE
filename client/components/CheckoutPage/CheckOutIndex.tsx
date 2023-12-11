import React ,{useState,useEffect} from 'react'
import Address from './Address/Address';
import ShippingMethod from './ShippingMethod/ShippingMethod';
import Confirmation from './Confirmation/Confirmation';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Wrapper, ProgressBarBox, BtnBox, Btn, SubmitBtn} from './styles'
import { FaLocationArrow } from "react-icons/fa";
import IconBar from './IconBar/IconBar';
import { CiDeliveryTruck } from "react-icons/ci";
import { GiConfirmed } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {updateUserAddress} from '../../features/UserAddressSlice'
import useFetchUserData from '../../hooks/useFetchUserData'
import { useRouter } from 'next/navigation'
import {removeAllitem} from '../../features/bookSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';
function CheckOutIndex() {
 
    const [step, setStep] = useState(1);
    const router = useRouter()
    const [userInfo, setUserInfo] =useState({})
    const dispatch=useAppDispatch()
    const userId =useAppSelector((stata)=>stata.user.userId)
      const {  booksWithQuantity, fetchUserdata ,cartId} = useFetchUserData();
      /*make data to send*/
      const datatoSend={ userInfo: userInfo,  booksWithQuantity: booksWithQuantity, userId:userId }
      console.log(datatoSend)
      /*make data to send*/
      const  onFormSubmit= async () =>{
        /*we need to remove all item from redux by submit, meanse cart now is a order nad cart is */
      dispatch(removeAllitem())
      
          try {
            const response = await axios.post("https://mern-book-store-api.vercel.app/api/v1/userOrder", datatoSend)
              // If order placed successfully, proceed to delete the cart
              let res = await axios.delete(`https://mern-book-store-api.vercel.app/api/v1/cart/${userId}`)
            if(response.status === 201){
              toast('We recived you order Successfully!',{
                draggable:true,
                position:toast.POSITION.TOP_RIGHT
              })
              setTimeout(() => {
                router.push('/books')
              }, 5000);
            }
          } catch (error) {
            console.error('Error creating order:', error);
            // Handle errors if the request fails
          }
        }
       useEffect(() => {
           fetchUserdata();
          }, []);
    
          useEffect(() => {
            dispatch(updateUserAddress(userInfo))
            }, [userInfo]);
      
     
      const handelInputs =(info:any)=>{
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          ...info,
        }));
     
      }
console.log(userInfo)
      const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  /*On submit function....*/
  
  return (
    <>
     <ToastContainer draggable={false} autoClose={5000}/> 
    <Wrapper>
        <br/>
        <ProgressBarBox>

<ProgressBar now={step ===1 ? 33 : step === 2? 66 : 100} style={{ height: '8px',width:'60%', margin:'auto', }} variant="success" /> 
{arr.map((item)=>{
  return <IconBar item={item} key={item.id} step={step} />
})}
</ProgressBarBox>
<br/>
    <div>
   
    {step === 1 && (
      <Address handelInputs={handelInputs} userInfo={userInfo}/>
    )}
    {step === 2 && (
     <ShippingMethod handelInputs={handelInputs} userInfo={userInfo}/>
    )}
      {step === 3 && (
    <Confirmation userInfo={userInfo}/>
    )}
    
 <BtnBox >

 
 <Btn onClick={prevStep} className={step ===1 ?'disable' :''}>Previous</Btn>

{step === 3 ? <SubmitBtn onClick={onFormSubmit}>Submit</SubmitBtn>: <Btn onClick={nextStep}>Next</Btn>} 
 </BtnBox>
  </div>
  </Wrapper>
  </>
  )
}

export default CheckOutIndex


const arr=[
  {id:1, tit:'Address', icon:<FaLocationArrow/>},
  {id:2, tit:'Shipping Method', icon:<CiDeliveryTruck/>},
  {id:3, tit:'Confermation', icon:<GiConfirmed/>},
]