import React from "react";
import { Badge } from 'reactstrap';
import "./style.css";


function ScoreBadge(props) {


    let scoreIntArray = [];
    let newScores = props.scores;

    newScores.map((newScore) => scoreIntArray.push([newScore]));
    console.log("this is the scoreIntArray:" + scoreIntArray);


    // function scoreConvert() {
    //     newScores.forEach(score => {
    //         parseInt(score);
    //         scoreIntArray.push(([score]))
    //     });
    // };

    const totalScore = scoreIntArray.reduce(
        (prevValue, currentValue) => prevValue - (-currentValue),
        0);

    console.log("This is the total Score from badge component:" + totalScore);


    return (

        <>
            {props.scores.map((score, i) => (
                <Badge id="scoreBadge" key={score.id} pill>Stock {[i + 1]} Performance: ${parseFloat(score).toFixed(2)}</Badge>
            ))}
        </>
    );
}

export default ScoreBadge;
