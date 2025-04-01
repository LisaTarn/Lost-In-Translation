'use client';
import React, { useState, useContext } from 'react';
import { UserContext } from "./UserDetails";
import Image from 'next/image';
import '../globals.css';

export default function RegistrationForm(){
    const {setUser} = useContext(UserContext);
    const[formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username: formData.username, email: formData.email })
        alert("Form submitted:", formData)
    };

    return(
        <div className="registration-page">
        <div className="registration-container">
            <div className="registration-box">
        <form onSubmit={handleSubmit}>
            <h1>Register for L.I.T.</h1>
          <label htmlFor="username">Username:</label>
          <input
          type="text"
          id="username"
          name="username"  
          value={formData.username}
          onChange={handleChange}
          required
          />
          <label htmlFor="email">Email:</label>
          <input
          type="email"
          id="email"
          name="email"  
          value={formData.email}
          onChange={handleChange}
          required
          />
          <label htmlFor="password">Password:</label>
          <input
          type="password"
          id="password"
          name="password"  
          value={formData.password}
          onChange={handleChange}
          required
          />
          <button type="submit">Register</button>
        </form>
        </div>

        <div className="info-box">
                <Image src='/Lost-In-Translation/images/logo.png' 
                alt="LIT Logo" 
                width={500}
                height={300}
                 />
                <p>
                    At L.I.T, we believe that language is more than just words—it's a bridge to new cultures, connections, and opportunities. Our mission is to make learning languages fun, accessible, and engaging for everyone, no matter where they are in their journey.
                    <br /><br />
                    We value diversity, inclusivity, and innovation, ensuring that our platform celebrates languages from all over the world. With an intuitive design, interactive lessons, and a supportive community, we aim to help learners gain confidence and fluency in a way that feels natural and enjoyable.
                    <br /><br />
                    Join us in breaking language barriers and exploring the world—one word at a time!
                </p>
            </div>
        </div>
        </div>
    )
}