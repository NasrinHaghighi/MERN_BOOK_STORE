import React from 'react'
import {BsStarFill,BsStarHalf, BsStar} from 'react-icons/bs'

import {Box} from './styles'


function Star ({star}:any) {


    const tempStars=Array.from({length:5},(_,index)=>{
        const number= index+0.5
    
        return (
            <span key={index} style={{color:'orange',marginBottom:60}}>
    {star >= index +1 ?(
    <BsStarFill />
    ): star >=number ?(
    <BsStarHalf />
    ):(
    <BsStar/>)      
    }
    </span>
    )
        })
       return(
       <Box>{tempStars} <span>({star})</span></Box>
       )
        }
export default Star


