import React from "react";
import "./App.css";
import header from "./img/header.jpg";
import avatar from "./img/avatar.jpg";

const Header = () => {
  return (
    <div className="content">
      <header>
        <img className="header-img" src={header} alt="programação"></img>
      </header>

      <section>
        <img className="avatar-img" src={avatar} alt="foto-avatar"></img>
        <h1>Diego Augusto</h1>
        <h2>Front-end developer</h2>
      </section>
    </div>
  );
};

export default Header;
