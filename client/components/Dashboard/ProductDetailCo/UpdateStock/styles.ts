import styled from "styled-components";




export const Box =styled.section`
border: 1px solid ${props=>props.theme.textgray};
padding: 20px 15px;
border-radius: 10px;
text-align: center;
background-color: ${props=>props.theme.mainBG};


`
export const Title =styled.div`
font-size: 20px;
font-weight: 700;

`
export const Main =styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-size: 20px;

`
export const Input =styled.input`
background-color: red !important;

`
