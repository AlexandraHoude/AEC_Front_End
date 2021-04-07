import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import "./Public.scss";

/**
 * Pub pour publier une offre de stage, texte à gauche
 */

class PublicationStage2 extends Component {
    render() {
        return(
            <div className="container-fluid pub2-stage-photo" >
                <div className="row" >
                    <div className="col pub-stage">
                        <h2>Pourquoi publier une offre de stage?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                        <br/>
                        <Button variant="danger" size="lg" active> Publier une offre de stage </Button>{' '}
                        <br/>
                    </div>
                    <div className="col">
                        <img src="https://picsum.photos/800/800" alt="randomHero"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default PublicationStage2;
