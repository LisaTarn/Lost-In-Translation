'use client'
import React, { useState, useContext } from 'react';
import { ProgressContext } from "./Progress";
import styles from './FillBlank.module.css';

export default function FillBlank(){
    const sentences = [
        {english: 'Hello', french: 'Bonjour'},
        {english: 'Goodbye', french: 'Au revoir'},
        {english: 'Thank you', french: 'Merci'}
    ]

    const [answers, setAnswers] = useState(Array(sentences.length).fill(''));
    const [feedback, setFeedback] = useState(null);
    const {progress, setProgress} = useContext(ProgressContext);

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    const correctAnswers = sentences.map(sentence => sentence.french);
    const result = answers.map((answer, index) => answer.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase());
    let correctAnswersCount = 0;
    for (const res of result){
      if (res){
        correctAnswersCount++;
      }
    }
    if (correctAnswersCount == result.length){
      let currentProgress = progress;
      if (!currentProgress.includes("FillBlank")){
        console.log("FillBlank done!");
        setProgress(
          [
            ...progress,
            "FillBlank"
          ]
        );
      }
    }
    setFeedback(result);
  };

    return(
      <div className="page">
      <div className={styles.fillBlankContainer}>
            {sentences.map((sentence, index) => (
        <div key={index} className={styles.sentenceItem}>
          <p className={styles.sentenceText}>{sentence.english}</p>
          <input
            type="text"
            className={styles.fillBlankInput}
            value={answers[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="Enter the French translation"
          />
          {feedback && (
            <p className={styles.feedbackText}>
              {feedback[index]
                ? 'Correct!'
                : `Incorrect. Correct answer: ${sentence.french}`}
            </p>
          )}
        </div>
      ))}
      <button className={styles.checkButton}
      onClick={checkAnswers}>Check Answers</button>
    </div> 
    </div>
    )
}