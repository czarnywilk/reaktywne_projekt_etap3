import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { Container, Form, Nav, Button } from 'react-bootstrap';

class Loginbox extends Component {
    constructor() {
        super();
        this.state = {
            isShown: true
        }
        this.years = [];
        for (var i = 2021; i >= 1900; i--){
            this.years[2021-i] = i;
        }
        console.log(this.years);
    }

    render() {
        return(
            <div class="container" style={styles.container}>
                <div class="row">
                    <div className="col-sm-12">
                        <Form>
                            <h2 className="white-text text-center">Wyszukiwarka</h2>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label className="white-text">Tytuł</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz tytuł" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label className="white-text">Rok produkcji</Form.Label>
                                <Form.Select>
                                    {this.years.map((item, i) => {
                                        console.log(item);
                                        return (
                                            <option key={2021 - i}>{item}</option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <div className="btn-signup mt-4">
                                <Nav.Link href="/" className="btn-signup-color">
                                    <Button variant="primary" type="submit">Wyszukiwanie</Button>
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