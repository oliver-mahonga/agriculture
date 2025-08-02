'use client';

import { useSpring, animated } from 'react-spring';
//import { Button } from '@/components/ui/button'; // from shadcn
import Image from 'next/image';
import styles from './HeroSection.module.css';

import { Button } from './ui/button';

const Hero = () => {
  const fadeInText = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
    config: { tension: 120, friction: 20 }
  });

  const fadeInButton = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
    config: { tension: 120, friction: 20 }
  });

  return (
    <div className={styles.heroWrapper}>
      <animated.h1 style={fadeInText} className={styles.heroTitle}>
        Empowering African Farmers with AI
      </animated.h1>

      <animated.p style={fadeInText} className={styles.heroSubtitle}>
        Discover how KilimoX revolutionizes agriculture with real-time diagnosis, weather forecasts, marketplace tools, and more.
      </animated.p>

      <animated.div style={fadeInButton}>
        <Button variant="outline" className={styles.ctaButton} >
          Get Started
        </Button>
      </animated.div>
    </div>
  );
};

export default Hero;
