import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import { usePageContext } from "./contexts/PageContext";
import ScrollToTop from "./helpers/ScrollToTop";

import Footer from "./ui/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./ui/Navbar";
import Location from "./pages/Location";

function App() {
  const { pageTitle, setPageTitle } = usePageContext();
  const contentRef = useRef(null);

  useEffect(() => {
    document.title = `Restaurant | ${pageTitle}`;
  }, [pageTitle]);

  return (
    <div className="container">
      <div className="content" ref={contentRef}>
        <ScrollToTop contentRef={contentRef} />
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
