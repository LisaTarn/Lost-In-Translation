'use client'
import React, { useContext } from 'react';
import { ProgressContext } from "./Progress";

export default function ProgressBar(){
    const {progress} = useContext(ProgressContext);
    const maxPoints = 3; // one for each activity
    const progressPercent = ((progress.length * 100 / maxPoints).toFixed(2) > 100) ? 100 : (progress.length * 100 / maxPoints).toFixed(2);
    return(
        <div>
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
            
        </div>
    )
}

