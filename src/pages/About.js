import React from "react";
import "./About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <section id="aboutCompanyWrapper">
        <section id="aboutCompany">
          <h1>
            iRONMARK je preduzeće sa sedištem u Bosni i Hercegovini, koje
            posluje širom sveta i nudi proizvode dostupne na globalnom tržištu.
            Naša posvećenost perfekcionizmu i zadovoljstvu klijenata ogleda se u
            svakom aspektu našeg rada, od izbora vrhunskih materijala do
            precizne obrade svakog proizvoda.
          </h1>
          <h1>
            Nudimo isključivo proizvode najvišeg kvaliteta, obrađene savremenim
            tehnologijama. Koristimo moderne mašine, uključujući fiber lasere za
            graviranje, sečenje, obradu i druge složene procese, čime postižemo
            izuzetnu preciznost i vrhunski završni kvalitet.
          </h1>
          <h1>
            Naš tim kontinuirano unapređuje usluge kako bi odgovorio na potrebe
            i očekivanja klijenata. Rastući kroz stalno prilagođavanje tržišnim
            trendovima i zahtevima, širimo naše usluge s ciljem da svakom
            korisniku pružimo jedinstveno iskustvo vrhunskog kvaliteta.
          </h1>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default About;
