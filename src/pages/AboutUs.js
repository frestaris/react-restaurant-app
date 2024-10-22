import React, { useEffect } from "react";
import { usePageContext } from "../contexts/PageContext";
import Carousel from "../helpers/Carousel";
import ourStoryPic1 from "../assets/our-story1.webp";
import ourStoryPic2 from "../assets/our-story2.webp";
import ourStoryPic3 from "../assets/our-story3.webp";
import ourStoryPic4 from "../assets/our-story4.webp";
import crew1 from "../assets/crew/crew-pic1.webp";
import crew2 from "../assets/crew/crew-pic2.webp";
import crew3 from "../assets/crew/crew-pic3.webp";
import crew4 from "../assets/crew/crew-pic4.webp";
import crew5 from "../assets/crew/crew-pic5.webp";
import crew6 from "../assets/crew/crew-pic6.webp";
import crew7 from "../assets/crew/crew-pic7.webp";
import crew8 from "../assets/crew/crew-pic8.webp";

import "./AboutUs.css";
import Testimonials from "../helpers/Testimonials";

const locationImages = [ourStoryPic1, ourStoryPic2, ourStoryPic3, ourStoryPic4];

function AboutUs() {
  const { setPageTitle, scrollToTop } = usePageContext();

  useEffect(() => {
    setPageTitle("About Us");
    scrollToTop();
  }, [setPageTitle, scrollToTop]);

  return (
    <section className="about-us">
      <div className="carousel-container">
        <Carousel images={locationImages} intervalTime={4000} />
        <h1 className="carousel-heading">Our Story</h1>
      </div>

      <p className="about-us-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        obcaecati perferendis, vel quibusdam sit et optio sapiente, laudantium
        itaque repellendus tenetur consectetur? Consectetur perspiciatis animi
        consequatur in eius, a ut. Sequi aspernatur, ipsum dolorem dicta nemo
        cumque excepturi iste dolore ea exercitationem unde alias consectetur
        totam mollitia? Numquam porro, nihil necessitatibus, cum repellat
        dolorum, dolore possimus animi fugit quasi provident.
      </p>

      <h2 className="chef-title">Our Chefs</h2>
      <div className="crew-grid">
        <div className="crew-box">
          <img src={crew1} alt="Crew member 1" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew2} alt="Crew member 2" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew3} alt="Crew member 3" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew4} alt="Crew member 4" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew5} alt="Crew member 5" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew6} alt="Crew member 6" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew7} alt="Crew member 7" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
        <div className="crew-box">
          <img src={crew8} alt="Crew member 8" />
          <div className="crew-box-content">
            <p>Name</p>
            <span>"Catchphrase"</span>
          </div>
        </div>
      </div>

      <Testimonials />
    </section>
  );
}

export default AboutUs;
