'use client'
import React, { useState, useContext, useEffect } from 'react';
import { ProgressContext } from "./Progress";
import { LanguageContext } from '../context/LanguageContext';
import styles from './styles/FillBlank.module.css';
import { useRouter } from 'next/navigation';

export default function FillBlank() {
  const sentences = [
    {english: 'Hello'},
    {english: 'Goodbye'},
    {english: 'Thank you'}
  ];

  const [answers, setAnswers] = useState(Array(sentences.length).fill(''));
  const [feedback, setFeedback] = useState(null);
  const {progress, setProgress} = useContext(ProgressContext);
  const [translations, setTranslations] = useState([]);
  const { targetLanguage } = useContext(LanguageContext);
  //const { setTranslationsFetched } = useState(false);

  //API implementation
  const fetchTranslations = async () => {
    const api = 'https://api.translateplus.io/v1/translate';
    const apiKey = 'bcf49d70879d9af48e20764128ae73731d66f3b2';

    const typeTranslation = await Promise.all(sentences.map(async (sentence) => {
    
      try {
        const response = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
          },
          body: JSON.stringify({
            text: sentence.english,
            source: 'en',
            target: targetLanguage,
          }),
        });
        const data = await response.json();
        return data.translations?.translation || 'Translation Error';
      } catch (error) {
        return 'Translation Error';
      }
    }));
    setTranslations(typeTranslation);
    //setTranslationsFetched(true);
  };

  useEffect(() => {
    fetchTranslations();
    setAnswers(Array(sentences.length).fill(''));
    setFeedback(null);
  }, [targetLanguage]);  

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    const result = answers.map((answer, index) => {
      const correctAnswer = translations[index]?.toLowerCase().trim();
      return answer.trim().toLowerCase() === correctAnswer;
    });

    //update progress
    let correctAnswersCount = 0;
    for (const res of result){
      if (res){
        correctAnswersCount++;
      }
    }
    
    if (correctAnswersCount == result.length){
      let currentProgress = progress;
      if (!currentProgress.includes("FillInTheBlanks")){
        console.log("FillBlank done!");
        setProgress(
          [
            ...progress,
            "FillInTheBlanks"
          ]
        );
      }
    }
    setFeedback(result);
  };

  return(
    <div className={styles.page}>
    <div className={styles.backButtonContainer}>
      <button 
        onClick={() => window.location.href = '/activities'}
        className={styles.backButton}
      >
        <span className={styles.arrow}>←</span> Back to Activities
      </button>
    </div>
      <div className={styles.fillBlankContainer}>
        {sentences.map((sentence, index) => (
          <div key={index} className={styles.sentenceItem}>
            <p className={styles.sentenceText}>{sentence.english}</p>
            <input
              type="text"
              className={styles.fillBlankInput}
              value={answers[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Enter the translation"
            />
            {feedback && (
              <p className={styles.feedbackText}>
                {feedback[index]
                  ? 'Correct!'
                  : `Incorrect. Correct answer: ${translations[index]}`}
              </p>
            )}
          </div>
        ))}
        <button className={styles.checkButton} onClick={checkAnswers}>Check Answers</button>
      </div> 
    </div>
  );
}