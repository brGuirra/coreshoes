import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { slideData } from './slideData';

import styles from './styles.module.scss';

export const Slide = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { length } = slideData;

  const prevSlide = (): void => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const nextSlide = (): void => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section className={styles.slideContainer}>
      <IoIosArrowBack className={styles.leftArrow} onClick={prevSlide} />
      <IoIosArrowForward className={styles.rightArrow} onClick={nextSlide} />
      {slideData.map((slide, index) => (
        <div
          className={
            index === currentSlide
              ? `${styles.slide} ${styles.active}`
              : styles.slide
          }
          key={slide.title}
        >
          {index === currentSlide && (
            <>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.slideImage}
              />
            </>
          )}
        </div>
      ))}
    </section>
  );
};
