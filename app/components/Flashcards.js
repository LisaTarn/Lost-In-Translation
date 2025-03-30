import React, { useState, useContext } from 'react';
import { ProgressContext } from "./Progress";

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
        <div onClick={handleFlip} style={styles.flashcard}>
      <div style={{ ...styles.content, transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div style={styles.front}>{frontContent}</div>
        <div style={styles.back}>{backContent}</div>
      </div>
    </div>
    )
}

const styles = {
    flashcard: {
      perspective: "1000px",
      cursor: "pointer",
      width: "200px",
      height: "150px",
      margin: "20px auto",
    },
    content: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 0.6s",
    },
    front: {
      position: "absolute",
      backfaceVisibility: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ddd",
    },
    back: {
      position: "absolute",
      backfaceVisibility: "hidden",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffeaa7",
      border: "1px solid #ddd",
      transform: "rotateY(180deg)",
    },
  };

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