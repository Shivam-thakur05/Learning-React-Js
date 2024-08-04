import React from "react";
import ClockName from "./component/ClockName";
import MidContent from "./component/MidContent";
import CurrentTime from "./component/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function BharatClock() {
  return (
    <center>
      <ClockName />
      <MidContent />
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default BharatClock;
