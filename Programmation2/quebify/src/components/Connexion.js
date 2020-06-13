import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../img/spotify.png';
import '../components/connexion.css';

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.GererConnexion = this.GererConnexion.bind(this);
    }
    GererConnexion(){
        let connecter = false;
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        if (email.toLowerCase() === "shany" && pass === "patate")
            connecter = true;
        this.props.onClick(connecter);
    }

    render() {
        return (
            <Container className="pt-5">
                <Col lg={{offset: 3, span: 6}}>
                    <Jumbotron >
                        <Row className="text-center">
                            <Col lg={{offset: 1, span: 10}}>
                                <img src={logo} alt="Spotify" width="200px" className="text-center"/>
                                <h1 className="texte-connexion">Connexion</h1>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col lg={{offset: 1, span: 10}}>
                                <Form>
                                    <Form.Group controlId="email">
                                        <Form.Control type="email" placeholder="Adresse courriel ou nom d'ordinateur"/>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Control type="password" placeholder="Mot de passe"/>
                                    </Form.Group>
                                    <Button className="connexionButton"
                                            variant="dark"
                                            onClick={this.GererConnexion}>
                                        SE CONNECTER
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Container>
        );
    }
}