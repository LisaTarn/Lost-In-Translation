//handles flashcard translation
'use client'
import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import FrontBack from './FrontBack';
import { sources } from "next/dist/compiled/webpack/webpack";

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
            const api = 'https://api.translateplus.io/v1/translate'
            const apiKey = '4c0a9eb8ea20d1338b0f6534dbc83daa97c7eb95';

            const translate = await Promise.all(flashcards.map(async (card) => {
                try {
                    const translation = await fetch(api, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Key': apiKey
                        },
                        body: JSON.stringify({
                            text: card.front,
                            source: 'en',
                            target: targetLanguage
                        })
                    });
                    const data = await translation.json();
                    return {...card, back: data.translations[0]?.text || '[Transalation Error]'};
                } catch (error) {
                    console.error('Translation failed:', error);
                    return {...card, back: '[Translation Error]'};
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
                <FrontBack key = {index} frontContent={card.front} backContent={card.back} />
            ))}
        </div>
    );
}