'use client';

import React from 'react';
import styles from './HowItWorksSection.module.css';
import { useSpring, animated } from '@react-spring/web';
import { Rocket, BrainCog, Handshake, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: <Rocket size={44} color="#ff6600" />,
    title: 'Get Started',
    description: 'Sign up in minutes and join the farming revolution.',
  },
  {
    icon: <Handshake size={44} color="#ff6600" />,
    title: 'Connect & Save',
    description: 'Join or form chamas to save, borrow, and grow together.',
  },
  {
    icon: <BrainCog size={44} color="#ff6600" />,
    title: 'Use AI Tools',
    description: 'Diagnose crops, forecast weather, and get smart insights.',
  },
  {
    icon: <BadgeCheck size={44} color="#ff6600" />,
    title: 'Grow Financially',
    description: 'Track goals, manage finances, and scale your success.',
  },
];

const HowItWorksSection = () => {
  const animation = useSpring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { tension: 130, friction: 18 },
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <animated.h2 style={animation} className={styles.heading}>
          How It Works
        </animated.h2>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <animated.div key={index} className={styles.card} style={animation}>
              <div className={styles.icon}>{step.icon}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
