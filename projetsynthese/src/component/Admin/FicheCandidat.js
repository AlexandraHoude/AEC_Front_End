import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointDown, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import NavBarAdmin from "./NavBarAdmin";
import Sidebar from "./Sidebar";
import "./Admin.scss";

/**
 * composant fiche du candidat
 */

class FicheCandidat extends Component {
    render() {
        return(
            <div>
                <NavBarAdmin></NavBarAdmin>
                <Sidebar></Sidebar>
                <div className="SiteBody">
                    <h1>Fiche du candidat <FontAwesomeIcon icon={faHandPointDown}/></h1>
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
                        <h2><FontAwesomeIcon icon={faUserGraduate}/> John Doe</h2>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Nom et prénom du stagiaire</th>
                                <td>Joseph Doe</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>Établissement Scolaire</th>
                                <td>Cégep de Trois-Rivières</td>
                            </tr>
                            <tr>
                                <th>Programme de formation</th>
                                <td>Développement Web</td>
                            </tr>
                            <tr>
                                <th>Courriel</th>
                                <td>john@doe.com</td>
                            </tr>
                            <tr>
                                <th>Téléphone</th>
                                <td>819 991 9911</td>
                            </tr>
                            <tr>
                                <th>Ville</th>
                                <td>Shawinigan</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br/>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Communiquer avec le candidat</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                                <br/>
                                <Button variant="danger">Envoyer</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FicheCandidat;
