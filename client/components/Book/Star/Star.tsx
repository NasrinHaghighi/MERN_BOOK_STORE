import React from 'react'
import {BsStarFill,BsStarHalf, BsStar} from 'react-icons/bs'




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
       <span>{tempStars}  ({star})</span>
       )
        }
export default Star


// const tempStars=Array.from({length:5},(_,index)=>{
//     const number= index+0.5

//     return (
//         <span key={index}>
// {star >= index +1 ?(
// <BsStarFill />
// ): star >=number ?(
// <BsStarHalf />
// ):(
// <BsStar/>)      
// }
// </span>
// )
//     })