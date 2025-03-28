'use client'
import React, { useState } from 'react';

export default function FillBlank(){
    const sentences = [
        {english: 'Hello', french: 'Bonjour'},
        {english: 'Goodbye', french: 'Au revoir'},
        {english: 'Thank you', french: 'Merci'}
    ]

    const [answers, setAnswers] = useState(Array(sentences.length).fill(''));
  const [feedback, setFeedback] = useState(null);

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    const correctAnswers = sentences.map(sentence => sentence.french);
    const result = answers.map((answer, index) => answer.trim().toLowerCase() === correctAnswers[index].trim().toLowerCase());
    setFeedback(result);
  };

    return(
        <div>
            {sentences.map((sentence, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{sentence.english}</p>
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="Enter the French translation"
          />
          {feedback && (
            <p>
              {feedback[index]
                ? 'Correct!'
                : `Incorrect. Correct answer: ${sentence.french}`}
            </p>
          )}
        </div>
      ))}
      <button onClick={checkAnswers}>Check Answers</button>
    </div> 
    )
}