import next from "next";
import { createGlobalStyle } from "styled-components";

const MyGlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  background-color: #f5f5f5;
  color:#616161;
  position:relative ;

}
a {
  color: initial;
  text-decoration: none;
}
ul {
  list-style-type: none;
}
a,
a:hover,
a:active,
a:focus,
input:hover,
input:active,
input:focus,
button:hover,
button:visited,
button:active,
button:focus,
.form-control:focus {
  outline: none !important;
  color: inherit;
}
*:focus {
  outline: none !important;
}
input.middle:focus {
  outline-width: 0;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
  outline: 0px !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
li {
  list-style: none;
}
input[type='radio']:after {
        width:20px;
        height: 20px;
        border-radius: 15px;
        top:-6px;
        left: -1px;
        position: relative;
        background-color: #d1d3d1;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    input[type='radio']:checked:after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top:-6px;
        left: -1px;
        position: relative;
        background-color: #ffa500;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }
.css-187mznn-MuiSlider-root {
  color:#ffa500 !important;
}


.vertical-timeline::before {
 background:#6c757d;
}
.vertical-timeline-element-icon {
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
    padding: 5px 0;
    color: black;
    line-height:20px !important;
}
/*background color for timeline card*/
.vertical-timeline--animate .vertical-timeline-element-content.bounce-in{
  background:#f4e1be

}
.vertical-timeline-element-content-arrow{
  border-right: 7px solid #f4e1be;
}
.swiper-button-prev{
  color:#ffa500 !important;
  font-weight:900 ;
}
.swiper-button-next{
  color:#ffa500 !important;
  font-weight:900 ;
}
.MuiSlider-track .css-1gv0vcd-MuiSlider-track{
  display: none !important ;
}

/**border color of sort and show */
.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #ffa500 !important;
}
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffa500 !important;
}

/***pagination */
.css-kvsszq-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: rgba(255, 165, 0, 0.5) !important;
}
.css-neac5d-MuiButtonBase-root-MuiButton-root {
  background-color: rgba(255, 165, 0, 0.8) !important;
}
.slick-next{
  display: none !important;
}
.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
  color: #ffa500 !important;
}
.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
  color: #ffa500 !important;
}
.css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
  color: #ffa500 !important;
}
/*checkout page */

._2Jtxm._2ZUAI ._2JvrO {
    background-color: #ffa500;
    color: white;
    animation: _3SDnc 400ms ease-in-out forwards;
}
._2Jtxm._35Ago ._2kL0S {
    background-color: green;
    color: white;
    animation: _JAh3L 400ms ease forwards;
}
._2Jtxm::before {
    content: '';
    position: absolute;
    top: 50%;
    height: 3px;
    width: 100%;
    right: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background: linear-gradient(to left, #e7eaf3 50%, #ffa500 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 200ms ease-in-out;
}
._hsN1w {
    background-color: #ffa500 !important;
    border: 1px solid #ffa500 !important;
    color: white;
}
._hsN1w:hover {
  color: white;
    background-color: #ffa500 !important;
    border: 1px solid #ffa500 !important;
    box-shadow: 0px 3px 6px 0 rgba(57, 124, 246, 0.3);
}


._2Jtxm ._1hzhf {
   font-size: 18px;
}
._2Jtxm ._1ixJ3 {
    display: block;
    color: #ffa500;
    font-size: 22px !important;
}
.css-13cymwt-control {
  min-height: 50px !important;
  background-color: #f5f5f5 !important;
  margin-bottom: 20px;
  
}
.css-13cymwt-control:focus {

  background-color: #f5f5f5 !important;
 
  
}
.css-13cymwt-control:hover {
    border-color: red !important;
}
.css-t3ipsp-control:hover{
  border-color: orange !important;
}
`


export default MyGlobalStyle;