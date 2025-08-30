import React from "react";
import HomePage from "./pages/home/HomeComponent";
import BlogPage from "./pages/blog/BlogComponent";
import BlogDetailPage from "./pages/blog-opened/BlogPostDetail";
import WorkingAreaPage from "./pages/working-areas/WorkingAreasDetailsComponent";
import LoginPage from "./pages/login/LoginComponent";
import AdminPage from "./pages/admin-area/AdminAreaComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import ProtectedRoute from "./components/auth/ProtectedRoute"
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <HeaderComponent />
        <ScrollToTop />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route
              path="/areas-de-atuacao/:slug"
              element={<WorkingAreaPage />}
            />

            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/area-restrita"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            ></Route>

          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
