import "./banner.css";
import React, { useRef, useEffect } from "react";
function Banner() {
  let a = "abcd";
  return (
    <>
      <div className="holder">
        <div className="frame">
          <div className="slider">
            <img
              src="src/assets/arrow.png"
              className={a === "abc" ? "arrow-left hello" : "arrow-left"}
            ></img>
            <div className="final-level">
              <img src="src/assets/photo.jpg" className="actual-photo"></img>
              <img src="src/assets/photo.jpg" className="actual-photo"></img>
              <img src="src/assets/photo.jpg" className="actual-photo"></img>
              <img src="src/assets/photo.jpg" className="actual-photo"></img>
            </div>
            <img src="src/assets/arrow.png" className="arrow-right"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
