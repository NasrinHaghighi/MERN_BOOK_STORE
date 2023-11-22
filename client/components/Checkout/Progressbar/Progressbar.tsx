import React from 'react'
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
import Adress from '../Address/Adress';
import Confermation from '../Confermation/Confermation';
import Payment from '../Payment/Payment';
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineCloudDone } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa";
import {Wrapper} from './styles'


function Progressbar() {
const step1Content = <Adress />;
const step2Content = <Confermation />;
const step3Content = <Payment />;

const subtitle1 = <FaLocationArrow />;
const subtitle2 = <MdOutlineCloudDone />;
const subtitle3 = <FaCcAmazonPay />;
   
  function onFormSubmit() {
alert('submit...')
  }
  return (
    <>
    <Wrapper>
    <StepProgressBar
  startingStep={0}
  onSubmit={onFormSubmit}
  steps={[
    {
      label: 'Address',
      subtitle: subtitle1 ,
      name:'step 2' ,
      content: step1Content
    },
    {
      label: 'Final conformation',
      subtitle: subtitle2,
      name: 'step 2',
      content: step2Content,
      //validator: step2Validator
    },
    {
      label: 'Step 3',
      subtitle: subtitle3,
      name: 'step 3',
      content: step3Content,
      //validator: step3Validator
    }
  ]}
/>
</Wrapper>
</>
)

}

export default Progressbar