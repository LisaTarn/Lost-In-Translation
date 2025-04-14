'use client'
import React, { useContext, useState } from 'react';
import Matchmaking from './Matchmaking';
import FillBlank from './FillBlank';
import dynamic from 'next/dynamic';
import { LanguageContext } from '../context/LanguageContext';
import styles from './ActivityCard.module.css';

//load flashcards dynamically on client server
const Flashcards = dynamic(() => import ('./Flashcards'), { ssr: false });

export default function ActivityCard(){
    const [active, setActive] = useState(null);

    const { targetLanguage, setTargetLanguage } = useContext(LanguageContext);
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
                return <div className={styles.activityHeader}>SELECT AN ACTIVITY</div>;
        }
    };
    
    return (
        <div className={styles.activityCard}>
            <div className={styles.buttonContainer}>
                <button 
                className={styles.button}
                onClick={() => setActive("Flashcard")}>Flashcards
                </button>
                <button
                className={styles.button}
                onClick={() => setActive("Matchmaking")}>Matchmaking
                </button>
                <button 
                className={styles.button}
                onClick={() => setActive("FillInTheBlanks")}>FillInTheBlanks
                </button>
            </div>

            {renderActivity()}
        </div>
    );
}