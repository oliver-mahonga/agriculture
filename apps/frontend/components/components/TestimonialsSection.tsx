'use client';

import React from 'react';
import styles from './TestimonialsSection.module.css';
import { useSpring, animated } from '@react-spring/web';

const testimonials = [
  {
    name: 'Grace Mwangi',
    role: 'Maize Farmer, Eldoret',
    avatar: '/lil.png',
    quote:
      'Since joining KilimoX, my savings have grown and I now get accurate crop diagnoses instantly. The AI assistant is like having an agronomist in my pocket.',
  },
  {
    name: 'Peter Otieno',
    role: 'Rice Farmer, Kisumu',
    avatar: '/lil.png',
    quote:
      'This platform changed everything. I no longer worry about fake pesticides or bad weather — I check the app and make informed decisions every day.',
  },
  {
    name: 'Amina Yusuf',
    role: 'Chama Leader, Garissa',
    avatar: '/lil.png',
    quote:
      'Running our chama digitally with KilimoX is the best decision we’ve made. Transparent contributions, automated reports, and zero confusion.',
  },
];

const TestimonialsSection = () => {
  const animation = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 20 },
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <animated.h2 className={styles.heading} style={animation}>
          What Farmers Say
        </animated.h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <animated.div key={i} className={styles.card} style={animation}>
              <div className={styles.avatar}>
                <img src={t.avatar} alt={t.name} />
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.role}>{t.role}</div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
