'use client';
import React, { useState, useContext } from 'react';
import { UserContext } from "./UserDetails";

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
    )
}