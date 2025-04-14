//handles displaying flashcard flip logic
'use client'
import React, { useState, useContext } from 'react';
import { ProgressContext } from "./Progress";
import '../globals.css';

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
      <div onClick={handleFlip} className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="flashcard-content">
                <div className="flashcard-front">
                    {frontContent}
                </div>
                <div className="flashcard-back">
                    {backContent ? backContent : "No translation available"}
                </div>
            </div>
      </div>
    );
};

export default FrontBack;