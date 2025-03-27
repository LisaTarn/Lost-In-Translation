'use client';
import { useState } from "react";
import Link from "next/link";

export default function NavBar(){
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    } 
    return(
    <nav>
        <div onClick={toggleMenu}>
        <Link href="/">Home</Link>
        <Link href="/activities">Activities</Link>
        <Link href="/progress">Progress</Link>
        <Link href="/account">Account</Link>
        <Link href="/register">Register</Link>
        </div>
        
    </nav>
    )
}