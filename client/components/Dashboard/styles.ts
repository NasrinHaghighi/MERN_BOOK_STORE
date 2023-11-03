import styled ,{keyframes} from "styled-components";



export const Box=styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
max-width: 1520px;
margin: 0 auto;
padding:0 80px ;
@media (max-width:1400px) {
    grid-template-columns: 1fr ;
}
/*less padding for responsive*/
@media (max-width:600px) {
padding: 0 00px;
}


`