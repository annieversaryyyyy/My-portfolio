import React from "react";
import "./Contacts.scss";
import qrLinkedin from "../../assets/qrLinkedin.jpeg";
import qrTelegram from "../../assets/qrTelegram.jpg";

const Contacts = () => {
  return (
    <section id="contacts">
    <div className="contactsContainer">
      <h1 className="contactsTitle">Контакты</h1>
  
      <div className="qr">
        <div className="qrItem">
          <img
            className="qrImage"
            src={qrLinkedin}
            alt="LinkedIn QR"
          />
          <a
            href="https://www.linkedin.com/in/anna-somik-aa8747232"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
  
        <div className="qrItem">
          <img
            className="qrImage"
            src={qrTelegram}
            alt="Telegram QR"
          />
          <a
            href="https://t.me/thenightstalker6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Contacts;
