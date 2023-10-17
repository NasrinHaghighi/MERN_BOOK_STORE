import styled from "styled-components";




export const Box =styled.section`
border: 1px solid ${props=>props.theme.textgray};
padding: 20px 15px;
border-radius: 10px;

`
export const Title =styled.div`
font-size: 20px;
font-weight: 700;

`
export const Main =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;
@media (max-width: 800px) {
    flex-direction: column;
  }
 

`
export const CheckBoxDiv =styled.div`
font-size: 20px;
@media (max-width: 800px) {
   margin-bottom: 15px;
  }
 

`
export const Price =styled.div`
display: flex;
&.init {
    color: ${props=>props.theme.red};
  }
  &.final {
  color: ${props=>props.theme.green};
  }

`
export const Span =styled.span`
font-size: 20px;
font-weight: 700;

`