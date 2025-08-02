// components/GetStartedCTA.tsx
'use client';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './GetStartedCTA.module.css';

const GetStartedCTA: React.FC = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(60px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 18 },
  });

  return (
    <section className={styles.ctaSection}>
      <animated.div style={animation} className={styles.ctaContent}>
        <h2 className={styles.ctaHeading}>Ready to revolutionize your farming?</h2>
        <p className={styles.ctaSubheading}>
          Join thousands of African farmers using AI-powered tools for smarter, more productive agriculture.
        </p>
        <a href="/kilimo-chama" className={styles.ctaButton}>
          Get Started
        </a>
      </animated.div>
    </section>
  );
};

export default GetStartedCTA;
