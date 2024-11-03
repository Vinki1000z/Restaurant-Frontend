import React, { useState, useEffect } from 'react';
import styles from './Articles.module.css';
import ArticleCard from './ArticlesCard';
import Prev from '../Images/prev.png';
import Next from '../Images/next.png';
import T1 from '../Images/t1.png';
import T2 from '../Images/t2.png';
import T3 from '../Images/t3.png';
import T4 from '../Images/t4.png';
import T5 from '../Images/t5.png';
import T6 from '../Images/t6.png';

const articles = [
  { image: T1, title: "Grilled Tomatoes at Home", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { image: T2, title: "Snacks for Travel", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { image: T3, title: "Post-workout Recipes", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { image: T4, title: "How To Grill Corn", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { image: T5, title: "Crunchwrap Supreme", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { image: T6, title: "Broccoli Cheese Soup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
];

const Articles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articlesPerSlide, setArticlesPerSlide] = useState(3);

  const updateArticlesPerSlide = () => {
    const width = window.innerWidth;
    if (width > 991) {
      setArticlesPerSlide(3);
    } else if (width > 600) {
      setArticlesPerSlide(2);
    } else {
      setArticlesPerSlide(1);
    }
  };

  useEffect(() => {
    updateArticlesPerSlide();
    window.addEventListener('resize', updateArticlesPerSlide);
    return () => {
      window.removeEventListener('resize', updateArticlesPerSlide);
    };
  }, []);

  // Reset currentSlide when articlesPerSlide changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [articlesPerSlide]);

  const handleNext = () => {
    if (currentSlide < Math.ceil(articles.length / articlesPerSlide) - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title} data-aos="fade-up"
          data-aos-delay="50">Latest Articles</h2>
        <div className={styles.articleGrid}>
          <div   data-aos="fade-up"
          data-aos-delay="50"
            className={styles.articleList}
            style={{ 
              transform: `translateX(-${currentSlide * (100 / Math.ceil(articles.length / articlesPerSlide))}%)`,
              width: `${100 * Math.ceil(articles.length / articlesPerSlide)}%`
            }}
          >
            {articles.map((article, index) => (
              <ArticleCard
                key={index} 
                {...article}
                style={{
                  width: `${100 / articles.length}%`
                }}
              />
            ))}
          </div>
        </div>
        <nav className={styles.pagination} aria-label="Pagination"   data-aos="fade-up"
          data-aos-delay="50">
          <button 
            className={styles.paginationButton} 
            onClick={handlePrev} 
            aria-label="Previous page" 
            disabled={currentSlide === 0}
          >
            <img loading="lazy" src={Prev} alt="Previous" />
          </button>
          <span aria-current="page">
            {currentSlide + 1}/{Math.ceil(articles.length / articlesPerSlide)}
          </span>
          <button 
            className={styles.paginationButton} 
            onClick={handleNext} 
            aria-label="Next page" 
            disabled={currentSlide === Math.ceil(articles.length / articlesPerSlide) - 1}
          >
            <img loading="lazy" src={Next} alt="Next" />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Articles;
