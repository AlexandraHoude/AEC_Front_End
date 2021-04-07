import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Accueil from "./Accueil";
import Candidats from "./Candidats";
import PageListeOffreStage from "./PageListeOffreStage";
import PageConnexion from "./PageConnexion";
import APropos from "./APropos";

/**
 * Barre de navigation du site web
 */

class NavBar extends Component {
    render() {
        return (
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Link to="/"><h1>Le Stage</h1></Link>
                <Nav.Item>
                    <Link to="/offrestage">Trouver votre Stage</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/candidats">Trouver un stagiaire</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/connexion">Connexion</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/apropos">À Propos</Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default NavBar;
