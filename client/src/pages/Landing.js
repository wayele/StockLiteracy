import React from "react";
import Serene from "./serene.jpg";
import Analytics from "./analytics.jpg";
import Background from "../components/Background";
import {
    Col, Container, Card, CardBody, Row
} from 'reactstrap';


function Landing() {
    return (
        <Background>
            <Container>
                <h1 className="header" style={{ fontFamily: "Georgia", fontSize: 70, textAlign: "center", color: "rgb(0, 195, 255)" }}>Stock Market Literacy</h1>
                <br></br>
                <Row>
                    <Col md="2"></Col>
                    <Col md="7">
                        <iframe id="ytplayer" type="text/html" width="640" height="360"
                            src="https://www.youtube.com/embed/XDeD-HcAl7U?autoplay=1&mute=1&loop=1&playlist=XDeD-HcAl7U"
                            frameborder="0"
                            allow='autoplay; encrypted-media'>
                        </iframe>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row></Row>
                <br></br>
                <Row>
                    <Col md="3">
                        <Card style={{ background: "rgba(0, 195, 255, 0.685)" }}>
                            <CardBody>
                                <p style={{ fontFamily: "Georgia", color: "black", textShadow: "grey" }}>New? Sign Up Here</p>
                                <a href={"/signup"}>
                                    <img src={Serene} alt={"graph"} className="img-thumbnail"></img>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="5"></Col>
                    <Col md="3">
                        <Card style={{ background: "rgba(0, 195, 255, 0.685)" }}>
                            <CardBody>
                                <p style={{ fontFamily: "Georgia", color: "black", textShadow: "grey" }}>Already a Member? Log In Here</p>
                                <a href={"/login"}>
                                    <img src={Analytics} alt={"analytics"} className="img-thumbnail"></img>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Background>
    )
}

export default Landing;