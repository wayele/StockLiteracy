import React, { Component } from 'react';
import API from '../../utils/API'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';
import Background from "../Background";



class Signup extends Component {
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
        API.signupUser(userData).then(res => {
            console.log(res);
            if (!res.data.errmsg) {
                console.log('successful signup')
                window.location = "/dashboard"
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)

        })
    }
    render() {
        return (
            <Background>
            <Container id="signup" className="App" style={{fontFamily: "Georgia", color: "rgb(0, 195, 255)", fontSize: 30}}>
                <h2 style={{fontFamily: "Georgia", fontSize: 75}}>Sign Up</h2>
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
                    </Col>
                    
                
                </Form>
            </Container>
            </Background>
        );
    }
}

export default Signup;