import React, { useRef } from "react";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { gsap } from "gsap";
// import Routes from "./Routes/Route";
import { MainStyled } from "./MainStyled";
import Navbar from "./Components/Navbar/Navbar";
const completeCall = (target, parent) => {
  gsap.set(target, { clearProps: "position, width" });
  parent && gsap.set(parent, { clearProps: "overflow" });
};
function App() {
  const parentNode = useRef(null);
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    adapt: "399px",
    se: "330px",
    vSmall: "290px",
    teams: "350px",
    foot: "375px",
    max: "415px",
    mobil: "430px",
    blogNav: "610px",
    images: "680px",
    text: "810px",
    nav: "800px",
    min: "520px",
    make: "548px",
    image: "900px",
    mobile: "500px",
    desktop: "769px",
    desk: "700px",
    player: "751px",
    dont: "1020px",
    service: "900px",
    balls: "930px",
    post: "940px",
    hero: "992px",
    kobe: "1200px",
    mind: "1100px",
    mins: "1400px",
    minsx: "1280px",
    minss: "1500px",
    team: "1700px",
    auth: "1800px",
    img: "1201px",
  };
  let location = useLocation();
  // console.log(location);
  const onEnterHandler = (node) => {
    gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      // position: "absolute",
      left: 0,
      y: 100,
      autoAlpha: 0,
    });
    gsap.set(parentNode.current, { overflow: "hidden" });
    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 0.3,
      autoAlpha: 1,
      y: 0,
      onComplete: completeCall,
      onCompleteParams: [node, parentNode.current],
    });
  };
  const onExitHandler = (node) => {
    gsap.killTweensOf(node);
    // Set initial position and styles
    gsap.set(node, {
      // position: "absolute",
      // left: 0,
    });
    // Create the animation for the incoming component
    gsap.to(node, {
      duration: 0.4,
      autoAlpha: 0,
      y: -100,
    });
  };
  const nodeRef = React.useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <CustomCursor />
      <Navbar />
      <MainStyled ref={parentNode}>
        <TransitionGroup component={null}>
          <Transition
            timeout={500}
            key={location.pathname}
            onEnter={(el) => {
              onEnterHandler(el);
            }}
            onExit={(el) => {
              onExitHandler(el);
            }}
            nodeRef={nodeRef.current}
          >
            <Routes ref={nodeRef.current} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Transition>
        </TransitionGroup>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
