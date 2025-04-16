'use client'
import React, { useContext, useState, useEffect } from "react";
import { ProgressContext } from "./Progress";
import { LanguageContext } from "../context/LanguageContext";
import '../globals.css';
import styles from './styles/MatchGame.module.css';

let words = [
  { english: "apple", translation: "translation1" },
  { english: "house", translation: "translation2" },
  { english: "car", translation: "translation3" },
  { english: "tree", translation: "translation4" },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function MatchGame() {
  const [shuffledWords, setShuffledWords] = useState([]);
  const [shuffledTranslations, setShuffledTranslations] = useState([]);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [message, setMessage] = useState("");
  const {progress, setProgress} = useContext(ProgressContext);
  const { targetLanguage } = useContext(LanguageContext);
  const [fetched, setFetched] = useState(false);
  
  const maxPairsCount = 4;

  //API implementation
  const fetchTranslations = async () => {
    const api = 'https://api.translateplus.io/v1/translate';
    const apiKey = 'bcf49d70879d9af48e20764128ae73731d66f3b2';

    words = await Promise.all(words.map(async (word) => {
        try {
            const response = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': apiKey,
                    },
                    body: JSON.stringify({
                        text: word.english,
                        source: 'en',
                        target: targetLanguage,
                    }),
                });
                
                const data = await response.json();
                console.log(data);
                return {...word, translation: data.translations?.translation || 'Translation Error'};

            } catch (error) {
                return {...word, translation: 'Translation Error'};
            }
        }));
        setShuffledWords(shuffleArray(words));
        setShuffledTranslations(shuffleArray(words));
  };

  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
      setHasMounted(true);
    }, [targetLanguage]);
  
  if (!hasMounted) 
      return null
  else {
    if (!fetched){
      fetchTranslations();
      setFetched(true);
    }
  }

  const handleEnglishClick = (word) => {
    if (!matchedPairs.includes(word)) {
      setSelectedEnglish(word);
      setMessage(""); // Clear previous message
    }
  };

  const handleTranslationClick = (word) => {
    if (selectedEnglish) {
      if (selectedEnglish.translation === word.translation) {
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
    <div className={styles.matchGameContainer}>
      <h2 className={styles.gameHeader}>Match English words to their appropriate translations</h2>
      <p className={styles.message}>
        {message}
      </p>
      <div className={styles.gameColumns}>
        <div className={styles.wordColumn}>
          <h3 className={styles.columnHeader}>English</h3>
          {shuffledWords.map((word) => (
            <button
              key={word.english}
              onClick={() => handleEnglishClick(word)}
              disabled={matchedPairs.includes(word)}
              className={`${styles.wordButton} ${
                selectedEnglish === word ? styles.selected : ''
              }`}
            >
              {word.english}
            </button>
          ))}
        </div>
        <div className={styles.wordColumn}>
          <h3 className={styles.columnHeader}>Translation</h3>
          {shuffledTranslations.map((word) => (
            <button
              key={word.translation}
              onClick={() => handleTranslationClick(word)}
              disabled={matchedPairs.includes(word)}
              className={styles.wordButton}
            >
              {word.translation}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.matchedPairs}>
      <h3>Matched Pairs:</h3>
      {matchedPairs.map((pair) => (
        <p key={pair.english} className={styles.matchedPair}>{pair.english} - {pair.translation}</p>
      ))}
    </div>
    </div>
  );
}