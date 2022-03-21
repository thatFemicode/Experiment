import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

const Routing = (props) => {
  console.log(props);
  const location = useLocation();
  console.log(location);
  return (
    <div
      className="relative"
      style={{
        height: "calc(100vh - 56px)",
      }}
    >
      <TransitionGroup component={null}>
        {/* <Transition
          timeout={500}
          // key={props.location.pathname}
          // onEnter={onEnterHandler}
          // onExit={onExitHandler}
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Transition> */}
      </TransitionGroup>
    </div>
  );
};

export default Routing;
