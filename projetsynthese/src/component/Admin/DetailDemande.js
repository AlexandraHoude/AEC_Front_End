import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import {faHandPointDown, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBarAdmin from "./NavBarAdmin";
import Sidebar from "./Sidebar";

/**
 * Tableau de la détail de demande de stage
 */

class DetailDemande extends Component {
    render() {
        return(
            <div>
                <NavBarAdmin></NavBarAdmin>
                <Sidebar></Sidebar>
                <h1>Détail de la demande de stage <FontAwesomeIcon icon={faHandPointDown}/></h1>
                <br/>
                <div className="row">
                    <div className="col-8">
                        <Button variant="danger">Retour à la liste</Button>
                    </div>
                    <div className="col-4">
                        <Button variant="outline-success">Modifier</Button>
                        <Button variant="outline-danger">Supprimer</Button>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="col-6">
                    <h2><FontAwesomeIcon icon={faUserGraduate}/> Développeur Web</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Nom et prénom du stagiaire</th>
                            <td>Joseph Doe</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Établissement scolaire</th>
                            <td>Cégep de Trois-Rivières</td>
                        </tr>
                        <tr>
                            <th>Programme de formation</th>
                            <td>Développement Web</td>
                        </tr>
                        <tr>
                            <th>Compétences acquise durant le programme</th>
                            <td>HTML, CSS, Javascript, React, Vue.js</td>
                        </tr>
                        <tr>
                            <th>Secteur d'activité</th>
                            <td>Technologies de l'information</td>
                        </tr>
                        <tr>
                            <th>Ville</th>
                            <td>Shawinigan</td>
                        </tr>
                        <tr>
                            <th>Type de stage</th>
                            <td>temps plein</td>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <td>2021-05-15</td>
                        </tr>
                        <tr>
                            <th>Date de début</th>
                            <td>2021-06-15</td>
                        </tr>
                        <tr>
                            <th>Date de fin</th>
                            <td>test</td>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <td>test</td>
                        </tr>
                        <tr>
                            <th>Nombre d'heure semaine</th>
                            <td>25 heures</td>
                        </tr>
                        <tr>
                            <th>Rémunération</th>
                            <td>à la discrétion de l'entreprise</td>
                        </tr>
                        <tr>
                            <th>Informations supplémentaires</th>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Button variant="outline-success">Modifier</Button>
                    <Button variant="outline-danger">Supprimer</Button>
                    <br/>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Communiquer avec le candidat</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <br/>
                            <Button variant="danger">Envoyer</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}

export default DetailDemande;
