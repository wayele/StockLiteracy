import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import './style.css'

function EduCard(props) {
    return (
        <div className="card-container">
            <a href={props.url} target="_blank" className="row" rel="noopener noreferrer">
                <Card className="eduCard col" body inverse style={{ backgroundColor: '#333' }}>
                    <CardTitle className="eduCard-title"> {props.title}</CardTitle>
                </Card></a>
        </div>
    )
}

export default EduCard
