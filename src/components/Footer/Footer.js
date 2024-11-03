import React from "react";
import styles from "./Footer.module.css";
import Insta from "../Images/insta.png";
import Fb from "../Images/fb.png";
import Tw from "../Images/twitter.png";
const Footer = () => {
  const links = ["About Us", "Products", "Career", "Contact Us"];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img
          data-aos="fade-up"
          data-aos-delay="50"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9a6252f3ba042ae722aa78194f97d6b23a1cb62332b3b3332a4181452928cd?placeholderIfAbsent=true&apiKey=621a9be51e55481592185121250bd32e"
          className={styles.logo}
          alt="Company Logo"
        />
        <div className={styles.contactInfo}   data-aos="fade-up"
          data-aos-delay="50">
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <address className={styles.address}>
            Lorem Ipsum Pvt Ltd.5/1, Magalton
            <br /> Road, Phartosh Gate near YTM <br /> Market, XYZ-343434
          </address>
          <a href="mailto:example2020@gmail.com" className={styles.email}>
            example2020@gmail.com
          </a>
          <a href="tel:9044430343" className={styles.phone}>
            (904) 443-0343
          </a>
        </div>
        <nav className={styles.links}   data-aos="fade-up"
          data-aos-delay="50">
          <h2 className={styles.sectionTitle}>More</h2>
          {links.map((link, index) => (
            <a key={index} href="/" className={styles.link}>
              {link}
            </a>
          ))}
        </nav>
        <div className={styles.socialLinks}   data-aos="fade-up"
          data-aos-delay="50">
          <h2 className={styles.sectionTitle}>Social Links</h2>
          {/* Add social media icons/links here */}
          <div
            className="SocialMediaIcon"
            style={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              cursor:'pointer'
            }}
          >
            <img loading="lazy" src={Insta} alt="Insta" />
            <img loading="lazy" src={Tw} alt="Twitter" />
            <img loading="lazy" src={Fb} alt="Facebook" />
          </div>
          <p className={styles.copyright}>© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
