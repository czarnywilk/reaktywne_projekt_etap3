import React, {Component} from "react";
import { Container, Form, Nav } from 'react-bootstrap'
import { Button} from 'react-bootstrap';
const axios = require('axios');

/*const AddFilm = (props) => {
    var years = [];
    for (var i = 2021; i >= 1900; i--){
        years[2021-i] = i;
    }
    return (
        <div class="container" style={styles.footer}>
            <div class="row">
                <div class="col-sm-12">
                    <Form>
                        <h2 className="white-text text-center">Dodaj film</h2>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="white-text">Tytuł</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz tytuł" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="white-text">Rok produkcji</Form.Label>
                            <Form.Select>
                                {years.map((item, i) => {
                                    console.log(item);
                                    return (
                                        <option key={2021 - i}>{item}</option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="white-text">Link do plakatu</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz link" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control placeholder="Opis..." as="textarea" rows={5} />
                        </Form.Group>
                        <div className="btn-signup mt-4">
                            <Nav.Link href="/" className="btn-signup-color">
                                <Button variant="primary" type="submit">Submit</Button>
                            </Nav.Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}*/

class AddFilm extends Component {

    state = {
        film: {
            title: "", 
            image: "",
            content: ""
        },
        errors: {}
    };
 
    handleChangeRoute = (response) => {
        
        this.props.history.push('/');
    }; 
    
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: this.state.film.title,
                image: this.state.film.image,
                content: this.state.film.content
            }
        }).then((response) => {
            console.log(response);
            
            this.handleChangeRoute(response);
        }).catch((error) => {
            console.log(error.response);
        });
 
 
        console.log("submit - np. zapytanie do serwera");
    };
 
    handleChange = (event) => {
        const film = {...this.state.film};
        film[event.currentTarget.name] = event.currentTarget.value;
        this.setState({film});
    };

    validate = () => {
        const errors = {};
   
        const { film } = this.state;
        if (film.title.trim() === '') {
            errors.title = 'Title is required!';
        }
        if (film.image.trim() === '') {
            errors.image = 'Image is required!';
        }
        if (film.content.trim() === '') {
            errors.content = 'Content is required!';
        }
   
        return Object.keys(errors).length === 0 ? null : errors;
      };
   
 
    render() {
        return (
            <div class="container" style={styles.footer}>
                <div class="row">
                    <div class="col-sm-12">
                        <Form onSubmit={this.handleSubmit}>
                            <h2 className="white-text text-center">Dodawanie filmu</h2>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="white-text">Tytuł</Form.Label>
                                <Form.Control type="text" placeholder="Tytuł..." value={this.state.film.title} onChange={this.handleChange} name="title" />
                                {this.state.errors.title &&
                                <div className="alert alert-danger">{this.state.errors.title}</div>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="white-text">Link do zdjęcia</Form.Label>
                                <Form.Control type="text" placeholder="Link..." value={this.state.film.image} onChange={this.handleChange} name="image" />
                                {this.state.errors.image &&
                                <div className="alert alert-danger">{this.state.errors.image}</div>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control placeholder="Opis..." as="textarea" rows={5} value={this.state.film.content} onChange={this.handleChange} name="content" />
                                {this.state.errors.content &&
                                <div className="alert alert-danger">{this.state.errors.content}</div>}
                            </Form.Group>
                            <div className="btn-signup mt-4">
                                <Nav.Link href="/" className="btn-signup-color">
                                    <Button variant="primary" type="submit">Dodaj film</Button>
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
export default AddFilm;