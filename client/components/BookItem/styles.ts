import styled from "styled-components";

export const MovingContent=styled.div`
 width:100% ;
position: absolute;
z-index:2 ;
transition: all 0.2s linear;


`
export const Btn=styled.div`
 color: ${props=>props.theme.textStrong};
 font-size:20px;
 position: fixed;
opacity:0 ;
 width:80% ;
 z-index:-1 ;
 font-weight:600 ;
 bottom:5px ;
 transition: all 0.2s linear;
 display:flex ;
 justify-content:space-between ;
`
export const Add=styled.div`
&::before {
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    left: 0;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
    border-radius:12px ;
  }
&:hover {
    &::before {
        width: 40%; 
    }
}
`

export const Favoraite=styled.div`
padding-bottom:10px ;
&::before {
    border-radius:12px ;
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    right: 0;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
  }
&:hover {
    &::before {
        
        width: 25%; 
    }
}
`
/*************add */
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
    ${Btn}{
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
export const Price=styled.div`
 font-size:18px;
 font-weight:700 ;
display:flex ;
justify-content:space-between ;
    margin:10px 0 ;
    color: ${props=>props.theme.textStrong};
`

