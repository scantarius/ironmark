import React from "react";
import "./LandingPage.css";
import aboutBackground from "../pictures/aboutBackground.png";

function LandingPage() {
  return (
    <>
      <div id="landingPage">
        <div id="landingPagewrapper">
          <img
            className="aboutBackground"
            src={aboutBackground}
            alt={aboutBackground}
          />
          <h1 className="title">test</h1>
          <h1 className="title">test</h1>
        </div>
      </div>
      <div id="cards">
        <h1>test test</h1>
        <h1>test test</h1>
        <h1>test test</h1>
      </div>
    </>
  );
}

export default LandingPage;
