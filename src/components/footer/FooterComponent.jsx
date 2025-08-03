import React from "react";
import "./FooterComponent.css";
import AdressIcon from "../../assets/Location.svg";

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="adress">
          <img src={AdressIcon} alt="Address Icon" />
          <a href="https://maps.app.goo.gl/2M7uFKg2KkAiDHEW9"> Alameda Santos, 2.159 - Cerqueira César - SP - 15º andar</a>
        </div>
        <div className="adress">
          <img src={AdressIcon} alt="Address Icon" />
          <a href="https://goo.gl/maps/WQFM4buLRncPZbaC9">Avenida dos Autonomistas, 896 - Vila Yara - Osasco/SP</a>
        </div>
      </div>
      <p>Copyright © 2025 Moura Pereira | Todos os Direitos Reservados</p>
    </div>
  );
};

export default FooterComponent;
