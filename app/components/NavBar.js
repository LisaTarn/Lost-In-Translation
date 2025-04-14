'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../context/LanguageContext";
import styles from './styles/NavBar.module.css';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { targetLanguage, setTargetLanguage } = useContext(LanguageContext);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    const closeNavbar = () => {

      setIsOpen(false);
    }

    //handle language change
    const handleLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  return (
<div className={styles.navContainer}>
      <nav className={styles.nav}>
        <button
          onClick={toggleNavbar}
          className={styles.menuButton}
      >
        ☰ Menu
      </button>
      {isOpen && (
        <ul className={styles.menuList}>
          <li className={styles.menuItem}><Link href="/" className={styles.menuLink} onClick={closeNavbar}>Home</Link></li>
          <li className={styles.menuItem}><Link href="/activities" className={styles.menuLink} onClick={closeNavbar}>Activities</Link></li>
          <li className={styles.menuItem}><Link href="/progress" className={styles.menuLink} onClick={closeNavbar}>Progress</Link></li>
          <li className={styles.menuItem}><Link href="/account" className={styles.menuLink} onClick={closeNavbar}>Account</Link></li>
          <li className={styles.menuItem}><Link href="/register" className={styles.menuLink} onClick={closeNavbar}>Register</Link></li>
        </ul>
      )}
    </nav>
    
    <div className={styles.languageSelection}>
    <label>Select Language:</label>
      <select id="language" value={targetLanguage} onChange={handleLanguageChange}
      className={styles.languageSelect}>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="zh-TW">Chinese</option>
      </select>
  </div>
</div>
  );
};

export default Navbar;