//handles displaying flashcard flip logic
'use client'
import React, { useState, useContext } from 'react';
import { ProgressContext } from "./Progress";
import '../globals.css';

const FrontBack = ({ frontContent, backContent}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCredited, setIsCredited] = useState(false);
    const {progress, setProgress} = useContext(ProgressContext);

    
    const handleFlip = () => {
        setIsFlipped(!isFlipped);

    {/*const currentProgress = progress;
        if (!isCredited){
          setProgress(currentProgress + 1);
          setIsCredited(true);
        }
    }*/}
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