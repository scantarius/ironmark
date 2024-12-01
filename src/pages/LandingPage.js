import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import aboutBackground from "../pictures/aboutBackground.jpg";
import aboutBackgroundPhone from "../pictures/aboutBackgroundPhone.jpg";
import goldenCard from "../pictures/gold.jpg";
import silverCard from "../pictures/silver.jpg";

import Footer from "../components/Footer";

function LandingPage() {
  const [materialPhoto, setMaterialPhoto] = useState(false);
  const [gold, setGold] = useState(false);
  const [silver, setSilver] = useState(false);
  const [activeGoldButton, setActiveGoldButton] = useState(false);
  const [activeSilverButton, setActiveSilverButton] = useState(false);

  const [checkedRadio, setCheckedRadio] = useState(false);
  const [checkedRadio2, setCheckedRadio2] = useState(false);

  const [thickness, setThickness] = useState(false);
  const [five, setFive] = useState(false);
  const [eight, setEight] = useState(false);

  const [amount, setAmount] = useState(false);
  const [twentyfive, setTwentyFive] = useState(false);
  const [fifty, setFifty] = useState(false);
  const [hundred, setHundred] = useState(false);

  const [goldPrice, setGoldPrice] = useState(false);
  const [silverPrice, setSilverPrice] = useState(false);

  const [thicknessPriceGoldFive, setThicknessPriceGoldFive] = useState(false);
  const [thicknessPriceGoldEight, setThicknessPriceGoldEight] = useState(false);
  const [thicknessPriceSilverFive, setThicknessPriceSilverFive] =
    useState(false);
  const [thicknessPriceSilverEight, setThicknessPriceSilverEight] =
    useState(false);

  const [amountTwentyFive, setAmountTwentyFive] = useState(false);
  const [amountFifty, setAmountFifty] = useState(false);
  const [amountHundred, setAmountHundred] = useState(false);

  function setPriceAmount() {
    if (
      // gold 0.5mm 25
      localStorage.getItem("Material") === "Gold" &&
      localStorage.getItem("Thickness") === "0.5mm" &&
      localStorage.getItem("Amount") === "25"
    ) {
      setGoldPrice(true);
      setThicknessPriceGoldFive(true);
      setAmountTwentyFive(true);
      console.log(goldPrice, thicknessPriceGoldFive, amountTwentyFive);
      localStorage.setItem("Price", "€ 4.95");
      localStorage.setItem("oldTotalPriceAmount", "€ 123.75");
      localStorage.setItem("totalPriceAmount", "€ 117.56");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 5% OFF";
    } else if (
      // gold 0.5mm 50
      localStorage.getItem("Material") === "Gold" &&
      localStorage.getItem("Thickness") === "0.5mm" &&
      localStorage.getItem("Amount") === "50"
    ) {
      setGoldPrice(true);
      setThicknessPriceGoldFive(true);
      setAmountFifty(true);
      console.log(goldPrice, thicknessPriceGoldFive, amountFifty);
      localStorage.setItem("Price", "€ 4.95");
      localStorage.setItem("oldTotalPriceAmount", "€ 247.50");
      localStorage.setItem("totalPriceAmount", "€ 222.75");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 10% OFF";
    } else if (
      // gold 0.5mm 100
      localStorage.getItem("Material") === "Gold" &&
      localStorage.getItem("Thickness") === "0.5mm" &&
      localStorage.getItem("Amount") === "100"
    ) {
      setGoldPrice(true);
      setThicknessPriceGoldFive(true);
      setAmountHundred(true);
      console.log(goldPrice, thicknessPriceGoldFive, amountHundred);
      localStorage.setItem("Price", "€ 4.95");
      localStorage.setItem("oldTotalPriceAmount", "€ 495.00");
      localStorage.setItem("totalPriceAmount", "€ 420.75");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 15% OFF";
    } else if (
      // gold 0.8mm 25
      localStorage.getItem("Material") === "Gold" &&
      localStorage.getItem("Thickness") === "0.8mm" &&
      localStorage.getItem("Amount") === "25"
    ) {
      setGoldPrice(true);
      setThicknessPriceGoldEight(true);
      setAmountTwentyFive(true);
      console.log(goldPrice, thicknessPriceGoldEight, amountTwentyFive);
      localStorage.setItem("Price", "€ 5.25");
      localStorage.setItem("oldTotalPriceAmount", "€ 131.25");
      localStorage.setItem("totalPriceAmount", "€ 124.68");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 5% OFF";
    } else if (
      // gold 0.8mm 50
      localStorage.getItem("Material") === "Gold" &&
      localStorage.getItem("Thickness") === "0.8mm" &&
      localStorage.getItem("Amount") === "50"
    ) {
      setGoldPrice(true);
      setThicknessPriceGoldEight(true);
      setAmountFifty(true);
      console.log(goldPrice, thicknessPriceGoldEight, amountFifty);
      localStorage.setItem("Price", "€ 5.25");
      localStorage.setItem("oldTotalPriceAmount", "€ 262.50");
      localStorage.setItem("totalPriceAmount", "€ 236.25");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 10% OFF";
    } else if (
      // gold 0.8mm 100
      localStorage.getItem("Material") === "Gold" &&
      localStorage.getItem("Thickness") === "0.8mm" &&
      localStorage.getItem("Amount") === "100"
    ) {
      setGoldPrice(true);
      setThicknessPriceGoldEight(true);
      setAmountHundred(true);
      console.log(goldPrice, thicknessPriceGoldEight, amountHundred);
      localStorage.setItem("Price", "€ 5.25");
      localStorage.setItem("oldTotalPriceAmount", "€ 525.00");
      localStorage.setItem("totalPriceAmount", "€ 446.25");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 15% OFF";
    }
    if (
      // silver 0.5mm 25
      localStorage.getItem("Material") === "Silver" &&
      localStorage.getItem("Thickness") === "0.5mm" &&
      localStorage.getItem("Amount") === "25"
    ) {
      setSilverPrice(true);
      setThicknessPriceSilverFive(true);
      setAmountTwentyFive(true);
      console.log(silverPrice, thicknessPriceSilverFive, amountTwentyFive);
      localStorage.setItem("Price", "€ 4.88");
      localStorage.setItem("oldTotalPriceAmount", "€ 122.00");
      localStorage.setItem("totalPriceAmount", "€ 115.90");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 5% OFF";
    } else if (
      // silver 0.5mm 50
      localStorage.getItem("Material") === "Silver" &&
      localStorage.getItem("Thickness") === "0.5mm" &&
      localStorage.getItem("Amount") === "50"
    ) {
      setSilverPrice(true);
      setThicknessPriceSilverFive(true);
      setAmountFifty(true);
      console.log(silverPrice, thicknessPriceSilverFive, amountFifty);
      localStorage.setItem("Price", "€ 4.88");
      localStorage.setItem("oldTotalPriceAmount", "€ 244.00");
      localStorage.setItem("totalPriceAmount", "€ 219.60");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 10% OFF";
    } else if (
      // silver 0.5mm 100
      localStorage.getItem("Material") === "Silver" &&
      localStorage.getItem("Thickness") === "0.5mm" &&
      localStorage.getItem("Amount") === "100"
    ) {
      setSilverPrice(true);
      setThicknessPriceSilverFive(true);
      setAmountHundred(true);
      console.log(silverPrice, thicknessPriceSilverFive, amountHundred);
      localStorage.setItem("Price", "€ 4.88");
      localStorage.setItem("oldTotalPriceAmount", "€ 488.00");
      localStorage.setItem("totalPriceAmount", "€ 414.80");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 15% OFF";
    } else if (
      // silver 0.8mm 25
      localStorage.getItem("Material") === "Silver" &&
      localStorage.getItem("Thickness") === "0.8mm" &&
      localStorage.getItem("Amount") === "25"
    ) {
      setSilverPrice(true);
      setThicknessPriceSilverEight(true);
      setAmountTwentyFive(true);
      console.log(silverPrice, thicknessPriceSilverEight, amountTwentyFive);
      localStorage.setItem("Price", "€ 5.08");
      localStorage.setItem("oldTotalPriceAmount", "€ 127.00");
      localStorage.setItem("totalPriceAmount", "€ 120.65");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 5% OFF";
    } else if (
      // silver 0.8mm 50
      localStorage.getItem("Material") === "Silver" &&
      localStorage.getItem("Thickness") === "0.8mm" &&
      localStorage.getItem("Amount") === "50"
    ) {
      setSilverPrice(true);
      setThicknessPriceSilverEight(true);
      setAmountFifty(true);
      console.log(silverPrice, thicknessPriceSilverEight, amountFifty);
      localStorage.setItem("Price", "€ 5.08");
      localStorage.setItem("oldTotalPriceAmount", "€ 254.00");
      localStorage.setItem("totalPriceAmount", "€ 228.60");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 10% OFF";
    } else if (
      // silver 0.8mm 100
      localStorage.getItem("Material") === "Silver" &&
      localStorage.getItem("Thickness") === "0.8mm" &&
      localStorage.getItem("Amount") === "100"
    ) {
      setSilverPrice(true);
      setThicknessPriceSilverEight(true);
      setAmountHundred(true);
      console.log(silverPrice, thicknessPriceSilverEight, amountHundred);
      localStorage.setItem("Price", "€ 5.08");
      localStorage.setItem("oldTotalPriceAmount", "€ 508.00");
      localStorage.setItem("totalPriceAmount", "€ 431.80");

      document.getElementById("priceAmount").innerHTML =
        localStorage.getItem("Price");
      document.getElementById("oldTotalPriceAmount").innerHTML =
        localStorage.getItem("oldTotalPriceAmount");
      document.getElementById("totalPriceAmount").innerHTML =
        localStorage.getItem("totalPriceAmount");
      document.getElementById("discountAmount").innerHTML = "SALE 15% OFF";
    }
  }

  function changeMaterialToGold() {
    setMaterialPhoto(false);
    setActiveGoldButton(true);
    setActiveSilverButton(false);
    setGold(true);
    console.log(gold);
    localStorage.setItem("Material", "Gold");
    var x = localStorage.getItem("Material");
    document.getElementById("cardColor").innerHTML = x;
    setPriceAmount();
  }

  function changeMaterialToSilver() {
    setMaterialPhoto(true);
    setActiveSilverButton(true);
    setActiveGoldButton(false);
    setSilver(true);
    console.log(silver);
    localStorage.setItem("Material", "Silver");
    var x = localStorage.getItem("Material");
    document.getElementById("cardColor").innerHTML = x;
    setPriceAmount();
  }

  function changeThicknessToFive() {
    setThickness(false);
    setFive(true);
    console.log(five);
    localStorage.setItem("Thickness", "0.5mm");
    var x = localStorage.getItem("Thickness");
    document.getElementById("thicknessValue").innerHTML = x;
    setCheckedRadio(false);
    setPriceAmount();
  }

  function changeThicknessToEight() {
    setThickness(true);
    setEight(true);
    console.log(eight);
    localStorage.setItem("Thickness", "0.8mm");
    var x = localStorage.getItem("Thickness");
    document.getElementById("thicknessValue").innerHTML = x;
    setCheckedRadio(false);
    setPriceAmount();
  }

  function changeAmountToTwentyFive() {
    setAmount(true);
    setTwentyFive(true);
    console.log(twentyfive);
    localStorage.setItem("Amount", "25");
    var x = localStorage.getItem("Amount");
    document.getElementById("amountValue").innerHTML = x;
    setCheckedRadio2(false);
    setPriceAmount();
  }

  function changeAmountToFifty() {
    setAmount(false);
    setFifty(true);
    console.log(fifty);
    localStorage.setItem("Amount", "50");
    var x = localStorage.getItem("Amount");
    document.getElementById("amountValue").innerHTML = x;
    setCheckedRadio2(false);
    setPriceAmount();
  }

  function changeAmountToHundred() {
    setAmount(true);
    setHundred(true);
    console.log(hundred);
    localStorage.setItem("Amount", "100");
    var x = localStorage.getItem("Amount");
    document.getElementById("amountValue").innerHTML = x;
    setCheckedRadio2(false);
    setPriceAmount();
  }

  const materialVal = localStorage.getItem("Material");
  const thicknessVal = localStorage.getItem("Thickness");
  const amountVal = localStorage.getItem("Amount");
  const priceAmount = localStorage.getItem("Price");
  const oldTotalPriceAmount = localStorage.getItem("oldTotalPriceAmount");
  const totalPriceAmount = localStorage.getItem("totalPriceAmount");
  const discountAmount = localStorage.getItem("discountAmount");

  const ProductCardView = (productCard) => {
    const productCardID = document.getElementById("productCard");
    productCardID.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0 });
  }

  function loadDefaultItems() {
    setActiveGoldButton();
    changeMaterialToGold();
    changeThicknessToFive();
    changeAmountToTwentyFive();
    setCheckedRadio(true);
    setCheckedRadio2(true);
  }

  return (
    <>
      <section id="landingPage" onLoad={loadDefaultItems}>
        <div id="landingPageWrapper">
          <img
            src={
              window.innerWidth > 767 ? aboutBackground : aboutBackgroundPhone
            }
            className="aboutBackground"
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
      </section>

      <section id="productCard">
        <div>
          <button
            className={activeGoldButton ? "activeButton" : "inactiveButton"}
            onClick={changeMaterialToGold}
          >
            GOLD
          </button>
          <button
            className={activeSilverButton ? "activeButton" : "inactiveButton"}
            onClick={changeMaterialToSilver}
          >
            SILVER
          </button>
        </div>
        <div>
          <motion.img
            className={`materialPhoto ${
              materialPhoto ? "materialSilverPhoto" : "materialGoldPhoto"
            }`}
            src={materialPhoto ? silverCard : goldenCard}
            alt="cardMaterial"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 2 }}
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
                <span className={checkedRadio ? "name__firstLoad" : "name"}>
                  0.5mm
                </span>
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
                <span className={checkedRadio2 ? "name__firstLoad" : "name2"}>
                  25
                </span>
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
      </section>
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
          <h1 id="cardColor"> {materialVal}</h1>
          <span>Thickness</span>
          <motion.h1 id="thicknessValue">{thicknessVal}</motion.h1>
          <span>Amount</span>
          <h1 id="amountValue">{amountVal}</h1>
        </div>
        <div>
          <span>Price</span>
          <h1 id="priceAmount">{priceAmount}</h1>
          <span>Discount</span>
          <h1 id="discountAmount">{discountAmount}</h1>
          <span>Total price</span>
          <h3 id="oldTotalPriceAmount">{oldTotalPriceAmount}</h3>
          <h1 id="totalPriceAmount">{totalPriceAmount}</h1>
        </div>
      </div>
      <div id="processButtonWrapper">
        <button id="processButton">
          <NavLink to="/contact" onClick={scrollToTop} className="btn">
            <span className="spn">REQUEST</span>
          </NavLink>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
