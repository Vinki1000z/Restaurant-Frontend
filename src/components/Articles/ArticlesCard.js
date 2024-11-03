import React from 'react';
import styles from './ArticlesCard.module.css';

const ArticleCard = ({ image, title, description }) => {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.readMoreButton}>Read More</button>
      </div>
    </article>
  );
};

export default ArticleCard;