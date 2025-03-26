'use client';
import Link from "next/link";

export default function NavBar(){
    return(
    <nav>
        <Link href="/">Home</Link>
        <Link href="/activities">Activities</Link>
        <Link href="/progress">Progress</Link>
        <Link href="/account">Account</Link>
        <Link href="/register">Register</Link>
    </nav>
    )
}