import React from 'react';
import styles from './About.module.css';
import AboutImg from '../Images/about.png'
const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <img 
            loading="lazy"
            src={AboutImg} 
            alt="About Us" 
            className={styles.aboutImage} 
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.textContent}>
            <h2 className={styles.aboutUsTitle}>About Us</h2>
            <p className={styles.aboutUsDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries.
            </p>
            <button className={styles.readMoreButton}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;