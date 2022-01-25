import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { Container, Form, Nav, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const axios = require('axios');

class Loginbox extends Component {

    state = {
        film: {
            title: ""
        }
    };

    constructor() {
        super();
        this.films = [];
    }

    async componentDidMount() {
        await axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then(res => {
                const film = res.data;
                this.films = film ;
            });
        this.setState(this.films);
        console.log(this.films);
    }

    handleChange = (event) => {
        const film = {...this.state.film};
        film[event.currentTarget.name] = event.currentTarget.value;
        this.setState({film});
    };

    /*handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };*/

    handleChangeRoute = (id) => {
        this.props.fun(id);
    }; 
    
    handleSubmit = (event) => {
        event.preventDefault();
        for (const film in this.films){
            if (this.films[film].title === this.state.film.title){
                console.log("dwa");                
                this.handleChangeRoute(this.films[film].id);
                return;
            }
        }
 
 
        console.log("submit - np. zapytanie do serwera");
    };

    render() {
        return(
            <div class="container" style={styles.container}>
                <div class="row">
                    <div className="col-sm-12">
                        <Form onSubmit={this.handleSubmit}>
                            <h2 className="white-text text-center">Wyszukiwarka</h2>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="white-text">Tytuł</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz tytuł" value={this.title} onChange={this.handleChange} name="title" />
                            </Form.Group>
                            <div className="btn-signup mt-4">
                                <Nav.Link href="/" className="btn-signup-color">
                                    <Button variant="primary" type="submit" onClick = {this.handleSubmit}>Wyszukiwanie</Button>
                                </Nav.Link>
                            </div>
                        </Form>
                    </div>
                </div>
        </div>
        )
    }
}

var styles = {
    container: {
      padding: 24,
      backgroundColor: "#212121",
      color: "white",
      marginTop: "10px"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    image: {
        padding: 0
    }
  };

export default Loginbox;