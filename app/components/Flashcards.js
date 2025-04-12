//handles flashcard translation
'use client'
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import FrontBack from './FrontBack';
//import { sources } from "next/dist/compiled/webpack/webpack";

export default function Flashcards(){
    const { targetLanguage } = useContext(LanguageContext);
    const [flashcards, setFlashcards] = useState([
        { front: "Hello", back: ""},
        { front: "Thank you", back: ""},
        { front: "Goodbye", back: ""}
    ]);

    //API implementation
    useEffect(() => {
        const fetchTranslations = async () => {
            const api = 'https://libretranslate.de/translate'

            const translate = await Promise.all(flashcards.map(async (card) => {
                try {
                    const translation = await fetch(api, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            q: card.front,
                            source: 'en',
                            target: 'targetLanguage',
                            format: 'text',
                        }),
                    });
                    
                    const data = await translation.json();
                    return {...card, back: data.translatedText || 'Translation Error'};

                } catch (error) {
                    console.error('Translation failed:', error);
                    return {...card, back: 'Translation Error'};
                }
            }));

            //populate back of flashcard with translation
            setFlashcards(translate);
        };

        fetchTranslations();
    }, [targetLanguage]);

    return(
        <div>
            <h1>Flashcards</h1>
            {flashcards.map((card, index) => (
                <FrontBack key={index} frontContent={card.front} backContent={card.back} />
            ))}
        </div>
    );
}