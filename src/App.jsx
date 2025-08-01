import React from "react";
import HomePage from "./pages/home/HomeComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import "./App.css";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="app-container">
        <HomePage />
      </div>
    </>
  );
}

export default App;
