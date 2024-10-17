import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import "./Loader.css";

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
    if (style !== "loaderHidden") setStyle("loaderHidden");
    else setStyle("loaderVisible");
    if (formStyle !== "brutalist-containerHidden")
      setFormStyle("brutalist-containerHidden");
    else setFormStyle("brutalist-container");
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
            <form>
              <input
                onKeyDown={handleEnter}
                placeholder="Your Name"
                class="brutalist-input smooth-type"
                type="text"
              />
              <label class="brutalist-label">VASE IME</label>
              <div class="brutalist-container">
                <input
                  onKeyDown={handleEnter}
                  placeholder="Company Name"
                  class="brutalist-input smooth-type"
                  type="text"
                />
                <label class="brutalist-label">NAZIV KOMPANIJE</label>
                <div class="brutalist-container">
                  <input
                    onKeyDown={handleEnter}
                    placeholder="Location"
                    class="brutalist-input smooth-type"
                    type="text"
                  />
                  <label class="brutalist-label">Lokacija</label>
                  <button id="submitForm" onClick={changeStyle}>
                    Posalji
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            className={style}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 6 } }}
          >
            <h1 className="loaderThanksText">Hvala Vam na povjerenju!</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
