'use client'
import React, { useState } from 'react';

export default function Machmaking(){
  
 const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [input, setInput] = useState("");

  const words = [
    { english: "Hello", french: "Bonjour" },
    { english: "Goodbye", french: "Au revoir" },
    { english: "Thank you", french: "Merci" }]

    const getWord = () =>{
        const wordIndex = Math.floor(Math.random() * words.length);
        setCurrentWord(words[wordIndex]);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim().toLowerCase() === currentWord.french.toLowerCase()) {
          setScore(score + 1);
          alert("Correct!");
        } else {
          alert(`Incorrect! The correct answer was "${currentWord.french}"`);
        }
        setInput("");
        getWord();
      };

      React.useEffect(() => {getWord();}, []);
    return(
        <div>
            <h1>Matchmaking</h1>
            <h2>{currentWord.english}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer here"
        />
        <button type="submit">Submit</button>
      </form>
      
      <p>Your score: {score}</p>
        </div>
    )
}