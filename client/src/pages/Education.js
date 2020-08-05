import React, { Component } from 'react'
import EduCard from '../components/EduCard'
import { Container, Row, Col } from 'reactstrap';
import API from '../utils/API';
import NavBar from "../components/NavBar"

class Education extends Component {

    state = {
        lessons: []
    }

    componentDidMount() {
        API.getLessons()
            .then(res => {
                console.log(res);
                this.setState({ lessons: res.data })
            }).catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                <NavBar />
                <h1 className="lessonTitle" style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    padding: "2rem",
                    fontSize: "2.5rem"
                }}>
                    BEGIN YOUR STOCK LITERACY JOURNEY HERE!</h1>
                <Container fluid>
                    <Row>
                        {this.state.lessons.map(lesson => (
                            <Col md="3" sm="6"><EduCard
                                title={lesson.title}
                                url={lesson.url}
                            /></Col>
                        ))}
                    </Row>
                </Container>
                <p>***Disclaimer*** Material presented here is for educational purposes only and should not be construed as financial advice. Trading stock involves risk and you should consult your financial advisor before investing.</p>
            </div>
        )
    }
}

export default Education
