'use client'
import React, { useContext, useState } from 'react';
import Matchmaking from './Matchmaking';
import FillBlank from './FillBlank';
import dynamic from 'next/dynamic';
import { LanguageContext } from '../context/LanguageContext';
import styles from './styles/ActivityCard.module.css';
import Image from 'next/image';

// Load flashcards dynamically on the client
const Flashcards = dynamic(() => import ('./Flashcards'), { ssr: false });

export default function ActivityCard(){
    const [active, setActive] = useState(null);

    const { targetLanguage, setTargetLanguage } = useContext(LanguageContext);
    const handleLanguageChange = (e) => {
        setTargetLanguage(e.target.value);
    };

    const activities = [
        { 
            name: 'Flashcards', 
            key: 'Flashcard',
            image: 'https://lisatarn.github.io/Lost-In-Translation/images/flashcard-badge.png'
        },
        { 
            name: 'Matchmaking', 
            key: 'Matchmaking',
            image: 'https://lisatarn.github.io/Lost-In-Translation/images/matchmaking-badge.png'
        },
        { 
            name: 'Fill in Blanks', 
            key: 'FillInTheBlanks',
            image: 'https://lisatarn.github.io/Lost-In-Translation/images/fillblank-badge.png'
        }
    ];

    const renderActivity = () => {
        if (active) {
            return (
                <div className={styles.activityContainer}>
                    {/* Back Button */}
                    <button className={styles.backButton} onClick={() => setActive(null)}>
                        Back to Selection Screen
                    </button>

                    {/* Render the selected activity */}
                    {active === "Flashcard" && <Flashcards />}
                    {active === "Matchmaking" && <Matchmaking />}
                    {active === "FillInTheBlanks" && <FillBlank />}
                </div>
            );
        }

        // Activity selection screen
        return (
            <div className={styles.defaultView}>
                <div className={styles.activityHeader}>SELECT AN ACTIVITY</div>
                <div className={styles.buttonContainer}>
                    {activities.map((activity) => (
                        <button 
                            key={activity.key}
                            className={styles.button}
                            onClick={() => setActive(activity.key)}
                        >
                            <div className={styles.buttonContent}>
                                <div className={styles.buttonIcon}>
                                    <Image
                                        src={activity.image}
                                        alt={activity.name}
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <span className={styles.buttonText}>{activity.name}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className={styles.activityCard}>
            <div className={styles.languageSelection}>
                <label>Select Language:</label>
                <select 
                    id="language" 
                    value={targetLanguage} 
                    onChange={handleLanguageChange}
                    className={styles.languageSelect}
                >
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="zh-TW">Chinese</option>
                </select>
            </div>
            {renderActivity()}
        </div>
    );
}