import React, { Component } from "react";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";


// import my new components:
import StockList from "../components/StockList";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";


class Dashboard extends Component {

    state = {
        stocks: [],
        userStocks: []
    };

    componentDidMount() {
        API.getStocks()
            .then(res => this.setState({ stocks: res.data }))
            .catch(err => console.log(err));
    };

    // Jason - trying to set userstocks performance in NavBar
    // setUserStocks = (event) => {
    //     event.preventDefault();
    //     API.getUserStocks()
    //         .then(res => this.setState({ userStocks: res.data }))
    //         .catch(err => console.log(err));
    // };


    render() {
        return (
            <div id="background" >
                <Nav />
                <Container>
                    <Row>
                        <Col size="lg-12 md-12 sm-12 xs-12">
                            <StockList stocks={this.state.stocks} />
                        </Col>
                        </Row>
                        <Row>
                        <Col size="lg-9 md-12 sm-12 xs-12">
                            <Card1 />
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}


export default Dashboard;
