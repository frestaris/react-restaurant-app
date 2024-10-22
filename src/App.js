import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { usePageContext } from "./contexts/PageContext";
import ScrollToTop from "./helpers/ScrollToTop";

import Footer from "./ui/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./ui/Navbar";
import Location from "./pages/Location";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import CartOverview from "./pages/CartOverview";
import CreateOrder from "./pages/CreateOrder";
import OrderReview from "./pages/OrderReview";

function App() {
  const { pageTitle } = usePageContext();
  const contentRef = useRef(null);
  const location = useLocation();

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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menus" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<CreateOrder />} />
          <Route path="/order/review" element={<OrderReview />} />
        </Routes>
        {location.pathname !== "/cart" &&
          location.pathname !== "/order/review" &&
          location.pathname !== "/order/new" && <CartOverview />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
