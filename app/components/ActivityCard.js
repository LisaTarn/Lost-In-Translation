'use client'
import React, { useContext, useState } from 'react';
import Matchmaking from './Matchmaking';
import FillBlank from './FillBlank';
import { LanguageContext } from '../context/LanguageContext';
import dynamic from 'next/dynamic';

//load flashcards dynamically on client server
const Flashcards = dynamic(() => import ('./Flashcards'), { ssr: false });

export default function ActivityCard(){
    const [active, setActive] = useState(null);
    const { targetLanguage, setTargetLanguage } = useContext(LanguageContext);

    //handle language change
    const handleLanguageChange = (e) => {
        setTargetLanguage(e.target.value);
    };

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
    };
    
    return (
        <div className="activity-card">
            <div className="language-selection">
                <label>Select Language:</label>
                <select id="language" value={targetLanguage} onChange={handleLanguageChange}>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="zh-TW">Chinese</option>
                </select>
            </div>

            <div className="button-container">
                <button onClick={() => setActive("Flashcard")}>Flashcards</button>
                <button onClick={() => setActive("Matchmaking")}>Matchmaking</button>
                <button onClick={() => setActive("FillInTheBlanks")}>FillInTheBlanks</button>
            </div>

            {renderActivity()}
        </div>
    );
}