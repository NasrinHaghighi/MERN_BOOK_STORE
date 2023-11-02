import styled ,{keyframes} from "styled-components";



export const Box=styled.div`
display: grid;
grid-template-columns: 1fr 3fr;


@media (max-width:1400px) {
    grid-template-columns: 1fr ;
}



`