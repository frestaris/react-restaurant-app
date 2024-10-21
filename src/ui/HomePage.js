import { useEffect } from "react";
import logoPic from "../assets/hero-pic.png";
import menuPic from "../assets/menu-icon-homepage-Copy.webp";
import Button from "../helpers/Button";
import "./HomePage.css";
import { usePageContext } from "../contexts/PageContext";

function HomePage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
    <section className="hero">
      <div className="top-section">
        <h1>RESTAURANT NAME</h1>
        <img src={logoPic} alt="header-pic" className="header-pic" />
      </div>
      <div className="menu-section">
        <img src={menuPic} alt="menu-pic" />
        <div className="menu-description-box">
          <h3>OUR MENUS</h3>
          The Restaurant is where culinary innovation meets the timeless charm
          of breakfast and lunch classics. Our menu, a treasure trove of gourmet
          pancakes, artisanal breakfast cocktails, and the best mimosas in
          Denver, promises an unrivaled dining experience. <br /> Savor the
          flavors of Denver from decadent French toast to savory benedicts, each
          dish at The Restaurant is crafted to perfection, making us the go-to
          spot for weekend brunch in Denver. Whether you're indulging in a
          family-friendly brunch or seeking the perfect brunch spot for a lazy
          Sunday, The Restaurant's unique menu caters to all.
          <Button to="/menus">View Menu</Button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
