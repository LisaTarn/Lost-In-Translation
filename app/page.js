'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from './homepage.module.css';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.gridContainer}>
        {/* Top Left - Logo */}
        <div className={styles.logoCell}>
          <Image 
            src="https://lisatarn.github.io/Lost-In-Translation/images/logo.png" 
            alt="Lost in Translation logo" 
            width={300} 
            height={300}
            priority
            className={styles.logo}
          />
        </div>
        
        {/* Top Right - Empty (spacer) */}
        <div className={styles.spacerCell}></div>
        
        {/* Bottom Left - Text Content */}
        <div className={styles.textCell}>
          <h1 className={styles.greeting}>Start your journey with us</h1>
          <p className={styles.slogan}>"Learn Languages, Stay L.I.T"</p>
          <Link href={`/register`}>
            <button className={styles.register}>Start Learning</button>
          </Link>
        </div>
        
        {/* Bottom Right - Icon */}
        <div className={styles.iconCell}>
          <Image 
            src="https://lisatarn.github.io/Lost-In-Translation/images/homepageicon.png" 
            alt="Language learning icon" 
            width={400} 
            height={400}
            className={styles.sideIcon}
          />
        </div>
      </div>
    </div>
  );
}
