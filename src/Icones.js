import React from "react";
import "./App.css";
import whatsapp from "./img/whatsapp.png";
import phone from "./img/phone.png";
import email from "./img/email.png";

const Icones = () => {
  return (
    
      
        <div className="icones">
          <a href="https://wa.me/81999792282" className="icon">
            <img className="images" src={whatsapp} alt="whatsapp"></img>
            <span className="text">Whatsapp</span>
          </a>

          <a href="tel:8199792282" className="icon">
            <img className="images" src={phone} alt="phone"></img>
            <span className="text">Phone</span>
          </a>

          <a href="mailto:DiegoprogBr@hotmail.com" className="icon">
            <img className="images" src={email} alt="email"></img>
            <span className="text">Email</span>
          </a>
        </div>
      
    
  );
};

export default Icones;
