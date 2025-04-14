//handles displaying flashcard flip logic
'use client'
import React, { useState, useContext } from 'react';
import { ProgressContext } from "./Progress";
import styles from './FlashCards.module.css';

const FrontBack = ({ frontContent, backContent, cardCount, setCardCount}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCredited, setIsCredited] = useState(false);
    const {progress, setProgress} = useContext(ProgressContext);

    const maxCardCount = 3;

    const handleFlip = () => {
        let currentCardCount = cardCount;
        if (!isCredited){
            setCardCount(++currentCardCount);
            setIsCredited(true);
            if (currentCardCount == maxCardCount){
                let currentProgress = progress;
                if (!currentProgress.includes("Flashcards")){
                    console.log("Flashcards done!");
                    setProgress(
                        [
                            ...progress,
                            "Flashcards"
                        ]
                    );
                }
            }
        }
        setIsFlipped(!isFlipped);
    };

    return(
      <div onClick={handleFlip} className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}>
            <div className={styles.flashcardContent}>
                <div className={styles.flashcardFront}>
                    {frontContent}
                </div>
                <div className={styles.flashcardBack}>
                    {backContent || "No translation available"}
                </div>
            </div>
      </div>
    );
};

export default FrontBack;