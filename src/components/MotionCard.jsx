import { useEffect, useState } from 'react';
import styles from '../styles/MotionCard.module.css';

const MotionCard = ({ title, description, direction, delay, dimensions = '1x1', type = 'card', mobile = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransformClass = () => {
    if (isVisible) return styles.cardWrapperVisible;
    
    if (direction === 'none') {
      return styles.cardWrapperFadeHidden;
    }

    switch (direction) {
      case 'up':
        return styles.cardWrapperUp;
      case 'down':
        return styles.cardWrapperDown;
      case 'left':
        return styles.cardWrapperLeft;
      case 'right':
        return styles.cardWrapperRight;
      default:
        return styles.cardWrapperDefault;
    }
  };

  const getDimensionClass = () => {
    return styles[`size${dimensions.replace('x', 'by')}`] || styles.size1by1;
  };

  return (
    <div className={`${delay > 0 ? styles.cardWrapper : styles.cardWrapperCenter} ${getTransformClass()} ${getDimensionClass()}`}>
      <div className={styles.card} style={type === 'text' ? { textAlign: mobile ? 'center' : 'left'} : {}}>
        <div className={styles.cardContent}>
          {type !== 'logo' && (
            direction === 'none' ? (
              <h3 className={styles.mainCardTitle}>{title}</h3>
            ) : (
              <h3 className={styles.cardTitle}>{title}</h3>
            )
          )}

          {type === 'logo' ? (
            <>
              <img
                className={styles.logoImage}
                src={`${process.env.PUBLIC_URL}/K_Logo.png`}
                alt="K Logo"
              />
              {description.map((desc, i) => (
                <p key={i} className={styles.cardDescription}>{desc}</p>
              ))}
            </>
          ) : direction === 'none' ? 
            <p 
              className={styles.mainCardDescription} 
            >
              {description[0]}
            </p>
            :
          <>
            {description.map((desc, i) => <p key={i} className={styles.cardDescription}>{desc}</p>)}
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default MotionCard;