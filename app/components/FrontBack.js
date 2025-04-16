//handles displaying flashcard flip logic
'use client'
import React, { useState, useEffect, useContext } from 'react';
import { ProgressContext } from "./Progress";
import styles from './styles/FrontBack.module.css';
import { LanguageContext } from "../context/LanguageContext";

const FrontBack = ({ frontContent, backContent, cardCount, setCardCount}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCredited, setIsCredited] = useState(false);
    const {progress, setProgress} = useContext(ProgressContext);
    const { targetLanguage } = useContext(LanguageContext);

    const maxCardCount = 3;

    const handleFlip = () => {
        setIsFlipped((prev) => !prev); // Toggle flip state first
    
        if (!isCredited) {
            updateProgress();
        }
    };
    
    const updateProgress = () => {
        setIsCredited(true);
        setCardCount((prev) => prev + 1);
    
        if (cardCount + 1 === maxCardCount) {
            if (!progress.includes("Flashcard")) {
                console.log("Flashcards done!");
                setProgress([...progress, "Flashcard"]);
            }
        }
    };

    useEffect(() => {
            setIsFlipped(false);
        }, [targetLanguage]);

    return(
      <div onClick={handleFlip} className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}>
            <div className={styles.flashcardContent}>
                <div className={styles.flashcardFront}>
                    {frontContent}
                </div>
                <div className={styles.flashcardBack}>
                    {backContent || 'No translation available'}
                </div>
            </div>
      </div>
    );
};

export default FrontBack;