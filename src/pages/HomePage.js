import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";
import { Link } from "react-router-dom";

import "./HomePage.css";

import Button from "../helpers/Button";

import logoPic from "../assets/hero-pic.png";
import menuPic1 from "../assets/menu-icon-homepage-Copy.webp";
import menuPic2 from "../assets/happenings-icon.jpg";
import bottomPic from "../assets/bottom-icon.jpg";

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
        <img src={menuPic1} alt="menu-pic" />
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
      <div className="mid-section">
        <div className="boxes">
          <Link to="/hours-location" style={{ textDecoration: "none" }}>
            <div className="box">THE TIME AND THE PLACE</div>
          </Link>
          <Link to="/b" style={{ textDecoration: "none" }}>
            <div className="box">HEY HUNGRY PEOPLE</div>
          </Link>
          <Link to="/c" style={{ textDecoration: "none" }}>
            <div className="box">HEY HUNGRY PEOPLE</div>
          </Link>
        </div>
        <div className="mid-section-text">
          Welcome to The OG, nestled in the vibrant heart of McGregor Square, a
          stone's throw away from the iconic Coors Field. As one of Denver's top
          brunch destinations we're delighted to offer a unique twist on the
          classics and innovative dishes, perfectly paired with our signature
          mimosas and local coffee.
        </div>
        <div className="menu-mid-section">
          <div className="menu-mid-description-box">
            <h3>Happenings</h3>
            Stay tuned to our website and social media for the latest happenings
            and exclusive events at The OG, the heart of Denver's dynamic brunch
            and dining scene. Indulge in our themed brunches, relish our monthly
            specials, and join us in giving back to the community. There’s
            always something new and exciting to look forward to. Whether you’re
            a local foodie or a visitor exploring the wonders of Denver, our
            doors are always open, inviting you to a place where every brunch is
            not just a meal, but an OG experience. Don’t miss out – book your
            table today and follow us on Instagram for daily inspirations and
            surprises!
            <Button to="/menus">View happenings</Button>
          </div>
          <img src={menuPic2} alt="menu-pic" />
        </div>
        <img className="bottom-pic" src={bottomPic} alt={bottomPic} />
      </div>
      <Button to="/sign-up">subscribe</Button>
    </section>
  );
}

export default HomePage;
