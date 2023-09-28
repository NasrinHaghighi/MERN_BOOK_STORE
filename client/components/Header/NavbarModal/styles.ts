import styled from "styled-components";

export const Container =styled.div`
height: 80vh;
text-align: center;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 0 40px;

`

export const BasketBox=styled.div<{
    wish: boolean;
  }>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`