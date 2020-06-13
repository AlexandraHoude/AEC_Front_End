import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Connexion} from '../components/Connexion';
import {Deconnexion} from '../components/Deconnexion';
import {Librairie} from "./Librairie";
import './accueil.css';

export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {connecter: false};
        this.gestionConnexion = this.gestionConnexion.bind(this);
        this.validerConnexion = this.validerConnexion.bind(this);
        this.state = {Librairie};
    }

    validerConnexion(connexion){
        this.setState({ connecter: connexion });
    }

    gestionConnexion(){
        if(this.state.connecter){
            return (
                <Container fluid>
                    <Row lg={2}>
                        <Col>
                            <Deconnexion onClick={this.validerConnexion} />
                        </Col>
                    </Row>
                    <Librairie />
                </Container>
            )
        }
        else {
            return(
                <Connexion onClick={this.validerConnexion} />
            )
        }
    }
    render() {
        return (
            this.gestionConnexion()
        );
    }
}