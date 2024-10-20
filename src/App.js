import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import HomePage from "./ui/HomePage";
import Navbar from "./ui/Navbar";
// import FeaturesPage from "./ui/FeaturesPage";
// import PricingPage from "./ui/PricingPage";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
