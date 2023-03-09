import styled from "styled-components";

export const Box=styled.div`
display:grid ;
grid-template-columns:1fr 3fr ;
margin-bottom:20px ;
column-gap:10px;
align-items:center ;
&>p{
    font-size:18px ;
    font-weight:600 ;
}
`