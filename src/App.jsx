import React from "react";
import HomePage from "./pages/home/HomeComponent";
import BlogPage from "./pages/blog/BlogComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="main-layout">
      <HeaderComponent />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
        </Routes>
      </div>
      <FooterComponent />
    </div>
    </BrowserRouter>
  );
}

export default App;
