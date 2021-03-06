import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* dark shades of primary color*/
  --transition: all 0.3s linear;
  --white: #fff;
  --maroon:#83333e;
  --off-white:#f2f4f5;
  --black:#000;
  --grey: #f1f4f8b0;
  --dark-grey: #6b7c93;
  --green: #24b47e;
  --teal: #4F96CE;
  --blue: #6772e5;
  --dark-blue: #4F3EF5;
  --spacer: 28px;
  --main-color: #3664e8;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
    font-weight:500;
    text-decoration: none;
    font-size:100%;
    scroll-behavior:smooth;
    /* color: #0f2137; */
 

    /* font-size:1vw; */
    &:after{
     margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    
    }
    &:before{
     margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    }
}
html {
  scroll-behavior: smooth;
  position: relative;
  font-size:100%;
}
body{
  /* background-color:pink; */
/* overflow: hidden; */
overflow-x: hidden;
position: relative;
height:100vh;
cursor: none;
width:100%;
/* color:var(--black); */
color:#fff;
font-size:100%;
/* background-color:#e4e0df; */
/* background-color: #f5f0ec; */
background-color: #000;
/* background-color:#e9dbd4; */
-ms-overflow-style: none; /* Internet Explorer 10+ */
scrollbar-width: none; /* Firefox */
&::-webkit-scrollbar {
 display: none;
}
}
img{
    max-width: 100%;
}
a{
text-decoration: none;
color:inherit;
cursor:none;
}
li{
    list-style: none
}
.no-scroll{
  height:100vh;
  overflow:hidden;
  @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
         overflow:auto
          }
}
/* .no-scroll{
  height:100vh;
  overflow:hidden;
} */
/
.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #000;
  width: 100%;
  height: 0%;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;

}
.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -13;
  pointer-events: none;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  background-color: #f6f8fb;
}
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  /* background-color: #fff; */
  background-color: #f5f0ec;
background-color: #333;
  width: 100%;
  height: 0%;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  svg 
  {
opacity:0;
position: absolute;
width:400px;
height:400px;
left:50%;
transform:translateX(-50%);
@media screen and (max-width:450px){
  width:200px;
  height:200px;
  /* transform:translateX(-60%); */
}
@media screen and (max-width:376px){
  width:150px;
  height:150px;
  /* transform:translateX(-40%); */
}
  path{
    fill-opacity:0;
    stroke-width:10;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 1500;
    transform-origin:50% 50%;
  }
}
}
.Headd {
  opacity: 0;
  /* pointer-events: none; */
}
.Headds {
  opacity: 1;
}
`;
export default GlobalStyle;
