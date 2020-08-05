import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';
import Background from "../Background";


class Login extends Component {

    state = {
        username: "",
        password: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleClickSubmit = event => {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        API.loginUser(userData).then(res => {
            console.log(res);
            if (!res.data.errmsg) {
                console.log('successful sign-in')
                this.props.setUser(res.data.user)
                window.location = "/dashboard"
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error)
            alert("Incorrect log-in credentials. Try again or sign up, if you have not yet.")
        })
    }


    render() {

        return (
            <Background>
            <Container id="login" className="App" style={{fontFamily: "Georgia", color: "rgb(0, 195, 255)", fontSize: 30}}>
                <h2 style={{fontFamily: "Georgia", fontSize: 75}}>Log In</h2>
                <br></br>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Your Username Here"
                                style={{width: "35%"}}
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                style={{width: "35%"}}
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <Button onClick={this.handleClickSubmit}>Submit</Button>
                        <p>Not a member? <Link to="/signup" style={{background: "rgba(148, 230, 225, 0.589)", color: "white"}}><span aria-hidden="true"></span> Signup here</Link></p>
                    </Col>
                    
                </Form>
            </Container>
            </Background>
        );
    }
}

export default Login;


