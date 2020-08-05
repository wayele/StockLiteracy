import React from 'react';
import {
    Card, CardBody,
    CardHeader
} from 'reactstrap';
import "./style.css";


const Card1 = (props) => {
    const well = {
        boxShadow: "3px 3px 3px #9E9E9E"
    }

    return (
        <div>
            <Card className="card1" style={well}>
                <CardHeader>Current Market News</CardHeader>
                <CardBody>
                        <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="100%"
                            height="100%"
                            src="https://www.bloomberg.com/live/us">
                        </iframe>
                </CardBody>
            </Card>
        </div>
    );
};

export default Card1;