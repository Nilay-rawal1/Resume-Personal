import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Google Crowdsource Influncer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Team Lead,ELA VIT-Bhopal"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
