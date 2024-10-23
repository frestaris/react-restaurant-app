import React, { useEffect, useState } from "react";
import "./Location.css";
import Carousel from "../helpers/Carousel";
import locationPic1 from "../assets/location-pic-1.webp";
import locationPic2 from "../assets/location-pic-2.webp";
import locationPic3 from "../assets/location-pic-3.webp";
import { Link } from "react-router-dom";
import { usePageContext } from "../contexts/PageContext";

const locationImages = [locationPic1, locationPic2, locationPic3];

function Location() {
  const { setPageTitle, scrollToTop } = usePageContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPageTitle("Hours & Location");
    scrollToTop();
    checkOpenStatus();
  }, [setPageTitle, scrollToTop]);

  const checkOpenStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();

    const openingHour = 7;
    const closingHour = 15;

    if (currentHour >= openingHour && currentHour < closingHour) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Carousel images={locationImages} intervalTime={4000} />
      <h1 className="location-title">HOURS & LOCATION</h1>

      <div className="location-address">
        <Link to="https://www.google.com/maps/place/70%C2%B003'33.6%22S+96%C2%B012'06.8%22E/@-70.059323,96.1993071,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-70.059323!4d96.201882?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">
          <p>1234 56th St,</p> <p>Nowhere, WA 82394</p>
        </Link>
        <p className="location-phone">+12 345 56789</p>
      </div>
      <p className="location-opening-info">OPEN EVERY DAY OF THE WEEK!</p>
      <p className="location-opening-time">7am - 3pm</p>
      <p className="location-opening-info">
        {isOpen ? "OPEN NOW" : "CLOSED NOW"}
      </p>
      <p className="location-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        debitis delectus fugiat necessitatibus ex quod ullam, ipsa totam
        possimus dolores quasi ea quaerat eos consectetur quisquam a distinctio
        corporis non. Quidem iure harum accusantium nisi expedita provident
        fugiat ut quibusdam accusamus? Debitis ipsam aut facere explicabo velit
        reprehenderit officia, minima porro possimus? Doloremque distinctio
        quidem delectus, obcaecati unde eius tenetur! Voluptas quasi amet
        repellendus dolor, qui dolores labore at, nulla quas soluta numquam
        necessitatibus magni ullam porro omnis illum. Adipisci quasi ullam unde,
        excepturi tenetur necessitatibus? Assumenda facere ipsa et.
      </p>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833734.8101727532!2d151.17842942139904!3d-26.14740750785061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bebb934388f9ea5%3A0xfa1132979c9fcf05!2sH20%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sau!4v1729430615373!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
