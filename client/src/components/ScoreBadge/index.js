import React from "react";
import { Badge } from 'reactstrap';
import "./style.css";


function ScoreBadge(props) {

    let newScores = props.scores;
    const totalScore = parseFloat(newScores.reduce(
        (prevValue, currentValue) => prevValue - (-currentValue),
        0)).toFixed(2);

    return (
        <>
            <Badge id="scoreBadge">Your Game Score: ${totalScore}</Badge>
        </>
    );
}

export default ScoreBadge;
