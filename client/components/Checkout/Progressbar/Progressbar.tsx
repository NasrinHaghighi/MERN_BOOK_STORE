import React ,{useState, useEffect}from 'react'
//import StepProgressBar from 'react-step-progress';
// import the stylesheet
//import 'react-step-progress/dist/index.css';
import Adress from '../Address/Adress';
import ShippingMethod from '../ShippingMethod/ShippingMethod';
import Confermation from '../Confermation/Confermation';
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineCloudDone } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa";
import {Wrapper} from './styles'
import {updateUserAddress} from '../../../features/UserAddressSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { boolean } from 'yup';
import useFetchUserData from '../../../hooks/useFetchUserData'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import {removeAllitem} from '../../../features/bookSlice'



function Progressbar() {
  const router = useRouter()
const userId =useAppSelector((stata)=>stata.user.userId)
  const {  booksWithQuantity, fetchUserdata ,cartId} = useFetchUserData();
   
   useEffect(() => {
       fetchUserdata();
      }, []);


  const dispatch=useAppDispatch()
  const [userInfo, setUserInfo] =useState({})
  const handelInputs =(info:any)=>{
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      ...info,
    }));
 
  }

  useEffect(() => {
    dispatch(updateUserAddress(userInfo))
    }, [userInfo]);
    /*get userIfo frm redux to make validation*/  
const userInforedux=useAppSelector((state)=>state.userAddress.address)

/*i need an obj to send bt post req*/
const datatoSend={ userInfo: userInfo,  booksWithQuantity: booksWithQuantity, userId:userId }

const step1Content = <Adress handelInputs={handelInputs} userInfo={userInfo}/>;
const step2Content = <ShippingMethod handelInputs={handelInputs} userInfo={userInfo}/>;
const step3Content = <Confermation userInfo={userInfo}/>;

const subtitle1 = <FaLocationArrow />;
const subtitle2 = <MdOutlineCloudDone />;
const subtitle3 = <FaCcAmazonPay />;


// const [valid, setValid] =useState<boolean>(false)
// useEffect(() => {
//   if(userInforedux.fullName && userInforedux.address){
    
//    setValid(true)
  
//   } else{
//     setValid(false)
//   }
// }, [userInforedux.fullName, userInforedux.address]);

function step1Validator() {
  return true
 
}
 
function step2Validator() {
   return true
}
   console.log(cartId)
 const  onFormSubmit= async () =>{
  /*we need to remove all item from redux by submit, meanse cart now is a order nad cart is */
dispatch(removeAllitem())

    try {
      const response = await axios.post("http://localhost:4000/api/v1/userOrder", datatoSend)
        // If order placed successfully, proceed to delete the cart
        let res = await axios.delete(`http://localhost:4000/api/v1/cart/${userId}`)
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
  return (
    <>
      <ToastContainer draggable={false} autoClose={5000}/> 
    <Wrapper>
    {/* <StepProgressBar
  startingStep={0}
  onSubmit={onFormSubmit}
  steps={[
    {
      label: 'Address',
      subtitle: subtitle1 ,
      name:'step 2' ,
      content: step1Content,
      validator: step1Validator
    },
    {
      label: 'Shipping method',
      subtitle: subtitle2,
      name: 'step 2',
      content: step2Content,
      validator: step2Validator
    },
    {
      label: 'Final Confermation',
      subtitle: subtitle3,
      name: 'step 3',
      content: step3Content,
     
    }
  ]}
/> */}
</Wrapper>
</>
)

}

export default Progressbar