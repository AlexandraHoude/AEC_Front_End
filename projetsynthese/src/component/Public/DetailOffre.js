import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import "./Public.scss";

/**
 * Composant detail offre de stage
 */

class DetailOffre extends Component {
    render() {
        return (
            <div className="container-fluid carte-offre-detail">
                <div className="row">
                    <div className="col-3">
                        <Card style={{ width: '18rem' }} >
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br/>
                <h3>Candidat Recherché</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <br/>
                <h3>Responsabilités</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <br/>
                <h3>À Propos de l'entreprise </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <br/>
            </div>
        );
    }
}

export default DetailOffre;
