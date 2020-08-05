import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
// import TrashBtn from "../TrashBtn";
import "./style.css";


const Card1 = (props) => {
    const well = {
        boxShadow: "3px 3px 3px #9E9E9E"
    }

    return (
        <div>
            <Card className="card1" style={well}>
                {/* <CardHeader>Header</CardHeader> */}
                <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Card1;