'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from 'next/image';
import Styles from './homepage.module.css';

export default function Home() {
  return (
    <div className={Styles.homepage}>
      <div className={Styles.introContainer}>
        <div className={Styles.intro}>
          <h1 className={Styles.greeting}>Start your journey with us</h1>
          <p className={Styles.slogan}>"Learn Languages, Stay L.I.T</p>
          <Link href={`/register`}><button className={Styles.register}>Start Learning</button></Link>
        </div>
        <Image className={Styles.logo} src="/images/logo.png" alt="Lost in Translation logo" width={600} height={600}/>
      </div>
    </div>
  );
}
