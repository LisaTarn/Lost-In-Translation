//handles flashcard translation
'use client'
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import FrontBack from './FrontBack';
//import { sources } from "next/dist/compiled/webpack/webpack";
import styles from './styles/Flashcards.module.css';

const Flashcards = () => {
    const { targetLanguage } = useContext(LanguageContext);
    const [flashcards, setFlashcards] = useState([
        { front: "Hello", back: ""},
        { front: "Thank you", back: ""},
        { front: "Goodbye", back: ""}
    ]);
    const [fetched, setFetched] = useState(false);
    const [cardCount, setCardCount] = useState(0);

    //API implementation
    const fetchTranslations = async () => {
        const api = 'https://api.translateplus.io/v1/translate';
        const apiKey = 'bcf49d70879d9af48e20764128ae73731d66f3b2';

        const translateCards = await Promise.all(flashcards.map(async (card) => {
            try {
                const response = await fetch(api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY': apiKey,
                        },
                        body: JSON.stringify({
                            text: card.front,
                            source: 'en',
                            target: targetLanguage,
                        }),
                    });
                    
                    const data = await response.json();
                    console.log(data);
                    return {...card, back: data.translations?.translation || 'Translation Error'};

                } catch (error) {
                    return {...card, back: 'Translation Error'};
                }
            }));
        //populate back of flashcard with translation
        setFlashcards(translateCards);
    };
    
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        fetchTranslations();
    }, [targetLanguage]);

    if (!hasMounted) 
        return null
    else {
        if (!fetched){
            fetchTranslations();
            setFetched(true);
        }
    }

    return(
        <div className={styles.flashcardsContainer}>
                    <button 
                onClick={() => window.location.href = '/activities'}
                className={styles.backButton}
            >
                <span className={styles.arrow}>←</span> Back to Activities
            </button>
            <h1 className={styles.flashcardsHeader}>Flashcards</h1>
            <div className={styles.flashcardsStack}>
            {flashcards.map((card, index) => (
                <FrontBack 
                key={index} 
                frontContent={card.front} 
                backContent={card.back}
                cardCount={cardCount}
                setCardCount={setCardCount}
                className={styles.flashcard} />
            ))}
        </div>
        </div>
    );
};

export default Flashcards;