"use client";

import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.navbar}>
      <div className={styles.topRow}>
        <div className={styles.brand}>KilimoX</div>

        <div className={styles.topLinks}>
          <a href="/" className={`${styles.navLink} ${isActive("#home") ? styles.active : ""}`}>Home</a>
          <a href="/#" className={`${styles.navLink} ${isActive("#about") ? styles.active : ""}`}>About</a>
          <a href="voice-assistant" className={`${styles.navLink} ${isActive("#voice assistant") ? styles.active : ""}`}>voice assistant</a>
          <a href="/#Footer" className={`${styles.navLink} ${isActive("#contact") ? styles.active : ""}`}>Contact</a>
        </div>

        <button className={styles.offlineButton}>Offline Access</button>
      </div>
      <div className={styles.bottomLinks}>
        <a href="crop-diagnosis" className={`${styles.navLink} ${isActive("#ai-diagnosis") ? styles.active : ""}`}>AI Diagnosis</a>
       
        <a href="marketplace" className={`${styles.navLink} ${isActive("#marketplace") ? styles.active : ""}`}>Marketplace</a>
        <a href="weather" className={`${styles.navLink} ${isActive("#weather") ? styles.active : ""}`}>Weather</a>
       
        <a href="kilimo-chama" className={`${styles.navLink} ${isActive("#dashboard") ? styles.active : ""}`}>Dashboard</a>
      </div>
    </nav>
  );
}
