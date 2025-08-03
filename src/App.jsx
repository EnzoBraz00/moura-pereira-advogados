import React from "react";
import HomePage from "./pages/home/HomeComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
  return (
    <div className="main-layout">
      <HeaderComponent />
      <div className="app-container">
        <HomePage />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
