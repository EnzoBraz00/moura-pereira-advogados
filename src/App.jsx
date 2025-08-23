import React from "react";
import HomePage from "./pages/home/HomeComponent";
import BlogPage from "./pages/blog/BlogComponent";
import WorkingAreaPage  from "./pages/working-areas/WorkingAreasDetailsComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <div className="main-layout">
      <HeaderComponent />
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/areas-de-atuacao/:slug" element={<WorkingAreaPage/>}/>
        </Routes>
      </div>
      <FooterComponent />
    </div>
    </BrowserRouter>  
  );
}

export default App;
