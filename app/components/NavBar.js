'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
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
  );
};

export default Navbar;