import { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";
import { Link } from "react-router-dom";

import "./HomePage.css";

import Button from "../helpers/Button";

import logoPic from "../assets/icons-logo/hero-pic.png";
import menuPic1 from "../assets/icons-logo/menu-icon-homepage-Copy.webp";
import menuPic2 from "../assets/icons-logo/happenings-icon.webp";
import bottomPic from "../assets/icons-logo/bottom-icon.webp";

function HomePage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
    <section className="hero">
      <div className="top-section">
        <h1>RESTAURANT</h1>
        <img src={logoPic} alt="header-pic" className="header-pic" />
      </div>
      <div className="menu-section">
        <img src={menuPic1} alt="menu-pic" />
        <div className="menu-description-box">
          <h3>OUR MENUS</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sed nemo culpa rerum blanditiis necessitatibus corrupti. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ullam libero enim
          dolorem, beatae distinctio esse in expedita possimus nam id cum
          nesciunt a eum, illo magni, odit aspernatur placeat quibusdam.
          <Button type="normal" to="/menus">
            View Menu
          </Button>
        </div>
      </div>
      <div className="mid-section">
        <div className="boxes">
          <Link to="/hours-location" style={{ textDecoration: "none" }}>
            <div className="box">THE TIME AND THE PLACE</div>
          </Link>
          <Link to="/menus" style={{ textDecoration: "none" }}>
            <div className="box">HEY HUNGRY PEOPLE</div>
          </Link>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <div className="box">GET TO KNOW US</div>
          </Link>
        </div>
        <div className="mid-section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi
          eos, omnis cupiditate facere voluptatem provident dignissimos
          temporibus quisquam laborum dicta earum, magni amet aut blanditiis
          enim. Maiores, ea tempore.
        </div>
        <div className="menu-mid-section">
          <div className="menu-mid-description-box">
            <h3>Happenings</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            voluptate illo! Sapiente, expedita ipsam! Tempore, repellendus.
            Voluptatem totam numquam, rerum est libero commodi sit fugit nihil
            assumenda velit fugiat eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel consectetur corporis a labore accusantium
            adipisci sit, deserunt quia non illum praesentium similique error
            blanditiis excepturi placeat aspernatur velit ea ad.
            <Button type="normal" to="/menus">
              View happenings
            </Button>
          </div>
          <img src={menuPic2} alt="menu-pic" />
        </div>
        <img className="bottom-pic" src={bottomPic} alt={bottomPic} />
      </div>
      <Button type="normal" to="/sign-up">
        subscribe
      </Button>
    </section>
  );
}

export default HomePage;
