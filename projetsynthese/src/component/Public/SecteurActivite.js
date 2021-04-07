import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

/**
 * Menu latéral secteur d'activité, présent sur plusieurs page
 */

class SecteurActivite extends Component {
    render() {
        return (
            <div className="secteur-activite">
                <h4>Secteur d'activité</h4>
                <br/>
                <Card style={{ width: '18rem' }} className="secteur-activite-card">
                    <ListGroup variant="flush">
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default SecteurActivite;
