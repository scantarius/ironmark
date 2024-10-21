import React from "react";
import "./LandingPage.css";
import aboutBackground from "../pictures/aboutBackground.png";

function LandingPage() {
  return (
    <>
      <div id="landingPage">
        <div id="landingPageWrapper">
          <img
            className="aboutBackground"
            src={aboutBackground}
            alt={aboutBackground}
          />
          <div className="textBox">
            <h1 className="title">Ne traži izgovore.</h1>
            <div class="animation">
              <h1 className="item">jedan</h1>
              <h1 className="item">dva</h1>
              <h1 className="item">tri</h1>
            </div>
            <button>VIŠE O NAMA</button>
          </div>
        </div>
      </div>
      <div id="cards">
        <h1>test test test</h1>
        <h1>test test</h1>
        <h1>test test test</h1>
      </div>
    </>
  );
}

export default LandingPage;
