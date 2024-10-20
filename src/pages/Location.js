import React from "react";
import "./Location.css";
import Carousel from "../helpers/Carousel";
import locationPic1 from "../assets/location-pic-1.jpg";
import locationPic2 from "../assets/location-pic-2.jpg";
import locationPic3 from "../assets/location-pic-3.jpg";
import { Link } from "react-router-dom";

const locationImages = [locationPic1, locationPic2, locationPic3];

function Location() {
  return (
    <div>
      <Carousel images={locationImages} intervalTime={4000} />
      <h1 className="location-title">HOURS & LOCATION</h1>

      <div className="location-address">
        <Link to="https://www.google.com/maps/place/70%C2%B003'33.6%22S+96%C2%B012'06.8%22E/@-70.059323,96.1993071,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-70.059323!4d96.201882?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">
          <p>1234 56th St,</p> <p>Nowhere,WA 82394</p>
        </Link>
      </div>
      <p className="location-opening-info">OPEN EVERY DAY OF THE WEEK!</p>
      <p className="location-opening-time">
        7am - 3pm(dinamically add if we open or not according to the time)
      </p>
      <p className="location-description">
        Located in the heart of Nowhere's bustling McGregor Square, The
        Original, fondly known by locals as "The OG," redefines the brunch
        experience. Renowned as a premier brunch destination in Nowhere, The OG
        excels in crafting exquisite breakfast, lunch and brunch dishes. As a
        celebrated brunch spot near Coors Field, we pride ourselves on being
        pioneers in the culinary scene, offering an unforgettable dining
        experience. Whether you're seeking the best brunch in Nowhere, a
        delightful breakfast near Coors Field, or a lunch spot that combines
        innovation with classic flavors, The OG stands as your go-to
        destination. Join us at The OG, where every dish is a testament to our
        passion for exceptional brunch experiences.
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
