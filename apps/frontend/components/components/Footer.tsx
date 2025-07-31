// components/Footer.tsx

import React from 'react';
import styles from './Footer.module.css';
import { Facebook, Twitter, Instagram, Mail, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brand}>
          <Leaf size={28} color="orange" />
          <h3>KilimoX</h3>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">AI Diagnosis</a></li>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Weather</a></li>
              <li><a href="#">Savings</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.subscribe}>
          <h4>Stay Updated</h4>
          <p>Subscribe to get the latest news and offers</p>
          <form className={styles.form}>
            <input type="email" placeholder="Your email" />
            <button type="submit"><Mail size={18} /> Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} KilimoX. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#"><Facebook color="orange" size={20} /></a>
          <a href="#"><Twitter color="orange" size={20} /></a>
          <a href="#"><Instagram color="orange" size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
