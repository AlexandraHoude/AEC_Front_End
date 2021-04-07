import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPointDown} from '@fortawesome/free-solid-svg-icons'
import NavBarAdmin from "./NavBarAdmin";
import Sidebar from "./Sidebar";

/**
 * Composant comprenant les cartes de demande de stage
 */

class DemandeStage extends Component {
    render() {
        return(
            <div>
                <NavBarAdmin></NavBarAdmin>
                <Sidebar></Sidebar>
                <div>
                    <h2>Demandes de stage <FontAwesomeIcon icon={faHandPointDown}/></h2>
                    <br/>
                    <div className="col-8">
                        <Card>
                            <Card.Header>Développeur Web</Card.Header>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Title>Jean-Sébastien Tremblay </Card.Title>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Formation:</strong> Développement Web</Card.Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Text><strong>Ville:</strong> Trois-Rivières</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Début:</strong> 2021-03-15</Card.Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Text><strong>Établissement Scolare:</strong> Cégep de
                                            Trois-Rivières</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Fin:</strong> 2021-06-15</Card.Text>
                                    </div>
                                </div>
                                <br/>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </Card.Text>
                                <div className="row">
                                    <div className="col-8">
                                        <Button variant="danger">Détails</Button>
                                    </div>
                                    <div className="col-4">
                                        <Button variant="outline-success">Modifier</Button>
                                        <Button variant="outline-danger">Supprimer</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br/>
                <div>
                    <div className="col-8">
                        <Card>
                            <Card.Header>Développeur Web</Card.Header>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Title>Jean-Sébastien Tremblay </Card.Title>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Formation:</strong> Développement Web</Card.Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Text><strong>Ville:</strong> Trois-Rivières</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Début:</strong> 2021-03-15</Card.Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Text><strong>Établissement Scolare:</strong> Cégep de Trois-Rivières</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Fin:</strong> 2021-06-15</Card.Text>
                                    </div>
                                </div>
                                <br/>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <div className="row">
                                    <div className="col-8">
                                        <Button variant="danger">Détails</Button>
                                    </div>
                                    <div className="col-4">
                                        <Button variant="outline-success">Modifier</Button>
                                        <Button variant="outline-danger">Supprimer</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br/>
                <div>
                    <div className="col-8">
                        <Card>
                            <Card.Header>Développeur Web</Card.Header>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Title>Jean-Sébastien Tremblay </Card.Title>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Formation:</strong> Développement Web</Card.Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Text><strong>Ville:</strong> Trois-Rivières</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Début:</strong> 2021-03-15</Card.Text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card.Text><strong>Établissement Scolare:</strong> Cégep de
                                            Trois-Rivières</Card.Text>
                                    </div>
                                    <div className="col-6">
                                        <Card.Text><strong>Fin:</strong> 2021-06-15</Card.Text>
                                    </div>
                                </div>
                                <br/>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </Card.Text>
                                <div className="row">
                                    <div className="col-8">
                                        <Button variant="danger">Détails</Button>
                                    </div>
                                    <div className="col-4">
                                        <Button variant="outline-success">Modifier</Button>
                                        <Button variant="outline-danger">Supprimer</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default DemandeStage;
