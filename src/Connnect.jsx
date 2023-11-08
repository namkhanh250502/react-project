import { useEffect, useState } from "react";
import React from "react";

function Connect() {
    const  [time, setTime] = useState(60)
    useEffect(
        () => {
            setInterval(() => {
                setTime(prev => prev - 1)
            },1000)
        },[]) 
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Connect;