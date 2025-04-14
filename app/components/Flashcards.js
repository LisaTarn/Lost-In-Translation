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

    const [cardCount, setCardCount] = useState(0);

    //API implementation
    const fetchTranslations = async () => {
        const api = 'https://api.translateplus.io/v1/translate';
        const apiKey = 'ed523bd38e59511a176e4e549dd3fccbfb525aa4';

        const translateCards = await Promise.all(flashcards.map(async (card) => {
            try {
                const response = await fetch(api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                        },
                        body: JSON.stringify({
                            text: card.front,
                            source: 'en',
                            target: targetLanguage,
                        }),
                    });
                    
                    const data = await response.json();
                    return {...card, back: data.translations?.[0]?.text || 'Translation Error'};

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
    }, [targetLanguage]);

    if (!hasMounted) return null;

    return(
        <div className={styles.flashcardsContainer}>
            <h1 className={styles.flashcardsHeader}>Flashcards</h1>
            <div className={styles.flashcardsStack}>
            {flashcards.map((card, index) => (
                <FrontBack 
                key={index} 
                frontContent={card.front} 
                backContent={card.back}
                className={styles.flashcard} />
            ))}
        </div>
        </div>
    );
};

export default Flashcards;