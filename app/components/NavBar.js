'use client'
import React, { useState } from "react";
import Link from "next/link";
import styles from './styles/NavBar.module.css';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    const closeNavbar = () => {

      setIsOpen(false);
    }

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
  </div>
  );
};

export default Navbar;