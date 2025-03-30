import React, { useState, useContext } from 'react';
import { ProgressContext } from "./Progress";
import '../globals.css';

const FrontBack = ({ frontContent, backContent}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCredited, setIsCredited] = useState(false);
    const {progress, setProgress} = useContext(ProgressContext);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        const currentProgress = progress;
        if (!isCredited){
          setProgress(currentProgress + 1);
          setIsCredited(true);
        }
    }

    return(
      <div onClick={handleFlip} className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            <div className="flashcard-content">
                <div className="flashcard-front">
                    {frontContent}
                </div>
                <div className="flashcard-back">
                    {backContent}
                </div>
            </div>
      </div>
    )
}

export default function Flashcards(){
    const [flashcards] = useState([
        { front: "Hello", back: "Bonjour"},
        { front: "Thank you", back: "Merci"},
        { front: "Goodbye", back: "Au revoir"}]);

    return(
        <div>
            <h1>Flashcards</h1>
           {flashcards.map((card, index) => (
            <FrontBack key = {index} frontContent={card.front} backContent={card.back} />
           ))}
        </div>
    )


}