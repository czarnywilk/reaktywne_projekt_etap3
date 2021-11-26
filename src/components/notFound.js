import React from "react";
import { Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container>
            <div className="center-content" style={{backgroundColor: "black"}}>
                <h1 className="display-4">404 - Nie znaleziono!</h1>
                <p className="lead">Strona nie istnieje</p>
                <hr className="my-4" />
                <p>Wróć do strony głównej</p>
                <div className="btn-home">
                    <Nav.Link href="/" className="btn-color">
                        <div className="white-text">Strona główna</div>
                    </Nav.Link>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;