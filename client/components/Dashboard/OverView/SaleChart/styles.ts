import styled from "styled-components";


export const Box =styled.div`

background-color: ${props=>props.theme.white};
padding:10px 30px  ;
border-radius: 10px;
`

export const Title =styled.h5`



`
export const ChartHeight =styled.div`

height: 300px;

`
export const PieBox =styled.div`
width: 300px; /* Set the width of the container */
height: 300px; 
  @media (max-width: 1400px) {
  margin: 0 auto;
   margin-top: 15px;
   width: 250px;
  }
  @media (max-width: 500px) {
width: 220px;
  }

`