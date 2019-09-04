import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: 'linear-gradient(to right,#1d7a71,#192020)'
    }}
  >
    <Particles
      params={{
        "particles": {
            "number": {
                "value": 90
            },
            "color" :{
               "value" : "#6cdfd3"
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }}

    />
  </div>
);
