'use client'
import React, { useContext, useState, useEffect } from 'react';
import { ProgressContext } from "./Progress";

export default function ProgressBar(){
    const {progress} = useContext(ProgressContext);
    const maxPoints = 3; // one for each activity
    const progressPercent = ((progress.length * 100 / maxPoints).toFixed(2) > 100) ? 100 : (progress.length * 100 / maxPoints).toFixed(2);
    
    const badgeList = [
        {name: "Beginner", image: 'https://lisatarn.github.io/Lost-In-Translation/images/logo.png', threshold: 33.32},
        {name: "Intermediate", image: 'https://lisatarn.github.io/Lost-In-Translation/images/logo.png', threshold: 66.66},
        {name: "Advanced", image: 'https://lisatarn.github.io/Lost-In-Translation/images/logo.png', threshold: 100}
    ]
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const newBadges = badgeList.filter(badge => progressPercent > badge.threshold)

        if (newBadges.length != badges.length){
            setBadges(newBadges);
        }
    }, [progress]);

    return(
        <div>
            <h1>Progress</h1>
            <div style= {{
                height: "100%",
                width: `100%`,
                backgroundColor: "lightblue"
            }}>
                <div style= {{
                    height: "100%",
                    width: `${progressPercent}%`,
                    backgroundColor: "purple"
                }}> 
                    <p style= {{color: "white"}}>{progressPercent}%</p>
                </div>
            </div>
            <div>
                <h3>Badges Earned:</h3>
                <div style = {{display:"flex", gap: "10px", alignItems: "center"}}>
                {badges.map((
                    badge, index) => (
                        <div key={index}>
                            <img src={badge.image} style={{ width: 50, height: 50, marginRight: 10}} /><p>{badge.name}</p></div>
                    )
                )}</div></div>
            
        </div>
    )
}

