import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import HomePage from "./ui/HomePage";
import Navbar from "./ui/Navbar";
import Location from "./pages/Location";
import { usePageContext } from "./contexts/PageContext";

function App() {
  const { pageTitle, setPageTitle } = usePageContext();
  useEffect(() => {
    document.title = `Restaurant | ${pageTitle}`;
  }, [pageTitle]);

  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hours-location" element={<Location />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
