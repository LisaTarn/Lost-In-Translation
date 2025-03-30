'use client'
import React, { useState } from 'react';
import Flashcards from './Flashcards';
import Matchmaking from './Matchmaking';
import FillBlank from './FillBlank';

export default function ActivityCard(){
    const [active, setActive] = useState(null);

    const renderActivity = () => {
        switch (active){
            case "Flashcard":
            return <Flashcards />;
            case 'Matchmaking':
            return <Matchmaking />;
            case 'FillInTheBlanks':
            return <FillBlank />
            default:
                return <div className="activity-header">SELECT AN ACTIVITY</div>;
            }
        }
    return(
        <div className="activity-card">
            {renderActivity()}
            <div className="button-container">
        <button onClick={() => setActive("Flashcard")}>Flashcards</button>
        <button onClick={() => setActive("Matchmaking")}>Matchmaking</button>
        <button onClick={() => setActive("FillInTheBlanks")}>FillInTheBlanks</button>
        </div>
        </div>
    )
}