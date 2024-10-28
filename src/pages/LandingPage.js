import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import aboutBackground from "../pictures/aboutBackground.png";
import goldenCard from "../pictures/card.png";
import Footer from "../components/Footer";

function LandingPage() {
  function createItem() {
    localStorage.setItem("material", "gold");
    var x = localStorage.getItem("material");
    document.getElementById("cardColor").innerHTML = x;
  }

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
            <div className="animation">
              <h1 className="item">jedan</h1>
              <h1 className="item">dva</h1>
              <h1 className="item">tri</h1>
            </div>
            <button>VIŠE O NAMA</button>
          </div>
        </div>
      </div>

      <div id="productCard">
        <div>
          <button className="activeColor" onClick={createItem}>
            GOLD
          </button>
          <button onClick={createItem}>SILVER</button>
        </div>
        <div>
          <img className="goldenCard" src={goldenCard} alt={goldenCard} />
          <h1>test</h1>
        </div>
      </div>
      <div id="productInfo">
        <div>
          <h1>
            Material: <span id="cardColor"></span>
          </h1>
          <h1>
            Debljina: <span id="thicknessValue"></span>
          </h1>
          <h1>
            Kolicina: <span id="amountValue"></span>
          </h1>
        </div>
      </div>
      <div id="processButtonWrapper">
        <button id="processButton">
          <NavLink to="/contact" className="btn">
            <span className="spn">NARUCI</span>
          </NavLink>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
