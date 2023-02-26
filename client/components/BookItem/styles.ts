import styled from "styled-components";





export const MovingContent=styled.div`
 width:100% ;
position: absolute;
z-index:2 ;
transition: all 0.2s linear;

`
export const Add=styled.div`
 font-size:20px;
 position: fixed;
opacity:0 ;
 width:80% ;
 z-index:-1 ;
 bottom:0 ;
 transition: all 0.2s linear;

`
export const BookItemContainer=styled.div`

height:500px;
padding:30px ;
transition: all 0.2s linear;
text-align:center ;

&>span{
   
}
&:hover{
    transform: scale(1.07);
    border:2px solid ${props=>props.theme.grayBorder} ;
    box-shadow:${props=>props.theme.socialBoxshadow} ;
    background-color: #ffff;
    ${MovingContent}{
        transform:translateY(-50px) ;
        background-color:#ffff ;
    }
    ${Add}{
       opacity:1 ;
    }
}

&>h5{
    margin:15px 0 ;
}

`
export const Bottom=styled.div`
position: relative;
`
export const Tit=styled.h4`
 font-size:20px;
margin:15px 0 ;
    font-weight:700 ;
    color: ${props=>props.theme.textStrong};

`
export const Auth=styled.h4`
 font-size:18px;
    margin:10px 0 ;
    color: ${props=>props.theme.graytext};

`
export const Price=styled.h4`
 font-size:22px;
    margin:10px 0 ;
    color: ${props=>props.theme.textStrong};

`

