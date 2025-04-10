'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleNavbar}
      >
        ☰ Menu
      </button>
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/activities">Activites</Link></li>
          <li><Link href="/progress">Progress</Link></li>
          <li><Link href="/account">Account</Link></li>
          <li><Link href="/register">Register</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;