import { Link } from "react-router-dom";
import "./Footer.css";
import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import pinterestIcon from "../assets/pinterest-icon.png";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="https://www.facebook.com/">
            <img
              className="social-media-icon"
              src={facebookIcon}
              alt="Facebook icon"
            />
          </Link>
        </li>
        <li>
          <Link to="https://x.com/">
            <img
              className="social-media-icon"
              src={twitterIcon}
              alt="Twitter icon"
            />
          </Link>
        </li>

        <li>
          <Link to="https://www.instagram.com/">
            <img
              className="social-media-icon"
              src={instagramIcon}
              alt="Instagram icon"
            />
          </Link>
        </li>
        <li>
          <Link to="https://au.pinterest.com/">
            <img
              className="social-media-icon"
              src={pinterestIcon}
              alt="Pinterest icon"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
