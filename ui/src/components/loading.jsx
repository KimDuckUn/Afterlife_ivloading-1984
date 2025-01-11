import React, { useState, useEffect } from "react";
import back from "../assets/back.png"
import map from "../assets/map.png"
import music from "../assets/music.png"
import Fade from "../utils/Fade";

function Loading() {
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);


  return (
    <>
      <Fade in={visible}>
        <div className="loading-wrapper">

          <div className="background" style={{backgroundImage: `url(${back})`}}></div>
          <div className="vignette"></div>

          <div className="loading-container">
          <div className="header">
            <img src={map} alt="" />
            <p>CITY CENTER</p>
          </div>
          <div className="footer">
            
            <img src={music} alt="" />
            <img className="m1 m" src={music} alt="" />
            <img className="m2 m" src={music} alt="" />
            <img className="m3 m" src={music} alt="" />
     
            
            
            <div>

            <h>LOADING</h>
            <div className="loading">
              <div className="loading-background"></div>
              <div className="loading-value"></div>
            </div>
            <h className="quote">Humans can be museums too,filled with history they can no longer touch</h>

          </div>
          </div>
          </div>

        </div>
      </Fade>
    </>
  );
}

export default Loading;
