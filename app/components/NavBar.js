'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../context/LanguageContext";

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
    <div className="navigation-bar">
        <nav
        onMouseLeave={closeNavbar}>
          <button
            onClick={toggleNavbar}
          >
            ☰ Menu
          </button>
          {isOpen && (
            <ul className="navbar-menu">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/activities">Activites</Link></li>
              <li><Link href="/progress">Progress</Link></li>
              <li><Link href="/account">Account</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>
          )}
        </nav>

        <div className="language-selection">
          <label>Select Language:</label>
            <select id="language" value={targetLanguage} onChange={handleLanguageChange}>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="zh-TW">Chinese</option>
            </select>
        </div>
    </div>
  );
};

export default Navbar;