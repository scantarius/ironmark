import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import aboutBackground from "../pictures/aboutBackground.png";
import goldenCard from "../pictures/order.jpg";
import silverCard from "../pictures/silver.jpg";

import Footer from "../components/Footer";

function LandingPage() {
  const [materialPhoto, setMaterialPhoto] = useState(false);
  const [gold, setGold] = useState(false);
  const [silver, setSilver] = useState(false);

  const [thickness, setThickness] = useState(false);
  const [five, setFive] = useState(false);
  const [eight, setEight] = useState(false);

  const [amount, setAmount] = useState(false);
  const [twentyfive, setTwentyFive] = useState(false);
  const [fifty, setFifty] = useState(false);
  const [hundred, setHundred] = useState(false);

  function changeMaterialToGold() {
    setMaterialPhoto(false);
    setGold(true);
    console.log(gold);
    localStorage.setItem("Material", "Gold");
    var x = localStorage.getItem("Material");
    document.getElementById("cardColor").innerHTML = x;
  }

  function changeMaterialToSilver() {
    setMaterialPhoto(true);
    setSilver(true);
    console.log(silver);
    localStorage.setItem("Material", "Silver");
    var x = localStorage.getItem("Material");
    document.getElementById("cardColor").innerHTML = x;
  }

  function changeThicknessToFive() {
    setThickness(false);
    setFive(true);
    console.log(five);
    localStorage.setItem("Thickness", "0.5mm");
    var x = localStorage.getItem("Thickness");
    document.getElementById("thicknessValue").innerHTML = x;
  }

  function changeThicknessToEight() {
    setThickness(true);
    setEight(eight);
    console.log(eight);
    localStorage.setItem("Thickness", "0.8mm");
    var x = localStorage.getItem("Thickness");
    document.getElementById("thicknessValue").innerHTML = x;
  }

  function changeAmountToTwentyFive() {
    setAmount(true);
    setTwentyFive(true);
    console.log(twentyfive);
    localStorage.setItem("Amount", "25");
    var x = localStorage.getItem("Amount");
    document.getElementById("amountValue").innerHTML = x;
  }

  function changeAmountToFifty() {
    setAmount(false);
    setFifty(true);
    console.log(fifty);
    localStorage.setItem("Amount", "50");
    var x = localStorage.getItem("Amount");
    document.getElementById("amountValue").innerHTML = x;
  }

  function changeAmountToHundred() {
    setAmount(true);
    setHundred(true);
    console.log(hundred);
    localStorage.setItem("Amount", "100");
    var x = localStorage.getItem("Amount");
    document.getElementById("amountValue").innerHTML = x;
  }

  const materialVal = localStorage.getItem("Material");
  const thicknessVal = localStorage.getItem("Thickness");
  const amountVal = localStorage.getItem("Amount");

  const ProductCardView = (productCard) => {
    const productCardID = document.getElementById(productCard);
    productCardID.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

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
            <h1 className="title">we make you</h1>
            <div className="animation">
              <h1 className="item">stand out</h1>
              <h1 className="item">look professional</h1>
              <h1 className="item">leave lasting impression</h1>
            </div>
            <button>
              <NavLink onClick={ProductCardView} className="moreAboutButton">
                CREATE ORDER
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div id="productCard">
        <div>
          <button className="activeColor" onClick={changeMaterialToGold}>
            GOLD
          </button>
          <button onClick={changeMaterialToSilver}>SILVER</button>
        </div>
        <div>
          <motion.img
            className={`materialPhoto ${
              materialPhoto ? "materialSilverPhoto" : "materialGoldPhoto"
            }`}
            src={materialPhoto ? silverCard : goldenCard}
            alt="cardMaterial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
        <div>
          <div className="otherCardOptions__one">
            <span>Thickness</span>
            <div className="radio-inputs">
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  defaultChecked=""
                  className={thickness}
                  onClick={changeThicknessToFive}
                />
                <span className="name">0.5mm</span>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  className={thickness}
                  onClick={changeThicknessToEight}
                />
                <span className="name">0.8mm</span>
              </label>
            </div>
          </div>
          <div className="otherCardOptions__two">
            <span>Amount</span>
            <div className="radio-inputs2">
              <label className="radio2">
                <input
                  type="radio"
                  name="radio2"
                  defaultChecked=""
                  className={amount}
                  onClick={changeAmountToTwentyFive}
                />
                <span className="name2">25</span>
              </label>
              <label className="radio2">
                <input
                  type="radio"
                  name="radio2"
                  className={amount}
                  onClick={changeAmountToFifty}
                />
                <span className="name2">50</span>
              </label>
              <label className="radio2">
                <input
                  type="radio"
                  name="radio2"
                  className={amount}
                  onClick={changeAmountToHundred}
                />
                <span className="name2">100</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <section id="additionalInfo">
        <div id="additionalInfoWrapper">
          <h1>
            If you are interested in more than 100 cards contact us directly at{" "}
            <span>sales@ironmarkdesigns.com</span>
          </h1>
        </div>
      </section>
      <div id="productInfo">
        <div>
          <span>Material</span>
          <h1 id="cardColor">{materialVal}</h1>
          <span>Thickness</span>
          <h1 id="thicknessValue">{thicknessVal}</h1>
          <span>Amount</span>
          <h1 id="amountValue">{amountVal}</h1>
        </div>
        <div>
          <span>Price</span>
          <h1 id="cardColor">€ 0.00</h1>
          <span>Discount</span>
          <h1 id="thicknessValue">Sale 15% off</h1>
          <span>Total price</span>
          <h1 id="amountValue">€ 0.00</h1>
        </div>
      </div>
      <div id="processButtonWrapper">
        <button id="processButton">
          <NavLink to="/contact" className="btn">
            <span className="spn">REQUEST</span>
          </NavLink>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
