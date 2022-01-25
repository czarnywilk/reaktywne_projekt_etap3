import React, {Component} from "react";
import { Container, Form, Nav } from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
const axios = require('axios');

class Register extends Component {

    state = {
        account: {
            username: "", 
            password: "",
            email: ""
        },
        errors: {}
    };

    constructor() {
        super();
    }
 
    handleChangeName = () => {
        this.props.fun();
    }; 

    handleChangeRoute = (response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', this.state.account.username);
        this.setState(this.state);
        this.handleChangeName();
        console.log("Tuż przed zmianą");
        this.props.history.push('/');
    }; 
    
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        console.log(this.state.account.email);
        console.log(this.state.account.username);
        console.log(this.state.account.password);
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: this.state.account.username,
                email: this.state.account.email,
                password: this.state.account.password
            }
        }).then((response) => {
            console.log(response);
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/auth',
                data: {
                    login: this.state.account.username,
                    password: this.state.account.password
                }
            }).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name', this.state.account.username);
                this.handleChangeRoute(response);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
 
 
        console.log("submit - np. zapytanie do serwera");
    };
 
    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    validate = () => {
        const errors = {};
   
        const { account } = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Login is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }
        if (account.email.trim() === '') {
            errors.email = 'E-mail is required!';
        }
   
        return Object.keys(errors).length === 0 ? null : errors;
      };
   
 
    render() {
        return (
            <div class="container" style={styles.footer}>
                <div class="row">
                    <div class="col-sm-12">
                        <Form onSubmit={this.handleSubmit}>
                            <h2 className="white-text text-center">Rejestracja</h2>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="white-text">Login</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz login" value={this.state.account.username} onChange={this.handleChange} name="username" />
                                {this.state.errors.username &&
                                <div className="alert alert-danger">{this.state.errors.username}</div>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="white-text">Adres e-mail</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz e-mail" value={this.state.account.email} onChange={this.handleChange} name="email" />
                                {this.state.errors.email &&
                                <div className="alert alert-danger">{this.state.errors.email}</div>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className="white-text">Hasło</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz hasło" value={this.state.account.password} onChange={this.handleChange} name="password" />
                                {this.state.errors.password &&
                                <div className="alert alert-danger">{this.state.errors.password}</div>}
                            </Form.Group>
                            <div className="btn-signup mt-4">
                                <Nav.Link href="/" className="btn-signup-color">
                                    <Button variant="primary" type="submit">Rejestracja</Button>
                                </Nav.Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
 }

var styles = {

    footer: {
      backgroundColor:"#424242",
      //position: "absolute",
      left: 0,
      bottom: 20,
      width: "70%",
      overflow: "hidden",
      color: "white",
      padding: 24
    },
  
    copyright: {
      color: "#909090"
    },
    copyrightName: {
      color: "#dedede"
    }
  };

export default withRouter(Register);