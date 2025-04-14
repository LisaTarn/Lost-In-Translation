'use client'
import React, { useContext, useState, useEffect } from 'react';
import { ProgressContext } from "./Progress";
import styles from './styles/Progress.module.css';
import Image from 'next/image';

export default function ProgressBar(){
    const {progress} = useContext(ProgressContext);

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
  
    const badgeList = [
        {name: "Beginner", image: 'https://lisatarn.github.io/Lost-In-Translation/images/logo.png', threshold: 33.32},
        {name: "Intermediate", image: 'https://lisatarn.github.io/Lost-In-Translation/images/logo.png', threshold: 66.66},
        {name: "Advanced", image: 'https://lisatarn.github.io/Lost-In-Translation/images/logo.png', threshold: 100}
    ];

    const completedCount = activities.filter(a => progress.includes(a.key)).length;
    const completionPercent = Math.round((completedCount / activities.length) * 100);
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const newBadges = badgeList.filter(badge => completionPercent >= badge.threshold);
        if (newBadges.length !== badges.length) {
            setBadges(newBadges);
        }
    }, [progress, completionPercent]);

    return (
        <div className={styles.progressContainer}>
            <h1 className={styles.header}>Your Progress</h1>
            
            <div className={styles.progressSection}>
                <h3 className={styles.sectionTitle}>Overall Completion</h3>
                <div className={styles.progressBarContainer}>
                    <div 
                        className={styles.progressBarFill}
                        style={{ width: `${completionPercent}%` }}
                    />
                    <span className={styles.progressText}>
                        {completedCount}/{activities.length} Activities ({completionPercent}%)
                    </span>
                </div>
            </div>

            <div className={styles.progressSection}>
                <h3 className={styles.sectionTitle}>Your Activities</h3>
                <div className={styles.badgesContainer}>
                    {activities.map((activity) => (
                        <div 
                            key={activity.key}
                            className={`${styles.badge} ${progress.includes(activity.key) ? styles.completed : ''}`}
                        >
                            <div className={styles.badgeImage}>
                                <Image
                                    src={activity.image}
                                    alt={`${activity.name} badge`}
                                    width={100}
                                    height={100}
                                    className={progress.includes(activity.key) ? '' : styles.grayscale}
                                />
                            </div>
                            <div className={styles.badgeLabel}>{activity.name}</div>
                            {progress.includes(activity.key) && (
                                <div className={styles.completedTag}>Completed!</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Added Achievement Badges Section */}
            <div className={styles.progressSection}>
                <h3 className={styles.sectionTitle}>Achievement Badges</h3>
                <div className={styles.badgesContainer}>
                    {badges.map((badge, index) => (
                        <div key={index} className={styles.badge}>
                            <div className={styles.badgeImage}>
                                <Image
                                    src={badge.image}
                                    alt={`${badge.name} badge`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className={styles.badgeLabel}>{badge.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}