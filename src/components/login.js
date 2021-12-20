import React from "react";
import { Container, Form, Nav } from 'react-bootstrap'
import { Button} from 'react-bootstrap';

const Login = (props) => {
    
    return (
        <div class="container" style={styles.footer}>
            <div class="row">
                <div class="col-sm-12">
                    <Form>
                        <h2 className="white-text text-center">Logowanie</h2>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="white-text">Login</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz login" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="white-text">Hasło</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz hasło" />
                        </Form.Group>
                        <div className="btn-signup mt-4">
                            <Nav.Link href="/" className="btn-signup-color">
                                <Button variant="primary" type="submit">Logowanie</Button>
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
export default Login;