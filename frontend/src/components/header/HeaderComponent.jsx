import React, { useState } from "react";
import "./HeaderComponent.css";
import logo from "../../assets/firm-logo.png";
import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogoNavigation() {
    navigate("/");
    setIsSidebarOpen(false);
  }

  function handleAreasNavigation() {
    navigate("/");
    setIsSidebarOpen(false);
    setTimeout(() => {
      const workingAreasSection = document.querySelector(
        ".working-areas-container"
      );
      if (workingAreasSection) {
        const yOffset = -100;
        const y =
          workingAreasSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <a href="https://api.whatsapp.com/send?phone=5511974481602">(11) 97448-1602</a>
        </div>
        <div className="header-content">
          <img
            onClick={handleLogoNavigation}
            src={logo}
            alt="Moura Pereira Advogados Logo"
            className="header-logo"
          />
          <div className="header-quick-access">
            <Link to="/" className="header-link">
              HOME
            </Link>
            <button
              onClick={handleAreasNavigation}
              className="header-link areas-button"
            >
              ÁREAS
            </button>
            <Link to="/blog" className="header-link">
              POSTS
            </Link>
          </div>
          <button
            className="hamburger-menu"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <span
              className={`hamburger-line ${isSidebarOpen ? "active" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isSidebarOpen ? "active" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isSidebarOpen ? "active" : ""}`}
            ></span>
          </button>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-content">
          <button
            className="sidebar-close"
            onClick={() => setIsSidebarOpen(false)}
          >
            x
          </button>
          <nav className="sidebar-nav">
            <button
              onClick={() => handleNavigation("/")}
              className="sidebar-link"
            >
              HOME
            </button>
            <button onClick={handleAreasNavigation} className="sidebar-link">
              ÁREAS
            </button>
            <button
              onClick={() => handleNavigation("/blog")}
              className="sidebar-link"
            >
              POSTS
            </button>
          </nav>
        </div>
      </div>
        {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default HeaderComponent;
