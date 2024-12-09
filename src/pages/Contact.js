import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import "./Loader.css";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

function Contact() {
  const [style, setStyle] = useState("loaderHidden");
  const [formStyle, setFormStyle] = useState("brutalist-container");

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  const changeStyle = () => {
    document.getElementById("loaderWrapper").style.display = "flex";

    window.scrollTo({ top: 0, left: 0 });
    if (style !== "loaderHidden") setStyle("loaderHidden");
    else setStyle("loaderVisible");
    if (formStyle !== "brutalist-containerHidden")
      setFormStyle("brutalist-containerHidden");
    else setFormStyle("brutalist-container");
  };

  const material = localStorage.getItem("Material");
  const thickness = localStorage.getItem("Thickness");
  const amount = localStorage.getItem("Amount");
  const Price = localStorage.getItem("Price");
  const totalPriceAmount = localStorage.getItem("totalPriceAmount");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuxvzpz",
        "template_6pvzycl",
        form.current,
        "RH_RtvP5d5GB0v-ys"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div id="contactForm">
        <div id="contactFormWrapper">
          <motion.div
            className={formStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 6 } }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <textarea
                value={
                  "Material: " +
                  material +
                  "\n" +
                  "Thickness: " +
                  thickness +
                  "\n" +
                  "Amount: " +
                  amount +
                  "\n" +
                  "Price per one: " +
                  Price +
                  "\n" +
                  "Final Price: " +
                  totalPriceAmount
                }
                className="brutalist-input smooth-type"
                readonly="readonly"
                name="request_data"
              />
              <label className="brutalist-label">Your request</label>
              <div className="brutalist-container">
                <input
                  onKeyDown={handleEnter}
                  placeholder="Your Name"
                  className="brutalist-input smooth-type"
                  type="text"
                  name="user_name"
                  minlength="3"
                  maxlength="20"
                  required
                />
                <label className="brutalist-label">Your Name</label>
              </div>
              <div className="brutalist-container">
                <input
                  onKeyDown={handleEnter}
                  placeholder="Company Name"
                  className="brutalist-input smooth-type"
                  type="text"
                  name="company_name"
                  minlength="3"
                  maxlength="20"
                  required
                />
                <label className="brutalist-label">Company Name</label>
                <div className="brutalist-container">
                  <input
                    onKeyDown={handleEnter}
                    placeholder="Location"
                    className="brutalist-input smooth-type"
                    type="text"
                    name="location_input"
                    minlength="3"
                    maxlength="20"
                    required
                  />
                  <label className="brutalist-label">Location</label>
                </div>
                <div className="brutalist-container">
                  <input
                    onKeyDown={handleEnter}
                    placeholder="Your Email"
                    className="brutalist-input smooth-type"
                    type="email"
                    name="user_email"
                    required
                  />
                  <label className="brutalist-label">Your Email</label>
                  <input
                    id="submitForm"
                    onClick={changeStyle}
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </motion.div>

          <div id="loaderWrapper">
            <div className="loaderThanksText">
              <h1>Dear,</h1>
              <h1> We have successfully received your email.</h1>
              <h1>
                Our team will review it and get back to you as soon as possible.
              </h1>
              <h1>Thank you for your patience and trust. Best regards.</h1>
            </div>
            <motion.div
              className={style}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 6 } }}
            ></motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
