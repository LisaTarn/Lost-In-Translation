'use client'
import React, { useContext, useState, useEffect } from "react";
import { ProgressContext } from "./Progress";
import '../globals.css';

const words = [
  { english: "apple", french: "pomme" },
  { english: "house", french: "maison" },
  { english: "car", french: "voiture" },
  { english: "tree", french: "arbre" },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function MatchGame() {
  const [shuffledWords, setShuffledWords] = useState([]);
  const [shuffledTranslations, setShuffledTranslations] = useState([]);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [message, setMessage] = useState("");
  const {progress, setProgress} = useContext(ProgressContext);
  
  const maxPairsCount = 4;

  useEffect(() => {
    setShuffledWords(shuffleArray(words));
    setShuffledTranslations(shuffleArray(words));
  }, []);

  const handleEnglishClick = (word) => {
    if (!matchedPairs.includes(word)) {
      setSelectedEnglish(word);
      setMessage(""); // Clear previous message
    }
  };

  const handleFrenchClick = (word) => {
    if (selectedEnglish) {
      if (selectedEnglish.french === word.french) {
        setMatchedPairs([...matchedPairs, selectedEnglish]);
        setMessage("Correct!");
        if (matchedPairs.length == maxPairsCount - 1){
          let currentProgress = progress;
          if (!currentProgress.includes("Matchmaking")){
            console.log("Matchmaking done!");
            setProgress(
              [
                ...progress,
                "Matchmaking"
              ]
            );
          }
        }
      } else {
        setMessage("Incorrect! Try again.");
      }
      setSelectedEnglish(null); // Reset selection after match attempt
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Match English words to their French translations</h2>
      <p>
        {message}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>
          <h3>English</h3>
          {shuffledWords.map((word) => (
            <button
              key={word.english}
              onClick={() => handleEnglishClick(word)}
              disabled={matchedPairs.includes(word)}
              style={{
                display: "block",
                margin: "5px",
                padding: "10px",
                backgroundColor: selectedEnglish === word? "#5852d6" :  " #34197e",
                fontWeight: selectedEnglish === word ? "bold" : "normal",
              }}
            >
              {word.english}
            </button>
          ))}
        </div>
        <div>
          <h3>French</h3>
          {shuffledTranslations.map((word) => (
            <button
              key={word.french}
              onClick={() => handleFrenchClick(word)}
              disabled={matchedPairs.includes(word)}
              style={{
                display: "block",
                margin: "5px",
                padding: "10px",
              }}
            >
              {word.french}
            </button>
          ))}
        </div>
      </div>
      <h3>Matched Pairs:</h3>
      {matchedPairs.map((pair) => (
        <p key={pair.english}>{pair.english} - {pair.french}</p>
      ))}
    </div>
  );
}