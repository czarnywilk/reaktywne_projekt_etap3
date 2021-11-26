import React from "react";
import { Container, Form, Nav } from 'react-bootstrap'
import { Button} from 'react-bootstrap';

const AddFilm = (props) => {
    var years = [];
    for (var i = 2021; i >= 1900; i--){
        years[2021-i] = i;
    }
    return (
        <div class="container" style={styles.footer}>
            <div class="row">
                <div class="col-sm-8">
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
}

var styles = {

    footer: {
      backgroundColor:"#424242",
      //position: "absolute",
      left: 0,
      bottom: 20,
      width: "100%",
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