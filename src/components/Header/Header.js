import React from "react";
import styles from "./Header.module.css";
import MobileGroup from "../Images/Group 329.png";
import Group from "../Images/mainHeader.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.leftColumnContent}>
            <img
              data-aos="fade-in"
              data-aos-delay="50"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0858748bc25a9b4ac9a117bd2cd87d2b5340b7b0b6f416ab9834e4dc9b17aa0a?placeholderIfAbsent=true&apiKey=e09fb5b08d9f4994b2eb3fe94389b65e"
              className={styles.logo}
              alt="Company Logo"
            />
            <h1
              data-aos="fade-right"
              data-aos-delay="50"
              className={styles.title}
            >
              Discover the <br />
              <span className={styles.highlight}>Best</span> Food and Drinks
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="50"
              className={styles.description}
            >
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button
              data-aos="fade-right"
              data-aos-delay="50"
              className={styles.exploreButton}
            >
              Explore Now!
            </button>
          </div>
        </div>

        <img
          loading="lazy"
          data-aos="fade-up"
          data-aos-delay="50"
          src={Group}
          className={styles.backgroundImage}
          alt="Background"
        />
        <img
          loading="lazy"
          src={MobileGroup}
            data-aos="fade-in"
          data-aos-delay="50"
          className={styles.MobilebackgroundImage}
          alt="Background"
        />
        <button    data-aos="fade-up"
          data-aos-delay="50"className={styles.button}>Get In Touch</button>
      </div>
    </header>
  );
};

export default Header;
