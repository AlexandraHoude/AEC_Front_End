import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import logo from '../../img/spiderman.png';

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleConnexion = this.handleConnexion.bind(this);
    }
    handleConnexion(){
        let connecter = false;

        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;
        if (email.toLowerCase() === "shany.carle@gmail.com" && pass === "alibaba")
            connecter = true;
        this.props.onClick(connecter);
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row className="text-center">
                        <Col>
                            <img src={logo} alt="Spiderman" width="200px" className="text-center"/>
                            <h1>Connexion Bottin employé</h1>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Form>
                                <Form.Group controlId="email">
                                    <Form.Control type="email" placeholder="votrecourriel@exemple.com"/>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Control type="password" placeholder="Mot de passe"/>
                                </Form.Group>

                                <Button  variant="dark" onClick={this.handleConnexion}>
                                    Soumettre
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}