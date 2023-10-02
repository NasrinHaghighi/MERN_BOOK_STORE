import type { NextPage } from "next";
import React, {useEffect,useRef} from "react";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Features from "../components/Landing/Features/Features";
import Slider from "../components/Slider/SliderCo";
import CategorySectio from "../components/Landing/CategorySection/CategorySectio";
import ReactVerticalTimelineComponentTests from "../components/TimeLine/TimeLine";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Aduio from "../components/Aduio/Aduio";
import Discount from '../components/Landing/Discount/Discount'
import MovingBanner from "../components/Landing/MovingBanner/MovingBanner";

import handleViewport from 'react-in-viewport';

import { inject } from '@vercel/analytics';



const Home: NextPage = () => {
  inject();
  return (
    <>
     <Slider />
    <CategorySectio />
    
     <Features id='feat'/> 
    {/* <Discount id='discont'/> */}
    <MovingBanner />
    <Aduio id='audio'/>
    <ReactVerticalTimelineComponentTests  id='timeline'/> 

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;