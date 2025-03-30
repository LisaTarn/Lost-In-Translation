'use client'
import React, { useContext } from 'react';
import { ProgressContext } from "./Progress";

export default function ProgressBar(){
    const {progress} = useContext(ProgressContext);
    const maxPoints = 9;
    const progressPercent = ((progress * 100 / maxPoints).toFixed(2) > 100) ? 100 : (progress * 100 / maxPoints).toFixed(2);
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

