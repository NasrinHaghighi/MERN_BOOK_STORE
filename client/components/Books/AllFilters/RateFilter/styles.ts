import styled from "styled-components";


export const RateContainer=styled.div`
padding:20px 30px 0 30px;
overflow:hidden ; 
margin :10px ;

text-align:center ;

transition:height 400ms ease ;
&.active{
    height:100px;
 }
&.unActive{
    height: 0;
 }

`