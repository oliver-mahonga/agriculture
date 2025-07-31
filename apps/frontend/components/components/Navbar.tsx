"use client";

import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.navbar}>
      {/* Top Row: Brand | Top Links | Button */}
      <div className={styles.topRow}>
        <div className={styles.brand}>KilimoX</div>

        <div className={styles.topLinks}>
          <a href="#home" className={`${styles.navLink} ${isActive("#home") ? styles.active : ""}`}>Home</a>
          <a href="#about" className={`${styles.navLink} ${isActive("#about") ? styles.active : ""}`}>About</a>
          <a href="#impact" className={`${styles.navLink} ${isActive("#impact") ? styles.active : ""}`}>Impact</a>
          <a href="#contact" className={`${styles.navLink} ${isActive("#contact") ? styles.active : ""}`}>Contact</a>
        </div>

        <button className={styles.offlineButton}>Offline Access</button>
      </div>

      {/* Bottom Row: Feature Links */}
      <div className={styles.bottomLinks}>
        <a href="#ai-diagnosis" className={`${styles.navLink} ${isActive("#ai-diagnosis") ? styles.active : ""}`}>AI Diagnosis</a>
        <a href="#ivr" className={`${styles.navLink} ${isActive("#ivr") ? styles.active : ""}`}>IVR Assistant</a>
        <a href="#marketplace" className={`${styles.navLink} ${isActive("#marketplace") ? styles.active : ""}`}>Marketplace</a>
        <a href="#weather" className={`${styles.navLink} ${isActive("#weather") ? styles.active : ""}`}>Weather</a>
        <a href="#chama" className={`${styles.navLink} ${isActive("#chama") ? styles.active : ""}`}>Chama Savings</a>
        <a href="#dashboard" className={`${styles.navLink} ${isActive("#dashboard") ? styles.active : ""}`}>Dashboard</a>
      </div>
    </nav>
  );
}
