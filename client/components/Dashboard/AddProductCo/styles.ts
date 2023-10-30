import styled  from "styled-components";


export const Boxs =styled.section`
background-color: ${props=>props.theme.white};
width: 80%;
height: auto;
padding:10px 30px 100px 30px ;
border-radius: 10px;
display: flex;
flex-direction: column;
`
export const Title =styled.span`
font-size: 24px;
margin-bottom: 20px;
`
export const UploadImageBox =styled.div`
width: 220px;
text-align: center;
border-radius: 10px;

`

export const BoxImg=styled.div`
padding: 10px;
border: 2px solid ${props=>props.theme.lightGray}; 
border-radius: 10px;
width: auto;
height: 250px;
background-image: url('/images/default.jpg');
background-position: center;
background-size: cover;

`
export const Form=styled.div`


padding: 10px;

`
export const BtnDiv=styled.div`
display: flex;
justify-content: space-between;
margin-top:40px;

`

export const Submite=styled.button`
width: 20%;
border: none;
background-color: ${props=>props.theme.orange};
padding: 15px 20px;
border-radius: 10px;
color: ${props=>props.theme.white};
&:hover{
    color: ${props=>props.theme.white};
}
&:active{
    color: ${props=>props.theme.white};
}
&:focus{
    color: ${props=>props.theme.white};  
}
`